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
            <img src={useBaseUrl('img/ensonoImage.png')} alt="Ensono Image"/>
                <div className={customStyle.wrapper}>
                <AmidoStacksLogo/>
                {/* <h1>{text.title}</h1> */}
                <p>{text.description}</p>
                <div style={{ marginTop: 20 }}>
                    <Link
                        className="button button--primary button--lg"
                        to={baseUrl}
                    >{text.buttonText}</Link>
                </div>
            </div>
        </div>
    )
}


export default EnsonoStacksImage;
