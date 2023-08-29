import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Select from "react-select";

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

import AmidoStacksLogo from "./Logos/AmidoStacksLogo"

import features from "./Constants/StacksFeatures.constants"
import contribute from "./Constants/Contribute.constants"

function Picker() {
  const [firstOption, setFirstOption] = useState(undefined);
  const [secondOption, setSecondOption] = useState(undefined);
  const [thirdOption, setThirdOption] = useState(undefined);
  const [isFinalChoice, setFinalChoice] = useState(false);

  const baseUrl = useBaseUrl("docs/");
  const OptionMapper = {
    "C# / .NET Core": {
      "REST Web API": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",
        "Amazon Web Services [AWS]":
          "workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",
      },
      "REST Web API with CQRS": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",
        "Amazon Web Services [AWS]":
          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",
      }
    },
    "Java Spring Boot": {
      "REST Web API": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/java/intro_java",
      },
      "REST Web API with CQRS": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/java/intro_java",
      },
      "REST Web API with CQRS and Events": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/java/intro_java",
      },
    },
    "Typescript / Nx": {
      "Client Side or Server Side Rendered Web Application": {
        "Microsoft Azure [Azure]": "nx/nx_stacks",
      },
    },
  };

  const cloudProviders = Object.keys(OptionMapper).map((key) => ({
    value: OptionMapper[key],
    label: key,
  }));

  const applications =
    firstOption && typeof firstOption.value === "object"
      ? Object.keys(firstOption.value).map((option) => {
          return { value: firstOption.value[option], label: option };
        })
      : [];

  const languages =
    secondOption && typeof secondOption.value === "object"
      ? Object.keys(secondOption.value).map((key) => {
          return { value: secondOption.value[key], label: key };
        })
      : [];


  return (
    <div className="container" style={{display:"flex", justifyContent:"center"}}>
      <div className={clsx("col", "col--6", styles.containerSelects)}>
        <Select placeholder="Select Language/Framework"
                value={firstOption}
                onChange={(selected) => {
                  setFirstOption(selected);
                  setSecondOption(null);
                  setFinalChoice(typeof selected.value === "object" ? false : true);
                }}
                options={cloudProviders}
        />

        { applications.length > 0 && (
          <Select placeholder="Select Solution Architecture"
                  value={secondOption}
                  onChange={(selected) => {
                    setSecondOption(selected);
                    setThirdOption(null);
                    setFinalChoice(false);
                  }}
                  options={applications || []}
          />
        )}

        {languages.length > 0 && (
          <Select placeholder="Select Cloud Provider"
                  value={thirdOption}
                  onChange={(selected) => {
                    setThirdOption(selected);
                    setFinalChoice(true);
                  }}
                  options={languages || []}
          />
        )}

        <div className={styles.buttons} style={{ marginTop: 40 }}>
            <Link className={clsx("button button--primary button--lg", isFinalChoice ? "" : styles.disabledButton )}
                  to={ isFinalChoice ? (baseUrl + (thirdOption ? thirdOption.value : firstOption ? firstOption.value : "")) : "" }
                  { ...isFinalChoice ? "" : "disabled"}
            >
              LET'S GO!
            </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const baseUrl = useBaseUrl("docs/");
  const workloadsUrl = useBaseUrl("docs/workloads/workloads");
  const amidoEnsonoUrl = "https://www.amido.com/amido-and-ensono";
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
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.customFields.description}`}
      keywords={siteConfig.customFields.keywords}
    >
      <main>
        <section>
          <h1>TODO: ENSONO STACKS IMAGE</h1>
            {/* <AmidoStacksLogo /> TODO: replace with the new ensono Stacks */}
        </section>
        <section className={styles.introductionSection}>
          <div className={styles.intro}>
            <h3>Stacks is the <span className={styles.primaryColour}>cloud-native software factory</span> for digital transformations that work.</h3>
            <ul>
              <li>Increase project predictability with reliable, tried and tested code.</li>
              <li>Slash configuration time and speeds up deployment.</li>
              <li>An ever-growing calalogue of workload templates, package management and example implementations.</li>
              <li>A solid foundation for you to springboard into build.</li>
            </ul>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.learnAboutStacks
                )}
                to={baseUrl}
              >
                Tell me more
              </Link>
            </div>
          </div>
          <div>
            <span className={styles.primaryColour}><i style={{display: 'inline-block'}} className={styles.textCenter}>"Ensono Stacks made our transformation significantly easier and gave us confidence right from day one" - <strong>Ensono Client</strong></i></span>
            <div className={"container " + styles.heroBanner} id="stacks-selector">
              <h3>What can you do with Stacks?</h3>
              <p className="hero__subtitle">
                Choose a <a href={baseUrl}> workload</a> below and you can be up-and-running with a project in less than an hour:
              </p>
              <div className={styles.buttons}>
                <Picker />
              </div>
            </div>
          </div>
        </section>

        {/* TODO: ENSONO: This video still required? */}
        {/* <section className={styles.videoSection}>
          <div className="container">
            <ResponsivePlayerWithLinks url="https://vimeo.com/486755315"
                                       links={[
                                         { title:"Using the template CLI to scaffold", time: "0:00" },
                                         { title:"Creating the variables for the environment", time: "3:23" },
                                         { title:"Creating the deployment pipeline and deploying to the cluster", time: "8:02" }
                                       ]}
            />
          </div>
        </section> */}

        <div className={styles.mainHolder}>
          <div className={styles.main}>
            <section className={styles.supportedTechs}>
              <div className="container">
                <h3>Technologies supported by Stacks</h3>
                <div className={styles.tableContainer}>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><CSharpLogo className={clsx(styles.flexRow)} role="cell" onClick={() => triggerSearch("C#")} /></div></div>
                    <div><div><JavaLogo className={clsx(styles.flexRow)} role="cell" onClick={() => triggerSearch("Java")} /></div></div>
                    <div><div><NodeLogo className={clsx(styles.flexRow, styles.flexRow10Sm)} role="cell" onClick={() => triggerSearch("node")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><DotNetCoreLogo className={clsx(styles.flexRow, styles.flexRow10Sm)} role="cell" onClick={() => triggerSearch(".NET Core")} /></div></div>
                    <div><div><SpringBootLogo className={clsx(styles.flexRow, styles.springBoot)} role="cell" onClick={() => triggerSearch("Spring Boot")} /></div></div>
                    <div><div><ReactLogo className={clsx(styles.flexRow)} role="cell" onClick={() => triggerSearch("React")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><Auth0Logo className={clsx(styles.flexRow)} role="cell" onClick={() => triggerSearch("Auth0")} /></div></div>
                    <div><div><SwaggerLogo className={clsx(styles.flexRow, styles.swagger, styles.flexRow20Sm)} role="cell" onClick={() => triggerSearch("Swagger")} /></div></div>
                    <div><div><AzureBlobStorageLogo className={clsx(styles.flexRow, styles.azureBlob)} role="cell" onClick={() => triggerSearch("Azure Blob Storage")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><CosmosDbLogo className={clsx(styles.flexRow, styles.cosmosdb)} role="cell" onClick={() => triggerSearch("Cosmos DB")} /></div></div>
                    <div><div><CucumberLogo className={clsx(styles.flexRow, styles.cucumber)} role="cell" onClick={() => triggerSearch("Cucumber")}/></div></div>
                    <div><div><GoogleCloudStorageLogo className={clsx(styles.flexRow, styles.googleStorage)} role="cell" onClick={() => triggerSearch("Google Cloud Storage")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><TerraformLogo className={clsx(styles.flexRow, styles.terraform, styles.flexRow40Sm)} role="cell" onClick={() => triggerSearch("Terraform")} /></div></div>
                    <div><div><CypressLogo className={clsx(styles.flexRow, styles.cypress, styles.flexRow20Sm)} role="cell" onClick={() => triggerSearch("Cypress")}/></div></div>
                    <div><div><KarateLogo className={clsx(styles.flexRow, styles.karate)} role="cell" onClick={() => triggerSearch("Karate")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><XbehaveLogo className={clsx(styles.flexRow, styles.flexRow10Sm)} role="cell" onClick={() => triggerSearch("xBehave")} /></div></div>
                    <div><div><JunitLogo className={clsx(styles.flexRow, styles.flexRow40Sm)} role="cell" onClick={() => triggerSearch("JUnit")} /></div></div>
                    <div><div><TestcafeLogo className={clsx(styles.flexRow, styles.testCafe)} role="cell" onClick={() => triggerSearch("Testcafe")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><BddfyLogo className={clsx(styles.flexRow, styles.bddfy)} role="cell" onClick={() => triggerSearch("BDDfy")} /></div></div>
                    <div><div><RestAssuredLogo className={clsx(styles.flexRow, styles.flexRow40Sm)} role="cell" onClick={() => triggerSearch("REST-Assured")} /></div></div>
                    <div><div><JestLogo className={clsx(styles.flexRow, styles.jest)} role="cell" onClick={() => triggerSearch("Jest")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><AzurePipelinesLogo className={clsx(styles.flexRow, styles.azurePipelines)} role="cell" onClick={() => triggerSearch("Azure Pipelines")} /></div></div>
                    <div><div><SerenityLogo className={clsx(styles.flexRow, styles.flexRow40Sm)} role="cell" onClick={() => triggerSearch("Serenity")} /></div></div>
                    <div><div><GoogleLighthouseLogo className={clsx(styles.flexRow, styles.googleLighthouse)} role="cell" onClick={() => triggerSearch("Google Lighthouse")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><AzureKubernetesServiceLogo className={clsx(styles.flexRow, styles.azureKubernetes)} role="cell" onClick={() => triggerSearch("Azure Kubernetes Service")} /></div></div>
                    <div><div><ShouldlyLogo className={clsx(styles.flexRow, styles.flexRow30Sm)} role="cell" onClick={() => triggerSearch("Shouldly")} /></div></div>
                    <div><div><GitlabLogo className={clsx(styles.flexRow)} role="cell" onClick={() => triggerSearch("GitLab")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><DockerLogo className={clsx(styles.flexRow, styles.flexRow10Sm)} role="cell" onClick={() => triggerSearch("Docker")} /></div></div>
                    <div><div><AppliToolsLogo className={clsx(styles.flexRow, styles.applitools, styles.flexRow30Sm)} role="cell" onClick={() => triggerSearch("Applitools")} /></div></div>
                    <div><div><GoogleKubernetesEngineLogo className={clsx(styles.flexRow, styles.googleKubernetes)} role="cell" onClick={() => triggerSearch("Google Kubernetes Engine")} /></div></div>
                  </div>
                  <div className={clsx(styles.flexTable)} role="rowGroup">
                    <div><div><XunitLogo className={clsx(styles.flexRow, styles.xunit, styles.flexRow40Sm)} role="cell" onClick={() => triggerSearch("xUnit")}/></div></div>
                    <div><div><GatlingLogo className={clsx(styles.flexRow, styles.flexRow40Sm)} role="cell" onClick={() => triggerSearch("Gatling")} /></div></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className={styles.features}>
          {features.map((feature) => (
            <div className={clsx(styles.feature)}
            >
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <div className={styles.buttons} style={{ marginTop: 20 }}>
                  <Link className={clsx("button button--outline button--lg", styles.blackButton)}
                        to={baseUrl + feature.link}
                  >
                    {feature.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className={styles.mainHolder}>
          <div className={styles.main}>
            <section className={styles.features2}>
                <div className={clsx(styles.feature)}>
                  <h3> {contribute.title}</h3>
                  <p>{contribute.description}</p>

                  <div className={styles.buttons} style={{ marginTop: 40 }}>
                    <Link
                      className={clsx(
                        "button button button--primary button--lg",
                        styles.getStarted
                      )}
                      to={ contribute.link.startsWith("http") ? contribute.link  : baseUrl + contribute.link}
                    >
                      {contribute.title}
                    </Link>
                  </div>
                </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
