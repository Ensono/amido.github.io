module.exports = {
  docs: {
    "Getting started": [
      "index",
      {
        type: "category",
        label: "Build the application",
        items: [
          "getting_started_demo",
          "getting_started_dev",
          "getting_started_dev_java",
          "getting_started_dev_dotnet",
        ],
      },
    ],
    Workloads: [
      "workloads/workloads",
      {
        type: "category",
        label: "Backend Services",
        items: [],
      },
      {
        type: "category",
        label: "Azure",
        items: [
          {
            type: "category",
            label: "Frontend Web Applications",
            items: [
              "workloads/azure/frontend/intro_node_js",
              "workloads/azure/frontend/ide_node_js",
              "workloads/azure/frontend/environment_variables_nodejs",
              "workloads/azure/frontend/cli_webapp_frameworks",
              "workloads/azure/frontend/monorepo",
              "workloads/azure/frontend/browser_support",
              "workloads/azure/frontend/server_side_cache",
            ],
          },
          {
            type: "category",
            label: "Java Spring Boot REST API Application",
            items: [
              'workloads/azure/java/intro_java',
              'workloads/azure/java/quickstart_java',
              'workloads/azure/java/scaffolding_java',
              'workloads/azure/java/ide_java',
              'workloads/azure/java/structure_java',
              'workloads/azure/java/testing_java',
              'workloads/azure/java/end_to_end_testing_java'
            ],
          },
          {
            type: 'category',
            label: '.NET Core REST API Application',
            items: [
              'workloads/azure/netcore/introduction_netcore',
              {
                type: 'category',
                label: 'Getting started',
                items: [
                  'workloads/azure/netcore/quickstart/requirements_netcore',
                  'workloads/azure/netcore/quickstart/create_project_netcore',
                  'workloads/azure/netcore/quickstart/configure_project_netcore',
                  'workloads/azure/netcore/quickstart/build_and_run_project_netcore',
                  {
                    type: 'category',
                    label: 'Test',
                    items: [
                      'workloads/azure/netcore/quickstart/testing/functional_testing_netcore',
                      'workloads/azure/netcore/quickstart/testing/performance_testing_netcore',
                    ]
                  },
                  'workloads/azure/netcore/quickstart/deploy_project_netcore',
                  {
                    type: 'category',
                    label: 'Swagger Configuration',
                    items: [
                      'workloads/azure/netcore/quickstart/swagger_configuration/configure_swagger_netcore',
                      'workloads/azure/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore',
                    ]
                  },
                ]
              },
              'workloads/azure/netcore/logging_netcore',
              'workloads/azure/netcore/security_netcore',
              {
                type: 'category',
                label: 'Architecture',
                items: [
                  'workloads/azure/netcore/project_structure/architecture_overview_netcore',
                  'workloads/azure/netcore/project_structure/repository_overview_netcore',
                  'workloads/azure/netcore/project_structure/project_structure_netcore'
                ]
              }
            ]
          }
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
    'Infrastructure': [
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
      "testing/testing_serenity_bdd",
      "testing/testing_static",
    ],
    Packages: [
      "packages/packages",
      {
        type: "category",
        label: "npm",
        items: [
          "packages/npm/publishing",
          "packages/npm/scaffolding-cli/cli_process",
          "packages/npm/scaffolding-cli/scaffolding_cli",
        ],
      },
      {
        type: "category",
        label: "nuget",
        items: ["packages/nuget/publishing_nuget"],
      },
      {
        type: "category",
        label: "maven",
        items: ["packages/maven/dependency_management"],
      },
    ],
    Support: ["support/faq"],
  },
};
