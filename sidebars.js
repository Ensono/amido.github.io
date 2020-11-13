module.exports = {
  docs: {
    "Learn about Stacks": [
      "index",
      "contributions",
      "code_of_conduct"
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
                      "workloads/azure/backend/java/architecture_java",
                      "workloads/azure/backend/java/structure_java",
                    ],
                  },
                  "workloads/azure/backend/java/infrastructure_java",
                  "workloads/azure/backend/java/pipeline_java",
                  {
                    type: "category",
                    label: "Testing The API",
                    items: [
                      "workloads/azure/backend/java/testing_java",
                      "workloads/azure/backend/java/execute_serenity_api_tests",
                      "workloads/azure/backend/java/execute_karate_api_tests",
                    ],
                  },
                ],
              },
              {
                type: "category",
                label: "Java Spring Boot REST API with CQRS",
                items: [
                  "workloads/azure/backend/java_cqrs/intro_java_cqrs",
                  "workloads/azure/backend/java_cqrs/requirements_java_cqrs",
                  "workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",
                  "workloads/azure/backend/java_cqrs/quickstart_java_cqrs",
                  "workloads/azure/backend/java_cqrs/scaffolding_java_cqrs",
                  "workloads/azure/backend/java_cqrs/ide_java_cqrs",
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/azure/backend/java_cqrs/architecture_java_cqrs",
                      "workloads/azure/backend/java_cqrs/structure_java_cqrs",
                    ],
                  },
                  "workloads/azure/backend/java_cqrs/infrastructure_java_cqrs",
                  "workloads/azure/backend/java_cqrs/pipeline_java_cqrs",
                  {
                    type: "category",
                    label: "Testing The API",
                    items: [
                      "workloads/azure/backend/java_cqrs/testing_java_cqrs",
                      "workloads/azure/backend/java_cqrs/execute_serenity_api_tests",
                      "workloads/azure/backend/java_cqrs/execute_karate_api_tests",
                    ],
                  },
                ],
              },
              {
                type: "category",
                label: ".NET Core REST API with CQRS",
                items: [
                  "workloads/azure/backend/netcore/introduction_netcore",
                  {
                    type: "category",
                    label: "Getting started",
                    items: [
                      "workloads/azure/backend/netcore/quickstart/requirements_netcore",
                      "workloads/azure/backend/netcore/quickstart/create_project_netcore",
                      "workloads/azure/backend/netcore/quickstart/configure_project_netcore",
                      "workloads/azure/backend/netcore/quickstart/build_and_run_project_netcore"
                    ],
                  },
                  "workloads/azure/backend/netcore/testing/functional_testing_netcore",
                  "workloads/azure/backend/netcore/infrastructure_netcore",
                  "workloads/azure/backend/netcore/pipeline_netcore",
                  "workloads/azure/backend/netcore/logging_netcore",
                  "workloads/azure/backend/netcore/security_netcore",
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/azure/backend/netcore/architecture/architecture_overview_netcore",
                      "workloads/azure/backend/netcore/architecture/repository_overview_netcore",
                      "workloads/azure/backend/netcore/architecture/project_structure_netcore",
                      "workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore",
                      "workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore",
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
  },
};
