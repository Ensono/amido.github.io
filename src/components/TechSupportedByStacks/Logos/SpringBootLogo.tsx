import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

function SpringBootLogo(props) {
  return (
    <img src={useBaseUrl('img/spring_boot.svg')} alt="Spring Boot" {...props}/>
  );
};

export default SpringBootLogo;
