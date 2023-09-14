import React, {useState} from "react";
import clsx from "clsx";
import Select from "react-select";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "@site/src/pages/styles.module.css";
import customStyle from "./Picker.module.css";

const text = {
  languageAndFramework: {
    placeholder: 'Select Language/Framework'
  },
  solutionArchitecture: {
    placeholder: 'Select Solution Architecture'
  },
  cloudProvider: {
    placeholder: 'Select Cloud Provider'
  },
  optionMapper: {
    "C# / .NET Core": {
      "REST Web API": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",
        "Amazon Web Services [AWS]":
          "workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",
      },
      "REST Web API with CQRS": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",
        "Amazon Web Services [AWS]":
          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",
      }
    },
    "Java Spring Boot": {
      "REST Web API": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/java/intro_java",
      },
      "REST Web API with CQRS": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/java/intro_java",
      },
      "REST Web API with CQRS and Events": {
        "Microsoft Azure [Azure]":
          "workloads/azure/backend/java/intro_java",
      },
    },
    "Typescript / Nx": {
      "Server Side Rendered Web Application": {
        "Microsoft Azure [Azure]": "nx/nx_stacks",
      },
    },
  }
}

const {languageAndFramework, solutionArchitecture, cloudProvider, optionMapper} = text

export const Picker = () => {
    const [firstOption, setFirstOption] = useState(undefined);
    const [secondOption, setSecondOption] = useState(undefined);
    const [thirdOption, setThirdOption] = useState(undefined);
    const [isFinalChoice, setFinalChoice] = useState(false);
  
    const baseUrl = useBaseUrl("docs/");
  
    const cloudProviders = Object.keys(optionMapper).map((key) => ({
      value: optionMapper[key],
      label: key,
    }));
  
    const applications =
      firstOption && typeof firstOption.value === "object"
        ? Object.keys(firstOption.value).map((option) => {
            return { value: firstOption.value[option], label: option };
          })
        : [];
  
    const languages =
      secondOption && typeof secondOption.value === "object"
        ? Object.keys(secondOption.value).map((key) => {
            return { value: secondOption.value[key], label: key };
          })
        : [];

    const selectMenuColourTheme = (theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors, 
        primary50: '#f4f4f4',
        primary25: '#f4f4f4',
        primary: '#6941EB',
      },
    })
  
  
    return (
      <div className={`container ${customStyle.pickerContainer}`}>
        <div className={clsx("col", "col--12", customStyle.containerSelects)}>
          <Select placeholder={languageAndFramework.placeholder}
              value={firstOption}
              onChange={(selected) => {
                setFirstOption(selected);
                setSecondOption(null);
                setFinalChoice(typeof selected.value === "object" ? false : true);
              }}
              options={cloudProviders}
              theme={(theme) => selectMenuColourTheme(theme)}
          />
  
          { applications.length > 0 && (
            <Select placeholder={solutionArchitecture.placeholder}
                value={secondOption}
                onChange={(selected) => {
                  setSecondOption(selected);
                  setThirdOption(null);
                  setFinalChoice(false);
                }}
                options={applications || []}
                theme={(theme) => selectMenuColourTheme(theme)}
            />
          )}
  
          {languages.length > 0 && (
            <Select placeholder={cloudProvider.placeholder}
                value={thirdOption}
                onChange={(selected) => {
                  setThirdOption(selected);
                  setFinalChoice(true);
                }}
                options={languages || []}
                theme={(theme) => selectMenuColourTheme(theme)}
            />
          )}
  
          <div className={`${styles.buttons} margin-top--md`}>
              <Link className={clsx("button button--primary button--lg", isFinalChoice ? "" : customStyle.disabledButton )}
                    to={ isFinalChoice ? (baseUrl + (thirdOption ? thirdOption.value : firstOption ? firstOption.value : "")) : "" }
                    disabled={!isFinalChoice}
              >
                Let's go!
              </Link>
          </div>
        </div>
      </div>
    );
  }