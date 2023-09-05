import React, {useState} from "react";
import clsx from "clsx";
import Select from "react-select";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "../../styles.module.css";
import customStyle from "./Picker.module.css";

function Picker() {
    const [firstOption, setFirstOption] = useState(undefined);
    const [secondOption, setSecondOption] = useState(undefined);
    const [thirdOption, setThirdOption] = useState(undefined);
    const [isFinalChoice, setFinalChoice] = useState(false);
  
    const baseUrl = useBaseUrl("docs/");
    const OptionMapper = {
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
        "Client Side or Server Side Rendered Web Application": {
          "Microsoft Azure [Azure]": "nx/nx_stacks",
        },
      },
    };
  
    const cloudProviders = Object.keys(OptionMapper).map((key) => ({
      value: OptionMapper[key],
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
  
  
    return (
      <div className="container" style={{display:"flex", justifyContent:"center"}}>
        <div className={clsx("col", "col--6", customStyle.containerSelects)}>
          <Select placeholder="Select Language/Framework"
                  value={firstOption}
                  onChange={(selected) => {
                    setFirstOption(selected);
                    setSecondOption(null);
                    setFinalChoice(typeof selected.value === "object" ? false : true);
                  }}
                  options={cloudProviders}
          />
  
          { applications.length > 0 && (
            <Select placeholder="Select Solution Architecture"
                    value={secondOption}
                    onChange={(selected) => {
                      setSecondOption(selected);
                      setThirdOption(null);
                      setFinalChoice(false);
                    }}
                    options={applications || []}
            />
          )}
  
          {languages.length > 0 && (
            <Select placeholder="Select Cloud Provider"
                    value={thirdOption}
                    onChange={(selected) => {
                      setThirdOption(selected);
                      setFinalChoice(true);
                    }}
                    options={languages || []}
            />
          )}
  
          <div className={styles.buttons} style={{ marginTop: 40 }}>
              <Link className={clsx("button button--primary button--lg", isFinalChoice ? "" : customStyle.disabledButton )}
                    to={ isFinalChoice ? (baseUrl + (thirdOption ? thirdOption.value : firstOption ? firstOption.value : "")) : "" }
                    { ...isFinalChoice ? "" : "disabled"}
              >
                LET'S GO!
              </Link>
          </div>
        </div>
      </div>
    );
  }

export default Picker;
