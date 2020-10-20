module.exports = {
  docs: {
    "Learn about Stacks": [
      "index",
      "roadmap",
      "glossary",
      {
        type: "category",
        label: "Build the application",
        items: [
        ],
      },
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
              "workloads/azure/frontend/ide_node_js",
              "workloads/azure/frontend/cli_webapp_frameworks",
              "workloads/azure/frontend/monorepo",
              "workloads/azure/frontend/state-management",
    
              {
                type: "category",
                label: "Client Side Rendering",
                items: [
                  "workloads/azure/frontend/environment_variables_nodejs_crs",
                  "workloads/azure/frontend/api_definition_crs",
                  "workloads/azure/frontend/logging_node_js_crs",
                ],
              },
              {
                type: "category",
                label: "Server  Side Rendering",
                items: [
                  "workloads/azure/frontend/environment_variables_nodejs",
                  "workloads/azure/frontend/cms",
                  "workloads/azure/frontend/identity",
                  "workloads/azure/frontend/api_definition",
                  "workloads/azure/frontend/logging_node_js",
                  "workloads/azure/frontend/server_side_cache",
                ],
              },
              "workloads/azure/frontend/browser_support",
              "workloads/azure/frontend/deployment_node_js",
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
                  'workloads/azure/backend/java/intro_java',
                  'workloads/azure/backend/java/quickstart_java',
                  'workloads/azure/backend/java/scaffolding_java',
                  'workloads/azure/backend/java/ide_java',
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      'workloads/azure/backend/java/architecture_java',
                      'workloads/azure/backend/java/structure_java',
                    ],
                  },
                  'workloads/azure/backend/java/infrastructure_java',
                  'workloads/azure/backend/java/pipeline_java',
                  'workloads/azure/backend/java/testing_java',
                ],
              },
              {
                type: "category",
                label: "Java Spring Boot REST API with CQRS",
                items: [
                  'workloads/azure/backend/java_cqrs/intro_java_cqrs',
                  'workloads/azure/backend/java_cqrs/quickstart_java_cqrs',
                  'workloads/azure/backend/java_cqrs/scaffolding_java_cqrs',
                  'workloads/azure/backend/java_cqrs/ide_java_cqrs',
                  {
                    type: "category",
                    label: "Architecture",
                    items: [
                      'workloads/azure/backend/java_cqrs/architecture_java_cqrs',
                      'workloads/azure/backend/java_cqrs/structure_java_cqrs',
                    ],
                  },
                  'workloads/azure/backend/java_cqrs/infrastructure_java_cqrs',
                  'workloads/azure/backend/java_cqrs/pipeline_java_cqrs',
                  'workloads/azure/backend/java_cqrs/testing_java_cqrs',
                ],
              },
              {
                type: 'category',
                label: '.NET Core REST API with CQRS',
                items: [
                  'workloads/azure/backend/netcore/introduction_netcore',
                  {
                    type: 'category',
                    label: 'Getting started',
                    items: [
                      'workloads/azure/backend/netcore/quickstart/requirements_netcore',
                      'workloads/azure/backend/netcore/quickstart/create_project_netcore',
                      'workloads/azure/backend/netcore/quickstart/configure_project_netcore',
                      'workloads/azure/backend/netcore/quickstart/build_and_run_project_netcore',
                      {
                        type: 'category',
                        label: 'Test',
                        items: [
                          'workloads/azure/backend/netcore/quickstart/testing/functional_testing_netcore',
                          'workloads/azure/backend/netcore/quickstart/testing/performance_testing_netcore',
                        ]
                      },
                      'workloads/azure/backend/netcore/quickstart/deploy_project_netcore',
                      {
                        type: 'category',
                        label: 'Swagger Configuration',
                        items: [
                          'workloads/azure/backend/netcore/quickstart/swagger_configuration/configure_swagger_netcore',
                          'workloads/azure/backend/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore',
                        ]
                      },
                    ]
                  },
                  'workloads/azure/backend/netcore/logging_netcore',
                  'workloads/azure/backend/netcore/security_netcore',
                  {
                    type: 'category',
                    label: 'Architecture',
                    items: [
                      'workloads/azure/backend/netcore/project_structure/architecture_overview_netcore',
                      'workloads/azure/backend/netcore/project_structure/repository_overview_netcore',
                      'workloads/azure/backend/netcore/project_structure/project_structure_netcore'
                    ]
                  }
                ]
              }
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Google Cloud Platform",
        items: [
          "workloads/gcp/workloads_gcp_readme",
        ],
      },
      {
        type: "category",
        label: "Amazon Web Services",
        items: [
          "workloads/aws/workloads_aws_readme",
        ],
      },
    ],
    Infrastructure: [
      {
        type: "category",
        label: "Azure",
        items: [
          "infrastructure/azure/infrastructure_code",
          "infrastructure/azure/pipeline_templates",
        ],
      },
      {
        type: "category",
        label: "Google Cloud Platform",
        items: [],
      },
    ],
    Testing: [
      "testing/testing",
      "testing/cli_testing_frameworks",
      "testing/testing_java_serenity_bdd",
      "testing/testing_dotnet_selenium",
      "testing/cypress_functional_testing",
      "testing/visual_analysis",
      "testing/contract_testing_pact",
      "testing/accessibility_testing",
      "testing/performance_testing_gatling",
      "testing/testing_static",
      "testing/static_analysis",
    ],
  },
};
