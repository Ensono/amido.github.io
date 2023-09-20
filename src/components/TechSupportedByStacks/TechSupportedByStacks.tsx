import React from "react";

import customStyle from "./TechSupportedByStacks.module.css";
import styles from "@site/src/pages/styles.module.css";

const text = {
    title: 'Technologies supported by Ensono Stacks',
    technologiesSupported: [
        { logo: 'aws.svg', name: 'AWS' }, { logo: 'google-cloud.svg', name: 'Google Cloud' }, { logo: 'microsoft-azure.svg', name: 'Microsoft Azure' },
        { logo: 'kubernetes.svg', name: 'Kubernetes' }, { logo: 'terraform.svg', name: 'Terraform' }, { logo: 'docker.svg', name: 'Docker' }, { logo: 'auth0.svg', name: 'Auth0' }, { logo: 'nx.svg', name: 'NX' },
        { logo: 'nextjs.svg', name: 'NextJS' }, { logo: 'pact.svg', name: 'Pact' }, { logo: 'azure-data-factory.svg', name: 'Azure Data Factory' }, { logo: 'delta-lake.svg', name: 'Delta lake' }, { logo: 'databricks.svg', name: 'Databricks' }, 
        { logo: 'nodejs.svg', name: 'NodeJS' }, { logo: 'java.svg', name: 'Java' }, { logo: 'csharp.svg', name: 'C#' }, { logo: 'typescript.svg', name: 'Typescript' }, { logo: 'python.svg', name: 'Python' },
    ]
}

const {title, technologiesSupported} = text

export const TechSupportedByStacks = () => {
    const triggerSearch = (term) => {
        document.querySelector(".DocSearch-Button").click();
        setTimeout(() => {
          let input = document.querySelector(".DocSearch-Input");
          let lastValue = input.value;
          input.value = term;
          let event = new Event("input", { bubbles: true });
          // hack React15
          event.simulated = true;
          // hack React16 内部定义了descriptor拦截value，此处重置状态
          let tracker = input._valueTracker;
          if (tracker) {
            tracker.setValue(lastValue);
          }
          input.dispatchEvent(event);
        }, 100);
      };

    return (
        <div className={customStyle.techListContainer}>
            <section className={`${styles.section} ${customStyle.section}`}>
                <h2 className={`${styles.textCenter} margin-bottom--lg`}>{title}</h2>
                <div className={customStyle.techListWrapper}>
                    {technologiesSupported.map((tech) => {
                        const {name, logo} = tech
                        const imagePath = `/img/icons/technologies-supported/${logo}`
                        return (<a key={name} onClick={() => triggerSearch(name)}><img src={imagePath} alt={name}/></a>)
                    })}
                </div>
            </section>
    </div>
    )
}
