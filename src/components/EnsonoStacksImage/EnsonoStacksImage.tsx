import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import customStyle from './EnsonoStacksImage.module.css'

const text = {
    title: 'Ensono Stacks',
    description: 'Making digital transformation easier and more reliable.',
    buttonText: 'Show me how',
    logo: {
        url: "/img/icons/stacks-logo.svg",
        alt: "Ensono Stacks Icon"
    },
    image: {
        alt: 'Ensono Image'
    }
}

const {title, description, buttonText, logo,image} = text

export const EnsonoStacksImage = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyle.ensonoStacksImageContainer}>
            <div className={customStyle.wrapperImage}>
                <img src={useBaseUrl('img/shutterstock_1293015184.png')} alt={image.alt}/>
            </div>
            <div className={customStyle.wrapper}>
                <div className={customStyle.stacksLogo}>
                    <img src={logo.url} alt={logo.alt}/> 
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <Link
                    className="button button--primary button--lg"
                    to={baseUrl}
                >{buttonText}</Link>
            </div> 
        </div>
    )
}
