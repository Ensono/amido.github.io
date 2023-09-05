import React from "react";
import clsx from "clsx";

import customStyle from "./TechSupportedByStacks.module.css";
import styles from "../../styles.module.css";

import CSharpLogo from "./Logos/CSharpLogo";
import SpringBootLogo from "./Logos/SpringBootLogo";
import JavaLogo from "./Logos/JavaLogo";
import NodeLogo from "./Logos/NodeLogo";
import DotNetCoreLogo from "./Logos/DotNetCoreLogo";
import ReactLogo from "./Logos/ReactLogo";
import Auth0Logo from "./Logos/Auth0Logo";
import SwaggerLogo from "./Logos/SwaggerLogo";
import GatlingLogo from "./Logos/GatlingLogo";
import CucumberLogo from "./Logos/CucumberLogo";
import XunitLogo from "./Logos/XUnitLogo";
import ShouldlyLogo from "./Logos/ShouldlyLogo";
import AppliToolsLogo from "./Logos/AppliToolsLogo";
import KarateLogo from "./Logos/KarateLogo";
import XbehaveLogo from "./Logos/XBehaveLogo";
import CypressLogo from "./Logos/CypressLogo";
import JunitLogo from "./Logos/JUnitLogo";
import TestcafeLogo from "./Logos/TestcafeLogo";
import RestAssuredLogo from "./Logos/RestAssuredLogo";
import JestLogo from "./Logos/JestLogo";
import AzurePipelinesLogo from "./Logos/AzurePipelinesLogo";
import SerenityLogo from "./Logos/SerenityLogo";
import GoogleLighthouseLogo from "./Logos/GoogleLighthouseLogo";
import AzureKubernetesServiceLogo from "./Logos/AzureKubernetesServiceLogo";
import TerraformLogo from "./Logos/TerraformLogo";
import GitlabLogo from "./Logos/GitLabLogo";
import DockerLogo from "./Logos/DockerLogo";
import AzureBlobStorageLogo from "./Logos/AzureBlobStorageLogo";
import GoogleKubernetesEngineLogo from "./Logos/GoogleKubernetesEngineLogo";
import CosmosDbLogo from "./Logos/CosmosDbLogo";
import GoogleCloudStorageLogo from "./Logos/GoogleCloudStorageLogo";
import BddfyLogo from "./Logos/BDDfyLogo";


