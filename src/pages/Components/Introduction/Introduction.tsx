import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "../../styles.module.css";
import customStyles from "./Introduction.module.css";
import text from "./Introduction.constants"

const Introduction = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyles.intro}>
            <h3>Stacks is the <span className={styles.primaryColour}>cloud-native software factory</span> for digital transformations that work.`</h3>
            <ul>
            {text.benefitsList.map((benefit) => (
                <li>{benefit}</li>
            ))}
            </ul>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
            <Link
                className={clsx(
                "button button--primary button--lg",
                customStyles.learnAboutStacks
                )}
                to={baseUrl}
            >
                Tell me more
            </Link>
            </div>
        </div>
    )
}


export default Introduction;
