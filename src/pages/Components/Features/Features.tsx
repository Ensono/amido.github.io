import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import customStyle from "./Features.module.css";
import styles from "../../styles.module.css";
import text from "./Features.constants"

const Features = () => {
    const baseUrl = useBaseUrl("docs/");

    const { features, contribute } = text;

    return (
        <div>
            <section className={styles.section}>
            <div className={customStyle.features}>
                {features.map((feature) => (
                <div className={clsx(customStyle.feature)}
                >
                    <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>

                    <div className={styles.buttons} style={{ marginTop: 20 }}>
                        <Link className={clsx("button button--primary button--lg")}
                            to={baseUrl + feature.link}
                        >
                        {feature.title}
                        </Link>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>

            <div className={customStyle.mainHolder}>
            <section className={styles.section}>
                
                <div className={customStyle.features2}>
                    <h3>{contribute.title}</h3>
                    <p>{contribute.description}</p>
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
                
            </section>
            </div>
        </div>
    )
}
   


export default Features;