const TechSupportedByStacks = () => {
    const triggerSearch = (term) => {
        document.querySelector(".DocSearch-Button").click();
        setTimeout(() => {
          let input = document.querySelector(".DocSearch-Input");
          let lastValue = input.value;
          input.value = term;
          let event = new Event("input", { bubbles: true });
          // hack React15
          event.simulated = true;
          // hack React16 内部定义了descriptor拦截value，此处重置状态
          let tracker = input._valueTracker;
          if (tracker) {
            tracker.setValue(lastValue);
          }
          input.dispatchEvent(event);
        }, 100);
      };

    return (
        <div className={customStyle.mainHolder}>
            <div className={customStyle.main}>
                <section className={styles.section}>
                    <h2 className={styles.textCenter}>Technologies supported by Stacks</h2>
                    <div className={customStyle.tableContainer}>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><CSharpLogo className={clsx(customStyle.flexRow)} role="cell" onClick={() => triggerSearch("C#")} /></div></div>
                        <div><div><JavaLogo className={clsx(customStyle.flexRow)} role="cell" onClick={() => triggerSearch("Java")} /></div></div>
                        <div><div><NodeLogo className={clsx(customStyle.flexRow, customStyle.flexRow10Sm)} role="cell" onClick={() => triggerSearch("node")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><DotNetCoreLogo className={clsx(customStyle.flexRow, customStyle.flexRow10Sm)} role="cell" onClick={() => triggerSearch(".NET Core")} /></div></div>
                        <div><div><SpringBootLogo className={clsx(customStyle.flexRow, styles.springBoot)} role="cell" onClick={() => triggerSearch("Spring Boot")} /></div></div>
                        <div><div><ReactLogo className={clsx(customStyle.flexRow)} role="cell" onClick={() => triggerSearch("React")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><Auth0Logo className={clsx(customStyle.flexRow)} role="cell" onClick={() => triggerSearch("Auth0")} /></div></div>
                        <div><div><SwaggerLogo className={clsx(customStyle.flexRow, styles.swagger, customStyle.flexRow20Sm)} role="cell" onClick={() => triggerSearch("Swagger")} /></div></div>
                        <div><div><AzureBlobStorageLogo className={clsx(customStyle.flexRow, styles.azureBlob)} role="cell" onClick={() => triggerSearch("Azure Blob Storage")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><CosmosDbLogo className={clsx(customStyle.flexRow, styles.cosmosdb)} role="cell" onClick={() => triggerSearch("Cosmos DB")} /></div></div>
                        <div><div><CucumberLogo className={clsx(customStyle.flexRow, styles.cucumber)} role="cell" onClick={() => triggerSearch("Cucumber")}/></div></div>
                        <div><div><GoogleCloudStorageLogo className={clsx(customStyle.flexRow, styles.googleStorage)} role="cell" onClick={() => triggerSearch("Google Cloud Storage")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><TerraformLogo className={clsx(customStyle.flexRow, styles.terraform, customStyle.flexRow40Sm)} role="cell" onClick={() => triggerSearch("Terraform")} /></div></div>
                        <div><div><CypressLogo className={clsx(customStyle.flexRow, styles.cypress, customStyle.flexRow20Sm)} role="cell" onClick={() => triggerSearch("Cypress")}/></div></div>
                        <div><div><KarateLogo className={clsx(customStyle.flexRow, styles.karate)} role="cell" onClick={() => triggerSearch("Karate")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><XbehaveLogo className={clsx(customStyle.flexRow, customStyle.flexRow10Sm)} role="cell" onClick={() => triggerSearch("xBehave")} /></div></div>
                        <div><div><JunitLogo className={clsx(customStyle.flexRow, customStyle.flexRow40Sm)} role="cell" onClick={() => triggerSearch("JUnit")} /></div></div>
                        <div><div><TestcafeLogo className={clsx(customStyle.flexRow, styles.testCafe)} role="cell" onClick={() => triggerSearch("Testcafe")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><BddfyLogo className={clsx(customStyle.flexRow, styles.bddfy)} role="cell" onClick={() => triggerSearch("BDDfy")} /></div></div>
                        <div><div><RestAssuredLogo className={clsx(customStyle.flexRow, customStyle.flexRow40Sm)} role="cell" onClick={() => triggerSearch("REST-Assured")} /></div></div>
                        <div><div><JestLogo className={clsx(customStyle.flexRow, styles.jest)} role="cell" onClick={() => triggerSearch("Jest")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><AzurePipelinesLogo className={clsx(customStyle.flexRow, styles.azurePipelines)} role="cell" onClick={() => triggerSearch("Azure Pipelines")} /></div></div>
                        <div><div><SerenityLogo className={clsx(customStyle.flexRow, customStyle.flexRow40Sm)} role="cell" onClick={() => triggerSearch("Serenity")} /></div></div>
                        <div><div><GoogleLighthouseLogo className={clsx(customStyle.flexRow, styles.googleLighthouse)} role="cell" onClick={() => triggerSearch("Google Lighthouse")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><AzureKubernetesServiceLogo className={clsx(customStyle.flexRow, styles.azureKubernetes)} role="cell" onClick={() => triggerSearch("Azure Kubernetes Service")} /></div></div>
                        <div><div><ShouldlyLogo className={clsx(customStyle.flexRow, customStyle.flexRow30Sm)} role="cell" onClick={() => triggerSearch("Shouldly")} /></div></div>
                        <div><div><GitlabLogo className={clsx(customStyle.flexRow)} role="cell" onClick={() => triggerSearch("GitLab")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><DockerLogo className={clsx(customStyle.flexRow, customStyle.flexRow10Sm)} role="cell" onClick={() => triggerSearch("Docker")} /></div></div>
                        <div><div><AppliToolsLogo className={clsx(customStyle.flexRow, styles.applitools, customStyle.flexRow30Sm)} role="cell" onClick={() => triggerSearch("Applitools")} /></div></div>
                        <div><div><GoogleKubernetesEngineLogo className={clsx(customStyle.flexRow, styles.googleKubernetes)} role="cell" onClick={() => triggerSearch("Google Kubernetes Engine")} /></div></div>
                        </div>
                        <div className={clsx(customStyle.flexTable)} role="rowGroup">
                        <div><div><XunitLogo className={clsx(customStyle.flexRow, styles.xunit, customStyle.flexRow40Sm)} role="cell" onClick={() => triggerSearch("xUnit")}/></div></div>
                        <div><div><GatlingLogo className={clsx(customStyle.flexRow, customStyle.flexRow40Sm)} role="cell" onClick={() => triggerSearch("Gatling")} /></div></div>
                    </div>
                </div>
            </section>
        </div>
    </div>    
    )
}



export default TechSupportedByStacks;
