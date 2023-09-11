import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import {
  EnsonoStacksImage, 
  Introduction, 
  TechSupportedByStacks, 
  Features, 
  ContributeToStacks 
} from "@site/src/components";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.customFields.description}`}
      keywords={siteConfig.customFields.keywords}
    >
      <main>
        <EnsonoStacksImage/>
        <Introduction />
        <TechSupportedByStacks />
        <Features/>
        <ContributeToStacks/>
      </main>
    </Layout>
  );
}

export default Home;
