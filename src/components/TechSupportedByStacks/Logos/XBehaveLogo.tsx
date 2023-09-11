import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function XbehaveLogo(props) {
  return (
    <img src={useBaseUrl('img/xbehave.svg')} alt="xBehave" {...props}/>
  );
}

export default XbehaveLogo;
