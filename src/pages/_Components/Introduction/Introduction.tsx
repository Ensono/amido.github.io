import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "../../styles.module.css";
import customStyles from "./Introduction.module.css";

const text = {
    benefitsList: [
        'Increase project predictability with reliable, tried and tested code.',
        'Slash configuration time and speeds up deployment.',
        'An ever-growing calalogue of workload templates, package management and example implementations.',
        'A solid foundation for you to springboard into build.'
    ],
}

const Introduction = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyles.intro}>
            <h3>Stacks is the <span className={styles.primaryColour}>cloud-native software factory</span> for digital transformations that work.</h3>
            <ul>
            {text.benefitsList.map((benefit, key) => (
                <li key={key}>{benefit}</li>
            ))}
            </ul>
            <div className={styles.buttons} style={{ marginTop: 20 }}>
            <Link
                className="button button--primary button--lg"
                to={baseUrl}
            >
                Tell me more
            </Link>
            </div>
        </div>
    )
}


export default Introduction;
