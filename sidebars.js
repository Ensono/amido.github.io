module.exports = {
  docs: {
    "What is Ensono Stacks?": [
      "index",
      "contributions",
      "code_of_conduct",
      {
        type: "category",
        label: "Development Support",
        items: [
          "developer/developer_patterns_readme",
          {
            type: "category",
            label: "Java Development Patterns",
            items: [
              "developer/java/patterns/java_app_layering",
              "developer/java/patterns/java_mapstruct_mapping",
              "developer/java/patterns/java_swagger_annotations",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Ensono Stacks CLI",
        items: ["stackscli/about"],
      },
    ],
    "User Interface": [
      "nx/nx_stacks",
      "getting_started/setup",
      {
        type: "category",
        label: "Next.js",
        items: [
          "module_federation/nextjs_plugin",
          {
            type: "category",
            label: "Authentication and Session Management",
            items: ["nextjs/authentication", "nextjs/infrastructure"],
          },
        ],
      },
      "linting/eslint",
      "storybook/storybook_stacks",
      {
        type: "category",
        label: "Ensono Stacks Plugins",
        items: [
          "getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace",
          "getting_started/workspace/ensono-stacks-workspace",
          "getting_started/next/ensono-stacks-next",
          "getting_started/azure-node/ensono-stacks-azure-node",
          //"getting_started/azure-react/ensono-stacks-azure-react", Temporarily removed, add back in Cycle 11
          "getting_started/rest-client/ensono-stacks-rest-client",
          "getting_started/playwright/ensono-stacks-playwright",
          "getting_started/cypress/ensono-stacks-cypress",
          "getting_started/logger/ensono-stacks-logger",
        ],
      },
    ],
    "Backend Services": [
      "workloads/workloads",
      {
        type: "category",
        label: "Cloud Platforms",
        items: [
          {
            type: "category",
            label: "All",
            items: [
              {
                type: "category",
                label: "Java Spring Boot REST API",
                items: [
                  "workloads/common/backend/java/intro_java",
                  "workloads/common/backend/java/scaffolding_java",
                  "workloads/common/backend/java/ide_java",
                  "workloads/common/backend/java/maven_spring_profiles",
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/common/backend/java/architecture/maven_modules_java",
                      {
                        type: "category",
                        label: "Modules",
                        items: [
                          "workloads/common/backend/java/architecture/dependency_parent_java",
                          "workloads/common/backend/java/architecture/dependency_commons_java",
                          "workloads/common/backend/java/architecture/dependency_api_java",
                          "workloads/common/backend/java/architecture/dependency_cqrs_java",
                          "workloads/common/backend/java/architecture/dependency_messaging_java",
                        ],
                      },
                      {
                        type: "category",
                        label: "Web API Architecture",
                        items: [
                          "workloads/common/backend/java/architecture/web_api/architecture_java",
                          "workloads/common/backend/java/architecture/web_api/structure_java",
                        ],
                      },
                      {
                        type: "category",
                        label: "Web API with CQRS and Events Architecture",
                        items: [
                          "workloads/common/backend/java/architecture/java_cqrs/architecture_java_cqrs",
                          "workloads/common/backend/java/architecture/java_cqrs/structure_java_cqrs",
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
            label: "Azure",
            items: [
              {
                type: "category",
                label: "Java Spring Boot REST API",
                items: [
                  "workloads/common/backend/java/intro_java",
                  "workloads/azure/backend/java/requirements_java",
                  "workloads/azure/backend/java/setting_up_cosmos_db_locally_java",
                  "workloads/azure/backend/java/quickstart_java",
                  "workloads/common/backend/java/scaffolding_java",
                  "workloads/common/backend/java/ide_java",
                  "workloads/common/backend/java/maven_spring_profiles",
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/common/backend/java/architecture/maven_modules_java",
                      {
                        type: "category",
                        label: "Modules",
                        items: [
                          "workloads/azure/backend/java/architecture/dependency_cosmos_java",
                          "workloads/azure/backend/java/architecture/dependency_servicebus_java",
                        ],
                      },
                    ],
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
                  },
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
                          "workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",
                        ],
                      },
                      {
                        type: "category",
                        label: "REST API with CQRS",
                        items: [
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",
                          "workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore",
                        ],
                      },
                    ],
                  },
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/azure/backend/netcore/architecture/architecture_overview_netcore",
                      "workloads/azure/backend/netcore/architecture/repository_overview_netcore",
                      {
                        type: "category",
                        label: "Solution Structure",
                        items: [
                          "workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_simple_api",
                          "workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_cqrs",
                          "workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_function_worker"
                        ],
                      },
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
                  "workloads/azure/backend/netcore/testing/functional_testing_netcore",
                  "workloads/azure/backend/netcore/infrastructure_netcore",
                  "workloads/azure/backend/netcore/infrastructure_aws_netcore",
                  "workloads/azure/backend/netcore/pipeline_netcore",
                  "workloads/azure/backend/netcore/pipeline_gha_netcore",
                  "workloads/azure/backend/netcore/logging_netcore",
                  "workloads/azure/backend/netcore/security_netcore",
                ],
              },
            ],
          },
          // {
          //   type: "category",
          //   label: "Google Cloud Platform",
          //   items: ["workloads/gcp/workloads_gcp_readme"],
          // },
          {
            type: "category",
            label: "Amazon Web Services",
            items: [
              {
                type: "category",
                label: "Java Spring Boot REST API",
                items: [
                  "workloads/common/backend/java/intro_java",
                  "workloads/aws/backend/java/setting_up_dynamodb_locally_java",
                  "workloads/aws/backend/java/setting_up_xray_daemon_locally_java",
                  "workloads/aws/backend/java/define_aws_secrets_java",
                  "workloads/common/backend/java/scaffolding_java",
                  "workloads/common/backend/java/ide_java",
                  "workloads/common/backend/java/maven_spring_profiles",
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      "workloads/common/backend/java/architecture/maven_modules_java",
                      {
                        type: "category",
                        label: "Modules",
                        items: [
                          "workloads/aws/backend/java/architecture/dependency_dynamodb_java",
                          "workloads/aws/backend/java/architecture/dependency_sqs_java",
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
    ],
    "Data Platform": [
      "workloads/azure/data/intro_data_azure",
      {
        type: "category",
        label: "Architecture",
        items: [
          "workloads/azure/data/architecture/architecture_data_azure",
          "workloads/azure/data/architecture/infrastructure_data_azure",
          "workloads/azure/data/architecture/security_data_azure",
        ],
      },

      {
        type: "category",
        label: "Data Engineering",
        items: [
          "workloads/azure/data/data_engineering/data_engineering_intro_azure",
          "workloads/azure/data/data_engineering/stacks_data_utilities",
          "workloads/azure/data/data_engineering/datastacks",
          "workloads/azure/data/data_engineering/ingest_data_azure",
          "workloads/azure/data/data_engineering/data_processing",
          "workloads/azure/data/data_engineering/data_quality_azure",
          "workloads/azure/data/data_engineering/testing_data_azure",
        ],
      },
      {
        type: "category",
        label: "Getting Started",
        items: [
          "workloads/azure/data/getting_started/getting_started",
          "workloads/azure/data/getting_started/requirements_data_azure",
          "workloads/azure/data/getting_started/generate_project",
          "workloads/azure/data/getting_started/core_data_platform_deployment_azure",
          "workloads/azure/data/getting_started/dev_quickstart_data_azure",
          "workloads/azure/data/getting_started/shared_resources_deployment_azure",
          "workloads/azure/data/getting_started/example_data_source",
          "workloads/azure/data/getting_started/ingest_pipeline_deployment_azure",
          "workloads/azure/data/getting_started/processing_pipeline_deployment_azure",
          "workloads/azure/data/getting_started/fabric_deployment_guide",
        ],
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
            items: ["infrastructure/azure/pipelines/azure_devops"],
          },
          "getting_started/azure-container-app/azure-container-apps",
        ],
      },
    ],
    QA: [
      {
        type: "category",
        label: "NX - Frontend Testing",
        items: [
          "testing/testing_in_nx/frontend_testing_in_nx",
          {
            type: "category",
            label: "Playwright Information",
            items: [
              "testing/testing_in_nx/testing_with_playwright",
              "testing/testing_in_nx/playwright_accessibility_testing",
              {
                type: "category",
                label: "Visual Testing",
                items: [
                  "testing/testing_in_nx/playwright_visual_testing",
                  "testing/testing_in_nx/playwright_visual_testing_applitools_eyes",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Cypress Information",
            items: [
              "testing/testing_in_nx/testing_with_cypress",
              "testing/testing_in_nx/cypress_accessibility_testing",
            ],
          },
        ],
      },
      "testing/testing_java_serenity_bdd",
      "testing/testing_dotnet_selenium",
      "testing/testing_static_analysis",
      "testing/contract_testing_pact",
      "testing/accessibility_testing",
      "testing/performance_testing_gatling",
    ],
  },
};
