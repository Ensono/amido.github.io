import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function BddfyLogo(props) {
  return (
    <img src={useBaseUrl('img/BDDfy.svg')} alt="BDDfy" {...props}/>
  );
}

export default BddfyLogo;
