import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Picker from "../Picker/Picker";
import styles from "../../styles.module.css";
import customStyle from "./WhatStacksCanDo.module.css";


const WhatStacksCanDo = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div>
            <span className={styles.primaryColour}><i style={{display: 'inline-block'}} className={styles.textCenter}>"Ensono Stacks made our transformation significantly easier and gave us confidence right from day one" - <strong>Ensono Client</strong></i></span>
            <div className={"container " + customStyle.heroBanner} id="stacks-selector">
                <h3>What can you do with Stacks?</h3>
                <p className="hero__subtitle">
                    Choose a <a href={baseUrl}> workload</a> below and you can be up-and-running with a project in less than an hour:
                </p>
                <div className={styles.buttons}>
                    <Picker />
                </div>
            </div>
        </div>
    )
}


export default WhatStacksCanDo;
