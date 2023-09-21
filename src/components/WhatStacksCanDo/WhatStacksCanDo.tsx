import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import {Picker} from "../";
import styles from "@site/src/pages/styles.module.css";
import customStyle from "./WhatStacksCanDo.module.css";

const text = {
    title: 'What can you do with Ensono Stacks?',
    description: (baseUrl: string) => (
        <>Choose a <a href={baseUrl}> workload</a> below and you can be up-and-running with a project in less than an hour:</>
    )
}

const {title, description} = text

export const WhatStacksCanDo = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyle.heroBanner} id="stacks-selector">
            <h3>{title}</h3>
            <p>{description(baseUrl)}</p>
            <div className={styles.buttons}>
                <Picker />
            </div>
        </div>
    )
}
