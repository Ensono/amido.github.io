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
import AzureFunctionsLogo from "./Logos/AzureFunctionsLogo";
import GitlabLogo from "./Logos/GitLabLogo";
import DockerLogo from "./Logos/DockerLogo";
import AzureBlobStorageLogo from "./Logos/AzureBlobStorageLogo";
import GoogleKubernetesEngineLogo from "./Logos/GoogleKubernetesEngineLogo";
import CosmosDbLogo from "./Logos/CosmosDbLogo";
import GoogleCloudStorageLogo from "./Logos/GoogleCloudStorageLogo";
import BddfyLogo from "./Logos/BDDfyLogo";

const features = [
  {
    title: "Infrastructure",
    link: "infrastructure/azure/core_infrastructure",
    color: "#25CEB6",
    justification: "center",
    description: (
      <>
        Find out how to configure your cloud provider and other core
        infrastructure to make Stacks work for you.
      </>
    ),
  },
  {
    title: "Test Framework",
    link: "testing/cli_testing_frameworks",
    color: "#FE6D6A",
    justification: "center",
    description: (
      <>
        With just one command, discover how to tailor your project with Stacks’
        front-end focused opinionated test frameworks.
      </>
    ),
  },
];

const features2 = [
  {
    title: "Contribute to Stacks",
    link: "contributions",
    description: (
      <>
        As an open source project, you can be a part of the Github community
        shaping Amido Stacks
      </>
    ),
  },
  {
    title: "Why  Amido",
    link: "https://amido.com/about-us/",
    description: (
      <>
        Want to know how Amido is preventing digital transformation failures
        with Stacks?
      </>
    ),
  },
  {
    title: "Careers at Amido",
    link: "https://amido.com/careers/",
    description: (
      <>
        As the go-to partner for cloud-native transformation, we’re always
        looking for fresh new talent
      </>
    ),
  },
];

