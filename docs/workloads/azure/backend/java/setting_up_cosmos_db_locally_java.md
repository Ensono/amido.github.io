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

## Set up Cosmos DB Emulator locally

The Azure Cosmos emulator provides a local environment that emulates the Azure Cosmos DB
service for development purposes. Using the Azure Cosmos emulator, you can develop and test
your application locally, without creating an Azure subscription or incurring any costs.
Latest instruction can be found in [here](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=cli%2Cssl-netstd21)

### Using the Cosmos DB Emulator to run the database locally

   Download and install the latest version of CosmosDB Emulator. Once it's installed it will be
   available on [localhost](https://localhost:8081/_explorer/index.html)

   You can also find the Emulator from Start Menu and type Azure Cosmos DB Emulator.
   The value for **COSMOSDB_KEY** can be found within the emulator. See Primary Key:

   ![cosmosdb](/img/cosmosdb_emulator_3.png)
   Set the cosmosdb URI, databaseName and key in application.yml file using the value above

   ```yaml
   azure:
     cosmosdb:
       uri: xxxxxx
       database: xxxxxx
       key: xxxxxx
   ```

<br />

### Create the Cosmos DB structure

  Based on the template the Cosmos DB has to contain a fixed structure.

  Create a collection **Stacks** with a container id **menu** and the partition key **/id**.

  Create a database called Stacks for the application, and a database called CosmosDBPackage for the
  integration tests of the CosmosDB package

  ![cosmosdb](/img/cosmosdb_emulator_1.png)

<br />

  The **Stacks** database should have a container called **Menu** partitioned by **/id**.

  ![cosmosdb](/img/cosmosdb_emulator_2.png)

  <br />

### Export Azure Cosmos DB Emulator certificates to use in the Java Application

  Start the Windows Certificate manager by running certlm.msc and navigate to the Personal->Certificates folder and open the certificate with the friendly name DocumentDbEmulatorCertificate.

  <br />

  ![certificates](/img/cosmosdb_emulator_certificate.png)

  <br />

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

   **Firefox** --  click on HTTPS certificate chain (the lock icon right next to URL address). Click "more info" > "security" > "show certificate" > "details" > "export..". Pickup the name and choose file type example.cer.

   **Chrome**  -- click on site icon left to address in address bar, select "Certificate" -> "Details" -> "Export" and save in format "Der-encoded binary, single certificate".

   Now running the below should list 4 certificates.

   ```bash
   keytool -list -keystore cacerts
   ```
