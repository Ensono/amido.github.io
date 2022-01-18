module.exports = {
  docs: {
    "Learn about Stacks": [
      "index",
      "contributions",
      "code_of_conduct"
    ],
    Architecture: [
      "workloads/azure/backend/architecture-overview",
    ],
    Workloads: [
      "workloads/workloads",
      {
        type: "category",
        label: "Azure",
        items: [
          {
            type: "category",
            label: "Frontend Web Applications",
            items: [
              {
                type: "category",
                label: "Client Side Rendering",
                items: [
                  "workloads/azure/frontend/CSR/ide_setup_csr",
                  "workloads/azure/frontend/CSR/stacks_monorepo_csr",
                  "workloads/azure/frontend/CSR/state_management_csr",
                  "workloads/azure/frontend/CSR/getting_started_csr",
                  "workloads/azure/frontend/CSR/api_definition_csr",
                  "workloads/azure/frontend/CSR/logging_and_instrumentation_csr",
                  "workloads/azure/frontend/CSR/infrastructure_csr",
                  "workloads/azure/frontend/CSR/pipeline_csr",
                  "workloads/azure/frontend/CSR/browser_support_csr"
                ],
              },
              {
                type: "category",
                label: "Server  Side Rendering",
                items: [
                  "workloads/azure/frontend/SSR/ide_setup_ssr",
                  "workloads/azure/frontend/SSR/stacks_monorepo_ssr",
                  "workloads/azure/frontend/SSR/state_management_ssr",
                  "workloads/azure/frontend/SSR/getting_started_ssr",
                  "workloads/azure/frontend/SSR/contentful_integration",
                  "workloads/azure/frontend/SSR/identity",
                  "workloads/azure/frontend/SSR/api_definition_ssr",
                  "workloads/azure/frontend/SSR/logging_and_instrumentation_ssr",
                  "workloads/azure/frontend/SSR/server_side_cache",
                  "workloads/azure/frontend/SSR/infrastructure_ssr",
                  "workloads/azure/frontend/SSR/pipeline_ssr",
                  "workloads/azure/frontend/SSR/browser_support_ssr"
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Backend Services",
            items: [
              {
                type: "category",
                label: "Java Spring Boot REST API",
                items: [
                  "workloads/azure/backend/java/intro_java",
                  "workloads/azure/backend/java/requirements_java",
                  "workloads/azure/backend/java/setting_up_cosmos_db_locally_java",
                  "workloads/azure/backend/java/quickstart_java",
                  "workloads/azure/backend/java/scaffolding_java",
                  "workloads/azure/backend/java/ide_java",
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/azure/backend/java/architecture/maven_modules_java",
                      {
                        type: "category",
                        label: "Modules",
                        items: [
                          "workloads/azure/backend/java/architecture/dependency_parent_java",
                          "workloads/azure/backend/java/architecture/dependency_commons_java",
                          "workloads/azure/backend/java/architecture/dependency_api_java",
                          "workloads/azure/backend/java/architecture/dependency_cqrs_java",
                          "workloads/azure/backend/java/architecture/dependency_messaging_java",
                          "workloads/azure/backend/java/architecture/dependency_cosmos_java",
                          "workloads/azure/backend/java/architecture/dependency_servicebus_java",
                        ]
                      },
                      {
                        type: "category",
                        label: "Web API Architecture",
                        items: [
                          "workloads/azure/backend/java/architecture/web_api/architecture_java",
                          "workloads/azure/backend/java/architecture/web_api/structure_java",
                        ]
                      },
                      {
                        type: "category",
                        label: "Web API with CQRS and Events Architecture",
                        items: [
                          "workloads/azure/backend/java/architecture/java_cqrs/architecture_java_cqrs",
                          "workloads/azure/backend/java/architecture/java_cqrs/structure_java_cqrs",
                        ]
                      }
                    ]
                  },
                  "workloads/azure/backend/java/infrastructure_java",
                  "workloads/azure/backend/java/pipeline_java",
                  {
                    type: "category",
                    label: "Testing The API",
                    items: [
                      "workloads/azure/backend/java/testing/testing_java",
                      "workloads/azure/backend/java/testing/execute_serenity_api_tests",
                      "workloads/azure/backend/java/testing/execute_karate_api_tests",
                    ],
                  }
                ],
              },
              {
                type: "category",
                label: ".NET Core",
                items: [
                  "workloads/azure/backend/netcore/introduction_netcore",
                  "workloads/azure/backend/netcore/requirements_netcore",
                  {
                    type: "category",
                    label: "Quickstart",
                    items: [
                      {
                        type: "category",
                        label: "REST API",
                        items: [
                          "workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore"
                        ],
                      },
                      {
                        type: "category",
                        label: "REST API with CQRS",
                        items: [

                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore"
                        ],
                      },
                      {
                        type: "category",
                        label: "REST API with CQRS and Events",
                        items: [
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/create_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/configure_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/build_and_run_project_netcore"
                        ],
                      },
                    ]
                  },
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/azure/backend/netcore/architecture/architecture_overview_netcore",
                      "workloads/azure/backend/netcore/architecture/repository_overview_netcore",
                      "workloads/azure/backend/netcore/architecture/project_structure_netcore",
                      "workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore",
                      "workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore",
                      "workloads/azure/backend/netcore/architecture/nuget_dependencies",
                      {
                        type: "category",
                        label: "Swagger Configuration",
                        items: [
                          "workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore",
                          "workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",
                        ],
                      },
                    ],
                  },
                  "workloads/azure/backend/netcore/testing/functional_testing_netcore",
                  "workloads/azure/backend/netcore/infrastructure_netcore",
                  "workloads/azure/backend/netcore/pipeline_netcore",
                  "workloads/azure/backend/netcore/logging_netcore",
                  "workloads/azure/backend/netcore/security_netcore",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Google Cloud Platform",
        items: ["workloads/gcp/workloads_gcp_readme"],
      },
      {
        type: "category",
        label: "Amazon Web Services",
        items: ["workloads/aws/workloads_aws_readme"],
      },
    ],
    Infrastructure: [
      "infrastructure/introduction",
      {
        type: "category",
        label: "Azure",
        items: [
          "infrastructure/azure/core_infrastructure",
          {
            type: "category",
            label: "Pipelines",
            items: [
              "infrastructure/azure/pipelines/azure_devops",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Google Cloud Platform",
        items: [],
      },
    ],
    "Quality Assurance": [
      "testing/cli_testing_frameworks",
      "testing/testing_java_serenity_bdd",
      "testing/testing_dotnet_selenium",
      "testing/cypress_functional_testing",
      "testing/testcafe_functional_testing",
      "testing/testing_static_analysis",
      "testing/visual_analysis",
      "testing/contract_testing_pact",
      "testing/accessibility_testing",
      "testing/performance_testing_gatling",
    ],
    "Stacks CLI": [
      "stackscli/usage",
      "stackscli/runtime_config",
      "stackscli/project_settings",
      "stackscli/examples",
      "stackscli/troubleshooting"
    ]
  },
};