function Picker() {
  const [firstOption, setFirstOption] = useState(undefined);
  const [secondOption, setSecondOption] = useState(undefined);
  const [thirdOption, setThirdOption] = useState(undefined);

  const baseUrl = useBaseUrl("docs/");
  const OptionMapper = {
    "Azure Cloud Services [Azure]": {
      "Server Side Rendered Web Application": {
        "Node JS / React": "workloads/azure/frontend/cli_webapp_frameworks_ssr",
      },
      "Client Side Rendered Web Application": {
        "Node JS / React": "workloads/azure/frontend/cli_webapp_frameworks_csr",
      },
      "REST Web API": {
        "Java Spring Boot": "workloads/azure/backend/java/intro_java",
      },
      "REST Web API with CQRS": {
        "Java Spring Boot": "workloads/azure/backend/java_cqrs/intro_java_cqrs",
        "C# / .NET Core":
          "workloads/azure/backend/netcore/introduction_netcore",
      },
    },
    "Google Cloud Platform [GCP]": "workloads/gcp/workloads_gcp_readme",
    "Amazon Web Services [AWS]": "workloads/aws/workloads_aws_readme",
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
      <div className={["col", "col--6", styles.containerSelects].join(" ")}>
        <Select placeholder="Select Cloud Provider"
                value={firstOption}
                onChange={(selected) => { 
                  setFirstOption(selected); 
                  setSecondOption(null);
                }}
                options={cloudProviders}
        />

        {applications.length > 0 && (
          <Select placeholder="Select Solution Architecture"
                  value={secondOption}
                  onChange={(selected) => { 
                    setSecondOption(selected); 
                    setThirdOption(null);
                  }}
                  options={applications || []}
          />
        )}

        {languages.length > 0 && (
          <Select placeholder="Select Language/Framework"
                  value={thirdOption}
                  onChange={(selected) => { 
                    setThirdOption(selected); 
                  }}
                  options={languages || []}
          />
        )}

        <div className={styles.buttons} style={{ marginTop: 40 }}>
          <Link className={clsx("button button--outline  button--lg", styles.blackButton )}
                to={ baseUrl + (thirdOption ? thirdOption.value : firstOption ? firstOption.value : "") }
          >
            GET STARTED WITH STACKS
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
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className={styles.logocontainer}>
          <div>
            <AmidoStacksLogo />
          </div>
        </section>
        <section className={styles.definition}>
          <div className="container">
            <h3>Get started with Amido Stacks</h3>

            <p>
              Amido Stacks is a catalogue of{" "}
              <a href={baseUrl}> workload</a> templates that
              <br />
              instantly scaffold and deploy boilerplate software projects. Slash
              the time it takes to get productive on your software project
            </p>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.learnAboutStacks
                )}
                to={baseUrl}
              >
                LEARN ABOUT AMIDO STACKS
              </Link>
            </div>
          </div>
        </section>

        <section id="stacks-selector" className={styles.heroBanner}>
          <div className="container">
            <h1  className="hero__title">What can you do with Stacks?</h1>
            <p className="hero__subtitle">
              Choose a{" "}
              <a
                href={baseUrl}
                style={{ color: "black", textDecoration: "underline" }}
              >
                {" "}
                workload</a>{" "} below and you can be up- <br />
              and-running with a project in less than an hour:
            </p>
            <div className={styles.buttons}>
              <Picker />
            </div>
          </div>
        </section>

        <div className={styles.mainHolder}>
          <div className={styles.main}>
            <section className={styles.supportedTechs}>
              <div className="container">
                <h3>Technologies supported by Stacks</h3>
                <div className={styles.techs2}>
                  <CSharpLogo className={styles.logo} onClick={() => triggerSearch("C#")} />
                  <span>
                    <JavaLogo className={styles.logo} onClick={() => triggerSearch("Java")} />
                  </span>
                  <NodeLogo className={styles.logo} onClick={() => triggerSearch("node")} />
                </div>
                <div className={styles.techs2}>
                  <DotNetCoreLogo className={styles.logo} onClick={() => triggerSearch(".NET Core")} />
                  <span>
                    <SpringBootLogo className={[styles.logo, styles.springBoot].join(" ")} onClick={() => triggerSearch("Spring Boot")} />
                  </span>
                  <ReactLogo className={styles.logo} onClick={() => triggerSearch("React")} />
                </div>
                <div className={styles.techs2}>
                  <Auth0Logo className={styles.logo} onClick={() => triggerSearch("Auth0")} />
                  <span>
                    <SwaggerLogo className={[styles.logo, styles.swagger].join(" ")} onClick={() => triggerSearch("Swagger")} />
                  </span>
                  <AzureBlobStorageLogo className={[styles.logo, styles.azureBlob].join(" ")} onClick={() => triggerSearch("Azure Blob Storage")} />
                </div>
                <div className={styles.techs2}>
                  <CosmosDbLogo className={[styles.logo, styles.cosmosdb].join(" ")} onClick={() => triggerSearch("Cosmos DB")} />
                  <span>
                    <CucumberLogo className={[styles.logo, styles.cucumber].join(" ")} onClick={() => triggerSearch("Cucumber")}/>
                  </span>
                  <GoogleCloudStorageLogo className={[styles.logo, styles.googleStorage].join(" ")} onClick={() => triggerSearch("Google Cloud Storage")} />
                </div>
                <div className={styles.techs2}>
                  <AzureFunctionsLogo className={[styles.logo, styles.azureFunctions].join(" ")} onClick={() => triggerSearch("Azure Functions")} />
                  <span>
                    <CypressLogo className={[styles.logo, styles.cypress, styles.tooLarge].join(" ")} onClick={() => triggerSearch("Cypress")}/>
                  </span>
                  <KarateLogo className={[styles.logo, styles.karate].join(" ")} onClick={() => triggerSearch("Karate")} />
                </div>
                <div className={styles.techs2}>
                  <XbehaveLogo className={styles.logo} onClick={() => triggerSearch("xBehave")} />
                  <span>
                    <JunitLogo className={[styles.logo, styles.tooLarge].join(" ")} onClick={() => triggerSearch("JUnit")} />
                  </span>
                  <TestcafeLogo className={[styles.logo, styles.testCafe].join(" ")} onClick={() => triggerSearch("Testcafe")} />
                </div>
                <div className={styles.techs2}>
                  <BddfyLogo className={[styles.logo, styles.bddfy].join(" ")} onClick={() => triggerSearch("BDDfy")} />
                  <span>
                    <RestAssuredLogo className={[styles.logo, styles.tooLarge].join(" ")} onClick={() => triggerSearch("REST-Assured")} />
                  </span>
                  <JestLogo className={[styles.logo, styles.jest].join(" ")} onClick={() => triggerSearch("Jest")} />
                </div>
                <div className={styles.techs2}>
                  <AzurePipelinesLogo className={[styles.logo, styles.azurePipelines].join(" ")} onClick={() => triggerSearch("Azure Pipelines")} />
                  <span>
                    <SerenityLogo className={[styles.logo, styles.tooLarge].join(" ")} onClick={() => triggerSearch("Serenity")} />
                  </span>
                  <GoogleLighthouseLogo className={[styles.logo, styles.googleLighthouse].join(" ")} onClick={() => triggerSearch("Google Lighthouse")} />
                </div>
                <div className={styles.techs2}>
                  <AzureKubernetesServiceLogo className={[styles.logo, styles.azureKubernetes].join(" ")} onClick={() => triggerSearch("Azure Kubernetes Service")} />
                  <span>
                    <ShouldlyLogo className={[styles.logo, styles.tooLarge].join(" ")} onClick={() => triggerSearch("Shouldly")} />
                  </span>
                  <GitlabLogo className={styles.logo} onClick={() => triggerSearch("GitLab")} />
                </div>
                <div className={styles.techs2}>
                  <DockerLogo className={styles.logo} onClick={() => triggerSearch("Docker")} />
                  <span>
                    <AppliToolsLogo className={styles.logo, styles.applitools } onClick={() => triggerSearch("Applitools")} />
                  </span>
                  <GoogleKubernetesEngineLogo className={[styles.logo, styles.googleKubernetes].join(" ")} onClick={() => triggerSearch("Google Kubernetes Engine")} />
                </div>
                <div className={styles.techs2}>
                  <XunitLogo className={[styles.logo, styles.xunit, styles.tooLarge].join(" ")} onClick={() => triggerSearch("xUnit")}/>
                  <GatlingLogo className={[styles.logo, styles.tooLarge].join(" ")} onClick={() => triggerSearch("Gatling")} />
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className={styles.features}>
          {features.map((feature) => (
            <div className={clsx(styles.feature)}
                 style={{
                   justifyContent: feature.justification,
                   backgroundColor: feature.color,
                 }}
            >
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <div className={styles.buttons} style={{ marginTop: 20 }}>
                  <Link className={clsx("button  button--outline button--lg", styles.blackButton)}
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
              {features2.map((feature) => (
                <div className={clsx(styles.feature)}>
                  <h3> {feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className={styles.buttons} style={{ marginTop: 40 }}>
                    <Link
                      style={{ color: "black" }}
                      className={clsx(
                        "button button button--primary button--lg",
                        styles.getStarted
                      )}
                      to={ feature.link.startsWith("http") ? feature.link  : baseUrl + feature.link}
                    >
                      {feature.title}
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;

function AmidoStacksLogo() {
  return (
    <svg
      width="378"
      height="240"
      viewBox="0 0 378 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M236.22 81.8319L188.976 0.00260925L141.732 81.8319L94.488 163.661H125.984L157.48 109.108L188.976 54.5559L220.472 109.108L251.968 163.661H283.464L236.22 81.8319Z"
          fill="#231F20"
        />
        <path
          d="M188.976 109.108L204.724 136.384L220.472 163.661H157.48L173.228 136.384L188.976 109.108Z"
          fill="#231F20"
        />
        <path
          d="M187.248 231.957L192.772 226.744C194.751 229.3 199.025 231.644 202.412 231.644C205.384 231.644 207.989 230.603 207.989 228.412C207.989 226.744 206.164 225.859 203.609 225.077L196.264 222.787C191.833 221.327 188.239 217.992 188.239 212.832C188.239 205.745 195.429 201.576 202.101 201.576C207.363 201.576 212.419 203.139 215.701 207.36L209.656 212.363C207.884 210.228 204.913 209.08 202.204 209.08C200.433 209.08 197.201 209.913 197.201 212.415C197.201 214.292 199.129 214.968 200.901 215.541L208.717 217.939C214.033 219.659 217.055 222.995 217.055 227.371C217.055 233.78 210.907 239.2 202.101 239.2C196.419 239.2 190.375 236.751 187.248 231.957Z"
          fill="#231F20"
        />
        <path
          d="M277.055 220.361C277.055 209.93 285.516 201.576 295.893 201.576C302.796 201.576 308.868 205.26 312.137 210.916L304.56 215.327C302.849 212.111 299.579 209.981 295.893 209.981C290.445 209.981 285.983 214.653 285.983 220.361C285.983 226.123 290.445 230.741 295.893 230.741C299.528 230.741 302.744 228.665 304.457 225.552L312.035 229.963C308.765 235.516 302.744 239.2 295.893 239.2C285.516 239.2 277.055 230.741 277.055 220.361Z"
          fill="#231F20"
        />
        <path
          d="M348.145 231.957L353.668 226.744C355.649 229.3 359.921 231.644 363.309 231.644C366.279 231.644 368.885 230.603 368.885 228.412C368.885 226.744 367.061 225.859 364.507 225.077L357.16 222.787C352.731 221.327 349.135 217.992 349.135 212.832C349.135 205.745 356.328 201.576 362.996 201.576C368.26 201.576 373.315 203.139 376.597 207.36L370.552 212.363C368.78 210.228 365.811 209.08 363.101 209.08C361.329 209.08 358.099 209.913 358.099 212.415C358.099 214.292 360.027 214.968 361.797 215.541L369.615 217.939C374.931 219.659 377.952 222.995 377.952 227.371C377.952 233.78 371.803 239.2 362.996 239.2C357.316 239.2 351.272 236.751 348.145 231.957Z"
          fill="#231F20"
        />
        <path
          d="M228.521 211.028H219.272V203.237H246.016V211.028H236.767V238.628H228.521V211.028Z"
          fill="#231F20"
        />
        <path
          d="M316.691 203.288H324.873V217.796L337.171 203.237H346.509L333.809 218.448L347.915 238.577H338.125L328.537 224.873L324.873 229.139V238.628H316.691V203.288Z"
          fill="#231F20"
        />
        <path
          d="M260.335 216.288L264.943 227.385H255.651L260.335 216.288ZM260.436 202.148L242.405 238.628H250.903L253.187 233.483H267.544L269.787 238.628H278.645L260.991 202.148H260.436Z"
          fill="#231F20"
        />
        <path
          d="M17.9375 215.98L22.5469 227.081H13.2505L17.9375 215.98ZM18.0364 201.836L0 238.328H8.50104L10.7859 233.182H25.1469L27.3912 238.328H36.2531L18.5917 201.836H18.0364Z"
          fill="#231F20"
        />
        <path
          d="M46.7536 201.468H47.3526L60.7057 224.522L73.3078 201.468H73.9557L81.3562 238.02H73.3078L70.3052 221.869L60.8046 239.318H60.2557L50.053 221.618L46.9526 238.02H39.4036L46.7536 201.468Z"
          fill="#231F20"
        />
        <path
          d="M84.9126 202.256H93.3646V237.659H84.9126V202.256Z"
          fill="#231F20"
        />
        <path
          d="M105.758 209.868H107.609C115.209 209.868 119.428 213.869 119.428 220.018C119.428 226.167 115.209 230.13 107.609 230.13H105.758V209.868ZM97.4146 202.32V237.72H106.814C111.563 237.72 115.458 237.226 119.207 235.075C124.959 231.775 127.97 226.568 127.97 220.018C127.97 209.415 120.464 202.32 106.814 202.32H97.4146Z"
          fill="#231F20"
        />
        <path
          d="M150.119 209.442C156.1 209.442 160.945 214.288 160.945 220.27C160.945 226.253 156.1 231.095 150.119 231.095C144.137 231.095 139.293 226.253 139.293 220.27C139.293 214.288 144.137 209.442 150.119 209.442ZM150.119 201.458C139.727 201.458 131.307 209.88 131.307 220.27C131.307 230.661 139.727 239.082 150.119 239.082C160.511 239.082 168.928 230.661 168.928 220.27C168.928 209.88 160.511 201.458 150.119 201.458Z"
          fill="#231F20"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="377.947" height="239.32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

