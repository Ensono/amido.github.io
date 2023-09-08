import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import customStyle from './EnsonoStacksImage.module.css'

const text = {
    title: 'Ensono Stacks',
    description: 'Making digital transformation easier and more reliable.',
    buttonText: 'Show me how'
}

export const EnsonoStacksImage = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyle.ensonoStacksImageContainer}>
            <div className={customStyle.wrapperImage}>
                <img src={useBaseUrl('img/shutterstock_1293015184.jpg')} alt="Ensono Image"/>
            </div>
            <div className={customStyle.wrapper}>
                <div className={customStyle.stacksLogo}>
                    <img src="/img/icons/stacks-logo.svg" alt="Stacks Icon"/> 
                    <h2>Ensono Stacks</h2>
                </div>
                <p>{text.description}</p>
                <Link
                    className="button button--primary button--lg"
                    to={baseUrl}
                >{text.buttonText}</Link>
            </div> 
        </div>
    )
}
