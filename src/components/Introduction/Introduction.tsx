import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "@site/src/pages/styles.module.css";
import customStyles from "./Introduction.module.css";

const text = {
    title: (
        <>Stacks is the <span className={styles.primaryColour}>cloud-native software factory</span> for digital transformations that work.</>
    ),
    benefitsList: [
        'Increase project predictability with reliable, tried and tested code.',
        'Slash configuration time and speeds up deployment.',
        'An ever-growing calalogue of workload templates, package management and example implementations.',
        'A solid foundation for you to springboard into build.'
    ],
    buttonText: 'Tell me more'
}

const {title, benefitsList, buttonText} = text

export const Introduction = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyles.intro}>
            <h3>{title}</h3>
            <ul>
                {benefitsList.map((benefit, key) => (
                    <li key={key}>{benefit}</li>
                ))}
            </ul>
            <div className={styles.buttons}>
                <Link className="button button--primary button--lg" to={baseUrl}>{buttonText}</Link>
            </div>
        </div>
    )
}
