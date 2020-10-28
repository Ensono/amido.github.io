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
    title: "Infrastructure",
    link: "/infrastructure/azure/core_infrastructure",
    color: "#25CEB6",
    description: (
      <>
        Find out how to configure your cloud provider and other core
        infrastructure to make Stacks workloads work.
      </>
    ),
  },
  {
    title: "Test Framework",
    link: "/testing/cli_testing_frameworks",
    color: "#FE6D6A",
    description: (
      <>
        Stacks includes a range of front-end focused opinionated test frameworks
        that can be tailored to your project with just one command.
      </>
    ),
  },
];

const features2 = [
  {
    title: "Contribute to Stacks",
    link: "/docs/contributions",
    description: (
      <>How you can contribute to the Amido Stacks open source project</>
    ),
  },
  {
    title: "Business benefits",
    link: "",
    description: (
      <>Check out amido.com for more on the business benefits of Stacks</>
    ),
  },
  {
    title: "Careers at Amido",
    link: "",
    description: (
      <>
        Join the go-to partner for cloud native transformation. We offer a
        competitive salary, a great team culture, and commitment to your
        personal development
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
        "Node JS / React": "workloads/azure/frontend/cli_webapp_frameworks",
      },
      "Client Side Rendered Web Application": {
        "Node JS / React": "workloads/azure/frontend/cli_webapp_frameworks",
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
    GCP: "workloads/gcp/workloads_gcp_readme",
    AWS: "workloads/aws/workloads_aws_readme",
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

        <Select
          placeholder="Select Solution Architecture"
          value={secondOption}
          onChange={(selected) => {
            setSecondOption(selected);
          }}
          options={applications || []}
        />

        <Select
          placeholder="Select Language/Framework"
          value={thirdOption}
          onChange={(selected) => {
            setThirdOption(selected);
          }}
          options={languages || []}
        />

        <div className={styles.buttons} style={{ marginTop: 20 }}>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={
              baseUrl +
              (thirdOption
                ? thirdOption.value
                : firstOption
                ? firstOption.value
                : "")
            }
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

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className={styles.logocontainer}>
          <div>LOGO</div>
        </section>
        <section className={styles.definition}>
          <div className="container">
            <h3>
              Slash the time it takes to get <br />
              productive on your software project
            </h3>
            <p>
              Amido Stacks is a catalogue of workload templates that <br />
              instantly scaffold and deploy boilerplate projects. With Stacks’
              <br />
              tried-and-tested technology choices you reduce risk for your
              delivery.
            </p>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
              <Link
                className={clsx(
                  "button button button--primary button--lg",
                  styles.getStarted
                )}
                to={baseUrl}
              >
                LEARN MORE ABOUT STACKS
              </Link>
            </div>
          </div>
        </section>

        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">What can you do with Stacks?</h1>
            <p className="hero__subtitle">
              Choose a workload below and you can be up- <br />
              and-running with a project in less than an hour:
            </p>
            <div className={styles.buttons}>
              <Picker />
            </div>
          </div>
        </header>

        <section className={styles.definition}>
          <div className="container">
            <h3>Technologies supported by Stacks</h3>
            <div className={styles.techs}>
              <img src="https://logodix.com/logo/42746.png" />
              <img src="https://logodix.com/logo/929905.png" />
              <img src="https://logodix.com/logo/5867.png" />
            </div>

            <div className={styles.techs2}>
              <img src="https://logodix.com/logo/773611.jpg" />
              <img src="https://logodix.com/logo/282992.png" />
              <img
                src="https://logodix.com/logo/636467.png"
                alt="azure devops"
              />
              <img src="https://logodix.com/logo/258401.png" alt="git lab" />
              <img src="https://logodix.com/logo/826596.png" alt="docker" />
            </div>
          </div>
        </section>

        <section className={styles.features}>
          {features.map((feature) => (
            <div
              style={{ backgroundColor: feature.color }}
              className={clsx(styles.feature)}
            >
              <h3> {feature.title}</h3>
              <p>{feature.description}</p>

              <div className={styles.buttons} style={{ marginTop: 20 }}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={baseUrl + feature.link}
                >
                  {feature.title}
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.features2}>
          {features2.map((feature) => (
            <div className={clsx(styles.feature)}>
              <h3> {feature.title}</h3>
              <p>{feature.description}</p>

              <div className={styles.buttons} style={{ marginTop: 20 }}>
                <Link
                  className={clsx(
                    "button button button--primary button--lg",
                    styles.getStarted
                  )}
                  to={baseUrl + feature.link}
                >
                  {feature.title}
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default Home;
