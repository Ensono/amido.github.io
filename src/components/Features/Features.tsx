import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import customStyle from "./Features.module.css";
import styles from "@site/src/pages/styles.module.css";
const text = {
    features: [
        {
          title: "Infrastructure",
          link: "infrastructure/azure/core_infrastructure",
          description: "Find out how to configure your cloud provider and other core infrastructure to make Ensono Stacks work for you.",
          img: '/img/icons/ensono-icon_host-v_0222.png',
          buttonText: 'Show me'
        },
        {
          title: "Testing",
          link: "testing/testing_overview",
          description: "Get Started with Testing - Explore Ensono Stacks' pre-configured frameworks for performance, accessibility, UI, API, and more.",
          img: '/img/icons/ensono-icon_symbol-checkmark-v_0222.png',
          buttonText: 'Show me'
        },
    ]
  }
const { features } = text;

export const Features = () => {
    const baseUrl = useBaseUrl("docs/");
    
    return (
        <section className={styles.section}>
            <div className={customStyle.features}>
                {features.map((feature, key) => (
                    <div className={clsx(customStyle.feature)} key={key}>
                        <div className={customStyle.testing}>
                            <div className={customStyle.imageWrapper}>
                                <img src={feature.img} />
                            </div>
                            <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                        <div className={`${styles.buttons} ${customStyle.button}`}>
                            <Link className={clsx("button button--primary button--lg")}
                                to={`${baseUrl}${feature.link}`}
                            >
                            {feature.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

