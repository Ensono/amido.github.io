---
id: build_project_netcore
title: Build & Run
sidebar_label: Build & Run the Project
---

### Build locally

Move to the `<PROJECT-NAME>/src/api` folder, then

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  groupId="operating-systems"
  defaultValue="windows"
  values={[
  {label: 'Windows', value: 'windows'},
  {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="windows">
   TODO
  </TabItem>

  <TabItem value="linux">
      export COSMOSDB_KEY=&#36;&#123;COSMOSDB_KEY&#125;
      <br></br>
      <br></br>
      dotnet restore
      <br></br>
      dotnet clean
      <br></br>
      dotnet build
      <br></br>
      dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj
  </TabItem>
</Tabs>


### Build using docker container

From the `<PROJECT-NAME>/src/api` folder, build a Docker image using e.g. the command below:

   ```text
   docker build -t dotnet-api .
   ```

This uses the `Dockerfile` in this folder to generate the Docker image.

Once the Docker image is created, you can then run a Docker container based on this image using e.g.

   ```text
   docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json -e COSMOSDB_KEY=your-key dotnet-api:latest
   ````

where the `COSMOSDB_KEY` is the value as described above. Note that the `appsettings.json` value is mounted here for running locally,
but not if the full project is deployed to Azure, where the build process will perform the substitution.
