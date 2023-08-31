import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function ShouldlyLogo(props) {
  return (
    <img src={useBaseUrl('img/shouldly.svg')} alt="Shouldly" {...props}/>
  )
}

export default ShouldlyLogo;
