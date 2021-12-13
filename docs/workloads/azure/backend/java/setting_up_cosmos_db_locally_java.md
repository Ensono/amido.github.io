---
id: setting_up_cosmos_db_locally_java
title: Cosmos DB Emulator
sidebar_label: Cosmos DB Emulator
hide_title: false
hide_table_of_contents: false
description: How to set up the Cosmos DB Emulator
keywords:
  - cosmos db
  - emulator 
  - settings
  - template
  - certificate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Set up Cosmos DB Emulator locally

The Azure CosmosDB Emulator provides a local environment that emulates the Azure Cosmos DB
service for development purposes. Using the Azure CosmosDB Emulator, you can develop and test
your application locally, without creating an Azure subscription or incurring any costs.
Latest instruction can be found in [here](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=cli%2Cssl-netstd21)

### Using the Cosmos DB Emulator to run the database locally

Download and install the latest version of **CosmosDB Emulator**. Once it's installed, it will be
available on [localhost](https://localhost:8081/_explorer/index.html).

<Tabs
    groupId="operating-systems"
    defaultValue="unix"
    values={[
    { label: 'Unix', value: 'unix'},
    { label: 'Windows', value: 'windows'}
]}>
<TabItem value="windows">
You can also find the Emulator from Start Menu and type Azure CosmosDB Emulator.
</TabItem>
<TabItem value="unix">

The **CosmosDB Emulator** service is primarily a Windows service, so using it in Unix/Linux/MacOS requires a few
additional steps. One of the simplest ways of running the emulator is to download
the [Linux Emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/linux-emulator) for Docker.
Please follow the installation instructions, with one exception: when running the Docker image, don't set
the `AZURE_COSMOS_EMULATOR_IP_ADDRESS_OVERRIDE=$ipaddr`. Instead, set it to `127.0.0.1`.

</TabItem>
</Tabs>

The value for `COSMOSDB_KEY` can be found within the emulator. See Primary Key:

![cosmosdb](/img/cosmosdb_emulator_3.png)
Please, take a note of the cosmosdb URI, databaseName and key, as they will be needed to configure the
application in a further step.

### Create the Cosmos DB structure

Based on the template the CosmosDB has to contain a fixed structure.

Create a collection `Stacks` with a container id `menu` and the partition key `/id`.

Create a database called Stacks for the application, and a database called `CosmosDBPackage` for the
integration tests of the CosmosDB package (using the same container id and partition key as the main database).

![cosmosdb](/img/cosmosdb_emulator_1.png)

<br />

The **Stacks** database should have a container called **Menu** partitioned by **/id**.

![cosmosdb](/img/cosmosdb_emulator_2.png)

<br />

### Export Azure Cosmos DB Emulator certificates to use in the Java Application

<Tabs
groupId="operating-systems"
defaultValue="unix"
values={[
{ label: 'Unix', value: 'unix'},
{ label: 'Windows', value: 'windows'}
]}>
<TabItem value="windows">
Start the Windows Certificate manager by running certlm.msc and navigate to the Personal->Certificates folder and open the certificate with the friendly name DocumentDbEmulatorCertificate.

![certificates](/img/cosmosdb_emulator_certificate.png)

Follow the steps in [Export the Azure Cosmos DB TLS/SSL certificate](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator-export-ssl-certificates#export-emulator-certificate)
Also Export CosmosEmulatorSecretes following the above link.

### Determine which root certificates have been installed

Follow the steps to determine which root certificates have been installed [Add Root certificate](https://docs.microsoft.com/en-us/azure/developer/java/sdk/java-sdk-add-certificate-ca-store#determining-which-root-certificates-are-installed)

Now import the documentdbemulatorcert and CosmosEmulatorSecrets certificate.

```bash
keytool -keystore "location to download the root certificate" -cacerts -importcert -alias documentdbemulator -file "location of documentdbemulatorcert.cer"
```

type the password when prompted "changeit" (This should be the same if you haven't changed it when listing the certificates).
If asked "do you trust this certificate" type in "y".

follow the above steps to import cosmosemulatorsecrets certificate

```bash
keytool -keystore "location to download the root certificate" -cacerts -importcert -alias cosmosemulatorcert -file "location of cosmosemulatorsecrets.cer"
```

Go to URL in your browser:

**Firefox** -- click on HTTPS certificate chain (the lock icon right next to URL address). Click "more info" > "security" > "show certificate" > "details" > "export..". Pickup the name and choose file type example.cer.

**Chrome**  -- click on site icon left to address in address bar, select "Certificate" -> "Details" -> "Export" and save in format "Der-encoded binary, single certificate".

Now running the below should list 4 certificates.

```bash
keytool -list -keystore cacerts
```

</TabItem>
<TabItem value="unix">

#### Download the certificate

```bash
curl -k https://localhost:8081/_explorer/emulator.pem > emulatorcert.crt
```

#### Import to Java trust store

```bash
keytool -importcert -cacerts -alias documentdbemulator -file <path to emulatorcert.crt>
```

In order to make sure the certificate is there, you can run the following:

```bash
keytool -list -cacerts | grep -A1 documentdbemulator
```

</TabItem>
</Tabs>

