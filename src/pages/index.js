import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

import EnsonoStacksImage from "./_Components/EnsonoStacksImage/EnsonoStacksImage";
import Introduction from "./_Components/Introduction/Introduction";
import WhatStacksCanDo from "./_Components/WhatStacksCanDo/WhatStacksCanDo";
import TechSupportedByStacks from "./_Components/TechSupportedByStacks/TechSupportedByStacks";
import Features from "./_Components/Features/Features";


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
        <div className={styles.section}>
          <div className={styles.introductionSection}>
            <Introduction />
            <WhatStacksCanDo />
          </div>
        </div>
        <TechSupportedByStacks />
       <Features/>
      </main>
    </Layout>
  );
}

export default Home;
