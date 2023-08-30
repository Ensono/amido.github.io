import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

import Introduction from "./Components/Introduction/Introduction";
import WhatStacksCanDo from "./Components/WhatStacksCanDo/WhatStacksCanDo";
import TechSupportedByStacks from "./Components/TechSupportedByStacks/TechSupportedByStacks";
import Features from "./Components/Features/Features";


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
        <section>
          <h1>TODO: ENSONO STACKS IMAGE</h1>
            {/* <AmidoStacksLogo /> TODO: replace with the new ensono Stacks */}
        </section>
        <section className={styles.section}>
          <div className={styles.introductionSection}>
            <Introduction />
            <WhatStacksCanDo />
          </div>
        </section>

        <TechSupportedByStacks />

       <Features/>
      </main>
    </Layout>
  );
}

export default Home;
