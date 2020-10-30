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
    link: "docs/contributions",
    description: (
      <>
        As an open source project, you can be a part of the Github community
        shaping Amido Stacks
      </>
    ),
  },
  {
    title: "Why  Amido",
    link: "",
    description: (
      <>
        Want to know how Amido is preventing digital transformation failures
        with Stacks?
      </>
    ),
  },
  {
    title: "Careers at Amido",
    link: "",
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

        <div className={styles.buttons} style={{ marginTop: 40 }}>
          <Link
            className={clsx(
              "button button--outline  button--lg",
              styles.blackButton
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className={styles.logocontainer}>
          <div>
            <Icon />
          </div>
        </section>
        <section className={styles.definition}>
          <div className="container">
            <h3>Get started with Amido Stacks</h3>

            <p>
              Amido Stacks is a catalogue of workload templates that
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
                LEARN ABOUT STACKS
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.heroBanner}>
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
        </section>

        <div className={styles.mainHolder}>
          <div className={styles.main}>
            <section className={styles.supportedTechs}>
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
                  <img
                    src="https://logodix.com/logo/258401.png"
                    alt="git lab"
                  />
                  <img src="https://logodix.com/logo/826596.png" alt="docker" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className={styles.features}>
          {features.map((feature) => (
            <div
              className={clsx(styles.feature)}
              style={{
                justifyContent: feature.justification,
                backgroundColor: feature.color,
              }}
            >
              <div
                style={{
                  maxWidth: "480px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3> {feature.title}</h3>
                <p>{feature.description}</p>

                <div className={styles.buttons} style={{ marginTop: 20 }}>
                  <Link
                    className={clsx(
                      "button  button--outline button--lg",
                      styles.blackButton
                    )}
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
                      to={baseUrl + feature.link}
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

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="382"
      height="241"
      fill="none"
      viewBox="0 0 382 241"
    >
      <path fill="url(#pattern0)" d="M0 0H382V241H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00085 0 0 .00134 0 -.002)"
            xlinkHref="#image0"
          ></use>
        </pattern>
        <image
          id="image0"
          width="1181"
          height="748"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABJ0AAALsCAYAAABJHsYZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4NjNGOUVBRkZGNjExRUE4N0Q5QzQ5Nzk1N0JDRUU4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4NjNGOUU5RkZGNjExRUE4N0Q5QzQ5Nzk1N0JDRUU4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIDI0LjMgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YzgxOTQxMS01NmMxLTQwNmEtYjZlZC0yYmNjY2RhMDY5YjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6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"
        ></image>
      </defs>
    </svg>
  );
}
