import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Select from "react-select";

const features = [
  {
    title: "Accelerates architecture setup",
    description: (
      <>
        Stacks helps you to build a solid foundation, meaning that you can focus
        on solving the project challenges more quickly. You no longer have to
        re-invent the wheel for every new project!
      </>
    ),
  },
  {
    title: "De-risks delivery of digital transformation",
    description: (
      <>
        Through our extensive experience, we have made educated and opinionated
        decisions on tools, frameworks and platforms. Being open source we also
        encourage reviews and developer input on these decisions.
      </>
    ),
  },
  {
    title: "Solutions to build, test and deploy",
    description: (
      <>
        Behind our boilerplate projects, we use Terraform, Kubernetes, and
        pipeline as code with other amazing tools to deploy your tested
        application. Advanced configuration for multiple cloud providers and
        offer no lock-in.
      </>
    ),
  },
];

function TryOutText({ title, content, command, imageUrl }) {
  return (
    <div className={clsx("col col--6", styles.tryOut)}>
      <h3>{title}</h3>
      <p>{content}</p>
      <pre>{command}</pre>
    </div>
  );
}

function TryOutImage({ imageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.tryOut)}>
      <img src={imgUrl} />
    </div>
  );
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Picker() {
  const [firstOption, setFirstOption] = useState(undefined);
  const [secondOption, setSecondOption] = useState(undefined);
  const [thirdOption, setThirdOption] = useState(undefined);

  const baseUrl = useBaseUrl("docs/");
  const OptionMapper = {
    Azure: {
      "Server Side Rendered Web Application": {
        "Node JS / React": "workloads/azure/frontend/cli_webapp_frameworks"
      },
      "Client Side Rendered Web Application": {
        "Node JS / React": "workloads/azure/frontend/cli_webapp_frameworks"
      },
      "REST Web API": {
        "Java Spring Boot": "workloads/azure/backend/java/intro_java"
      },
      "REST Web API with CQRS":
      {
        "Java Spring Boot": "workloads/azure/backend/java_cqrs/intro_java_cqrs",
        "C# / .NET Core": "workloads/azure/backend/netcore/introduction_netcore"
      }
    },
    GCP: "workloads/gcp/workloads_gcp_readme",
    AWS: "workloads/aws/workloads_aws_readme"
  };

  const cloudProviders = Object.keys(OptionMapper).map((key) => ({
    value: OptionMapper[key],
    label: key,
  }));


  const applications = firstOption
    ? Object.keys(firstOption.value).map((option) => {
        return { value: firstOption.value[option], label: option };
      })
    : [];

  const languages = secondOption
    ? Object.keys(secondOption.value).map((key) => {
        return { value: secondOption.value[key], label: key };
      })
    : [];

  return (
    <div className="container">
      <div
        className="col col--6"
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Select
          placeholder="Select Cloud Provider"
          value={firstOption}
          onChange={(selected) => {
            setFirstOption(selected);
          }}
          options={cloudProviders}
        />
        {firstOption && typeof firstOption.value === 'object' && (
          <>
            <Select
              placeholder="Select Solution Architecture"
              value={secondOption}
              onChange={(selected) => {
                setSecondOption(selected);
              }}
              options={applications}
            />
          </>
        )}

        {secondOption && typeof secondOption.value === 'object' && (
          <>
            <Select
              placeholder="Select Language/Framework"
              value={thirdOption}
              onChange={(selected) => {
                setThirdOption(selected);
              }}
              options={languages}
            />
          </>
        )}

        {((firstOption && typeof firstOption.value === 'string') || thirdOption ) && (
          <div className={styles.buttons} style={{ marginTop: 20 }}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={baseUrl + (thirdOption ? thirdOption.value : firstOption.value)}
            >
              Lets Go!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Picker />
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.tryOut}>
          <div className="container">
            <div className="row">
              <TryOutText
                title="Get started in as little as 5 commands"
                content="Amido Stacks let you focus on the problem, not the tools or setup. To start creating your project run this command to interactively guide:"
                command="npx @amidostacks/scaffolding-cli run -i"
              />
              <TryOutImage imageUrl="https://amidostacksassets.blob.core.windows.net/docs/assets/npx_amidostacks_scaffolding_cli_run_i.gif" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
