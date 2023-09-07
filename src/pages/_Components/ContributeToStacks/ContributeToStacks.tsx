import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import customStyle from "./ContributeToStacks.module.css";
import styles from "../../styles.module.css";
const text = {
    contribute: {
      title: "Contribute to Stacks",
      link: "contributions",
      description: "As an open source project, you can be a part of the Github community shaping Ensono Stacks",
      img: '/img/icons/ensono-icon_puzzle-v_0222.png'
    }
  }
const { contribute: {title, link, description, img} } = text;

const ContributeToStacks = () => {
    const baseUrl = useBaseUrl("docs/");

    
    return (
        <div className={customStyle.container}>
            <section className={styles.section}>
                <div className={customStyle.wrapper}>
                     <div className={customStyle.imageWrapper}>
                        <img src={img} />
                    </div>
                    <div className={customStyle.textWrapper}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={customStyle.getStartedLink}>
                    <Link
                    className={clsx(
                        "button button button--primary button--lg",
                        styles.getStarted
                    )}
                    to={ link.startsWith("http") ? link  : baseUrl + link}
                    >
                    {title}
                    </Link>
                </div>
            </section>
        </div>
    )
}
   


export default ContributeToStacks;
