import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import AmidoStacksLogo from './AmidoStacksLogo.svg'

import customStyle from './EnsonoStacksImage.module.css'

const text = {
    title: 'Ensono Stacks',
    description: 'Making digital transformation easier and more reliable.',
    buttonText: 'Show me how'
}

const EnsonoStacksImage = () => {
    const baseUrl = useBaseUrl("docs/");

    return (
        <div className={customStyle.ensonoStacksImageContainer}>
            <div className={customStyle.wrapperImage}>
                <img src={useBaseUrl('img/ensonoImage.png')} alt="Ensono Image"/>
            </div>
            <div className={customStyle.wrapper}>
                <AmidoStacksLogo/>
                <p>{text.description}</p>
                <Link
                    className="button button--primary button--lg"
                    to={baseUrl}
                >{text.buttonText}</Link>
            </div> 
        </div>
    )
}


export default EnsonoStacksImage;
