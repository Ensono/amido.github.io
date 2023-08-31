import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function RestAssuredLogo(props) {
  return (
    <img src={useBaseUrl('img/rest-assured.svg')} alt="Rest Assured" {...props}/>
  );
}

export default RestAssuredLogo;
