import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import customStyle from "./Features.module.css";
import styles from "../../styles.module.css";
const text = {
    features: [
        {
          title: "Infrastructure",
          link: "infrastructure/azure/core_infrastructure",
          description: "Find out how to configure your cloud provider and other core infrastructure to make Stacks work for you."
        },
        {
          title: "Test Framework",
          link: "testing/cli_testing_frameworks",
          description: "With just one command, discover how to tailor your project with Stacks’ front-end focused opinionated test frameworks."
        },
    ],
    contribute: {
      title: "Contribute to Stacks",
      link: "contributions",
      description: "As an open source project, you can be a part of the Github community shaping Amido Stacks"
    }
  }
const { features, contribute } = text;

const Features = () => {
    const baseUrl = useBaseUrl("docs/");

    
    return (
        <div>
            <section className={styles.section}>
                <div className={customStyle.features}>
                    {features.map((feature, key) => (
                        <div key={key} className={clsx(customStyle.feature)}>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>

                            <div className={styles.buttons}>
                                <Link className={clsx("button button--primary button--lg")}
                                    to={baseUrl + feature.link}
                                >
                                {feature.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className={customStyle.mainHolder}>
                <section className={styles.section}>
                    <div className={customStyle.features2}>
                        <div>
                            <h3>{contribute.title}</h3>
                            <p>{contribute.description}</p>
                        </div>
                        <div>
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
    )
}
   


export default Features;
