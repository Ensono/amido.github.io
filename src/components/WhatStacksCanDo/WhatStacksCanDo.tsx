import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import {Picker} from "../";
import styles from "@site/src/pages/styles.module.css";
import customStyle from "./WhatStacksCanDo.module.css";

const text = {
    clientFeedbackMessage: (
        <>
            "Ensono Stacks made our transformation significantly easier and gave us confidence right from day one" - <strong>Ensono Client</strong>
        </>
    ),
    title: 'What can you do with Stacks?',
    description: (baseUrl: string) => (
        <>Choose a <a href={baseUrl}> workload</a> below and you can be up-and-running with a project in less than an hour:</>
    )
}

const {clientFeedbackMessage, title, description} = text

export const WhatStacksCanDo = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div>
            <span className={styles.primaryColour}>
                <i className={`${styles.textCenter} ${styles.displayInlineBlock}`}>
                    {clientFeedbackMessage}
                </i>
            </span>
            <div className={"container " + customStyle.heroBanner} id="stacks-selector">
                <h3>{title}</h3>
                <p className="hero__subtitle">
                    {description(baseUrl)}
                </p>
                <div className={styles.buttons}>
                    <Picker />
                </div>
            </div>
        </div>
    )
}
