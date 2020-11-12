import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function JunitLogo(props) {
  return (
    <img src={useBaseUrl('img/JUnit.svg')} alt="JUnit" {...props}/>
  );
}

export default JunitLogo;
