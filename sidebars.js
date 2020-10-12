module.exports = {
  docs: {
    'Getting started': [
      'index',
      {
        type: 'category',
        label: 'Build the application',
        items: [
          'getting_started_demo',
          'getting_started_dev',
          'getting_started_dev_java',
          'getting_started_dev_dotnet'
        ]
      }
    ],
    'Workloads': [
      'workloads/workloads',
      {
        type: 'category',
        label: 'Backend Services',
        items: [
        ]
      },
      {
        type: 'category',
        label: 'Frontend Web Applications',
        items: [
          'workloads/frontend/browser_support',
          'workloads/frontend/cli_webapp_frameworks',
          'workloads/frontend/monorepo',
          'workloads/frontend/server_side_cache'
        ]
      },
      {
        type: 'category',
        label: 'Java Spring Boot REST API Application',
        items: [
          'workloads/java/intro_java',
          'workloads/java/quickstart_java',
          'workloads/java/scaffolding_java',
          'workloads/java/ide_java',
          'workloads/java/structure_java',
          'workloads/java/testing_java',
          'workloads/java/end_to_end_testing_java'
        ]
      }
    ],
    'Infrastructure': [
      {
        type: 'category',
        label: 'Azure',
        items: [
          'infrastructure/azure/infrastructure_code',
          'infrastructure/azure/pipeline_templates'
        ]
      },
      {
        type: 'category',
        label: 'Google Cloud Platform',
        items: [
        ]
      }
    ],
    'Testing': [
      'testing/testing',
      'testing/cli_testing_frameworks',
      'testing/testing_serenity_bdd',
      'testing/testing_static'
    ],
    'Packages': [
      'packages/packages',
      {
        type: 'category',
        label: 'npm',
        items: [
          'packages/npm/publishing',
          'packages/npm/scaffolding-cli/cli_process',
          'packages/npm/scaffolding-cli/scaffolding_cli'
        ]
      },
      {
        type: 'category',
        label: 'nuget',
        items: [
          'packages/nuget/publishing_nuget'
        ]
      },
      {
        type: 'category',
        label: 'maven',
        items: [
          'packages/maven/dependency_management'
        ]
      }
    ],
    'Support': [
      'support/faq'
    ]
  }
};
