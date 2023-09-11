import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function SerenityLogo(props) {
  return (
    <img src={useBaseUrl('img/serenity.svg')} alt="Serenity" {...props}/>
  )
}

export default SerenityLogo;
