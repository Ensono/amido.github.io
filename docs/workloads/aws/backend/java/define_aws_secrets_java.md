---
id: define_aws_secrets_java
title: AWS Secrets as Spring Properties
sidebar_label: AWS Secrets as Spring Properties
hide_title: false
hide_table_of_contents: false
description: How to use AWS Secrets as properties
keywords:
- aws 
- xray
- secrets
- properties
- settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction to AWS Secret Manager

AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service 
enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. 

Users and applications retrieve secrets with a call to Secrets Manager APIs, eliminating the need to hardcode sensitive 
information in plain text. Secrets Manager offers secret rotation with built-in integration for Amazon Relational Database 
Service (Amazon RDS), Amazon Redshift, and Amazon DocumentDB. Also, the service is extensible to other types of secrets, 
including API keys and OAuth tokens. In addition, Secrets Manager enables you to control access to secrets using fine-grained 
permissions and audit secret rotation centrally for resources in the AWS Cloud, third-party services, and on-premises.

## Usage within Stacks

Support for AWS Secret Manager within Stacks is demonstrated as the provision of a number of secrets defined in AWS that are used as 
properties within the codebase. As the purpose of this is to simply showcase functionality, the use-case is that some secrets are 
defined in the AWS Management Console and provided to a class within the application.

Stacks uses Spring Cloud integration capability to allow a developer to access a secret as if it were a property defined locally.
This reduces the amount of coding required (for example, they don't need to access the AWS SDK directly) by allowing the developer to 
simply specify an additional property source to their application through a series of properties in the application property files under
resources.

### Giving Spring Cloud permission to access AWS Secrets

Spring Cloud uses the AWS SDK to access resources, and it needs AWS credentials with permission to do that.

On Amazon EC2, the daemon uses the instance's instance profile role automatically. Locally, save your access keys to a file
named `credentials` in your user directory under a folder named `.aws`.

#### Example ~/.aws/credentials

```text
[default]
aws_access_key_id = AKIAIOSFODNN7EXAMPLE
aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

## Defining Secrets in AWS Secret Manager

**NOTE:** In order to work around an outstanding issue in Spring Cloud please ensure that the _name of any secrets_ defined in the AWS
Management Console end with a trailing `/`. See the screenshots below for examples.

### Defining a Secret

Ensure that the Secret Name ends with a trailing `/`.

<img alt="Defining a Secret" src={useBaseUrl('img/aws_java_secret_definition.png')} />

### Defining Secret Values

Multiple secret keys and values can de defined within a single secret definition. In the example below, two are defined.

<img alt="Defining Secret Values" src={useBaseUrl('img/aws_java_secret_definition_values.png')} />

## Using AWS Secret Property Providers 

Within the Stacks code, property providers can be specified within the application resource files: -

```yaml
spring.config.import:
  - optional:aws-secretsmanager:/stacks-secret/example-1/
  - optional:aws-secretsmanager:/stacks-secret/example-2/
```

Note that the name of the secrets defined in AWS from the first screenshot are referenced above. It is also possible to mark
each property provider with the `optional:` flag meaning that if the secret cannot be found then no exception will be thrown
at startup (please adjust for your own specific use-case).

## Accessing Secret Values via Property Placeholders

Within the Java code, Spring Cloud now provides support for accessing secret values as any other property. This is through the use
of standard property placeholders as follows: -

```java
  @Value(value = "${stacks-secret-1:secret-not-available}")
  private String secret1;
```

As with any other properties it is possible to specify a default should the secret not be defined (or inaccessible due to 
invalid credentials) - in this example the value "secret-not-available" would be returned. 

If no default values is specified and then the secret is unavailable then it follows the same rules as other Spring property 
providers in that an exception will be generated.

### Testing the Secret Properties

Assuming the system has been configured properly, it should be possible to start the Stacks application and then access 
the configured secret values using a simple cURL command via a test controller endpoint, as follows:

```bash
~/Stacks$ curl http://localhost:9000/v1/secrets

Secrets -> SECRET-VALUE-1, SECRET-VALUE-2, SECRET-VALUE-3, SECRET-VALUE-4
```

As described above, if the values are not as seen here please check that the following are correct: -

1. AWS Credentials are correct
2. User/Role being used has been granted permission to read AWS Secrets 
3. AWS Secret Manager for the Organisation used contains the named secrets being accessed