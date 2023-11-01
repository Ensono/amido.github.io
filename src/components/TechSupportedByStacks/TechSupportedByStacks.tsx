import React from "react";

import customStyle from "./TechSupportedByStacks.module.css";
import styles from "@site/src/pages/styles.module.css";

const text = {
    title: 'Technologies supported by Ensono Stacks',
    technologiesSupported: [
        { logo: 'aws.svg', name: 'AWS', link: 'https://aws.amazon.com/' }, { logo: 'microsoft-azure.svg', name: 'Microsoft Azure', link: 'https://azure.microsoft.com/' },
        { logo: 'kubernetes.svg', name: 'Kubernetes', link: 'https://kubernetes.io/' }, { logo: 'terraform.svg', name: 'Terraform', link: 'https://www.terraform.io/' }, { logo: 'docker.svg', name: 'Docker', link: 'https://www.docker.com/' }, { logo: 'dotnet.svg', name: '.NET', link: 'https://dotnet.microsoft.com/' }, { logo: 'nx.svg', name: 'NX', link: 'https://nx.dev/' },
        { logo: 'nextjs.svg', name: 'NextJS', link: 'https://nextjs.org/' }, { logo: 'spring-boot.svg', name: 'Spring Boot', link: 'https://spring.io/' }, { logo: 'azure-data-factory.svg', name: 'Azure Data Factory', link: 'https://azure.microsoft.com/products/data-factory' }, { logo: 'delta-lake.svg', name: 'Delta lake', link: 'https://delta.io/' }, { logo: 'databricks.svg', name: 'Databricks', link: 'https://www.databricks.com/' }, 
        { logo: 'java.svg', name: 'Java', link: 'https://www.java.com/' }, { logo: 'csharp.svg', name: 'C#', link: 'https://dotnet.microsoft.com/languages/csharp' }, { logo: 'typescript.svg', name: 'Typescript', link: 'https://www.typescriptlang.org/' }, { logo: 'python.svg', name: 'Python', link: 'https://www.python.org/' },
    ]
}

const {title, technologiesSupported} = text

export const TechSupportedByStacks = () => {
    return (
        <div className={customStyle.techListContainer}>
            <section className={`${styles.section} ${customStyle.section}`}>
                <h2 className={`${styles.textCenter} margin-bottom--lg`}>{title}</h2>
                <div className={customStyle.techListWrapper}>
                    {technologiesSupported.map((tech) => {
                        const {name, logo, link} = tech
                        const imagePath = `/img/icons/technologies-supported/${logo}`
                        return (<a key={name} href={link} target="_blank"><img src={imagePath} alt={name}/></a>)
                    })}
                </div>
            </section>
    </div>
    )
}
