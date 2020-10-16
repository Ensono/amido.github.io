import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Select from "react-select";

const cloudProviders = [
  { value: "Google", label: "Google" },
  { value: "Azure", label: "Azure" },
  { value: "AWS", label: "Azure" },
];

const languages = [
  { value: "Java", label: "Java" },
  { value: ".Net", label: ".Net" },
];

const option3 = [
  { value: "OptionA", label: "Option A" },
  { value: "OptionB", label: "Option B" },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [firstOption, setFirstOption] = useState(undefined);
  const [secondOption, setSecondOption] = useState(undefined);
  const [thirdOption, setThirdOption] = useState(undefined);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header
        style={{ height: "calc(100vh - 235px)", flex: 1 }}
        className={clsx("hero hero--primary", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">{"Pick your stack composition:"}</h1>
          <div className="col col--6">
            <h3>Provider</h3>
            <Select
              value={firstOption}
              onChange={(selected) => {
                setFirstOption(selected);
              }}
              options={cloudProviders}
            />
            {firstOption && (
              <>
                <h3>Language</h3>
                <Select
                  value={secondOption}
                  onChange={(selected) => {
                    setSecondOption(selected);
                  }}
                  options={languages}
                />
              </>
            )}

            {secondOption && (
              <>
                <h3>Features</h3>
                <Select
                  value={thirdOption}
                  onChange={(selected) => {
                    setThirdOption(selected);
                  }}
                  options={option3}
                />
              </>
            )}
          </div>

          {thirdOption && (
            <div className={styles.buttons} style={{ marginTop: 20 }}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("docs/")}
              >
                Lets Go!
              </Link>
            </div>
          )}
        </div>
      </header>
    </Layout>
  );
}

export default Home;
