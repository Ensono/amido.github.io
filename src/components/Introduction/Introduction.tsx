import React from "react";
import Link from "@docusaurus/Link";

import styles from "@site/src/pages/styles.module.css";
import customStyles from "./Introduction.module.css";

import {WhatStacksCanDo} from "../";

const text = {
    title: (
        <>Ensono Stacks is the <span className={styles.primaryColour}>cloud-native software factory</span> for digital transformations that work.</>
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
    const ensonoStacksOfferingLink = "https://www.ensono.com/offerings/ensono-stacks-revolutionizing-business-approaches-for-future-growth/";

    return (
        <div className={styles.section}>
            <div className={customStyles.introductionSection}>
                <div className={customStyles.intro}>
                <h2 className="margin-bottom--lg">{title}</h2>
                    <ul>
                        {benefitsList.map((benefit, key) => (
                            <li key={key}>{benefit}</li>
                        ))}
                    </ul>
                    <div className={styles.buttons}>
                        <Link className="button button--primary button--lg" to={ensonoStacksOfferingLink}>{buttonText}</Link>
                    </div>
                </div>

                <WhatStacksCanDo />
            </div>
        </div>
    )
}
