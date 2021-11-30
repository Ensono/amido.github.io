const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: "Amido Stacks ",
  tagline:
    "Helping projects gain momentum on digital transformation, with opinionated and modular boilerplate solutions",
  url: "https://stacks.amido.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "warn",
  favicon: "img/thumbnail_stacks.png",
  organizationName: "Amido", // Usually your GitHub org/user name.
  projectName: "Stacks", // Usually your repo name.
  customFields: {
    description: 'Amido Stacks is a catalogue of workload templates that\n' +
        'instantly scaffold and deploy boilerplate software projects. Slash the time it takes to get productive on your software project.',
    keywords: [
      "Microsoft Azure",
      "Google Cloud Platform",
      "AWS",
      "C#",
      ".NET",
      "Java",
      "Spring Boot",
      "Node",
      "React",
      "xUnit",
      "Shouldly",
      "BBDfy",
      "Cucumber",
      "Serenity",
      "BDD",
      "JUnit",
      "Karate",
      "REST",
      "Rest Assured",
      "Jest",
      "Gatling",
      "TestCafe",
      "Google Lighthouse",
      "Applitools",
      "Cypress",
      "OWASP",
    ],
  },
  themeConfig: {
    gtag: {
      trackingID: 'G-EKCQBC5CSJ',
      anonymizeIP: true, // Should IPs be anonymized? (optional)
    },
    googleAnalytics: {
      trackingID: 'G-EKCQBC5CSJ',
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: "56a3097b6350cd2363a8746a98c6c278",
      indexName: "amido_stacks",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['csharp', 'docker', 'powershell', 'java', 'bash', 'json'],
    },
    navbar: {
      title: "",
      logo: {
        alt: "Amido Stacks Logo",
        src: "img/logo_wide.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/amido/amido.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Amido",
              href: "https://amido.com/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/amido/amido.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amido Ltd`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5
        }
      }
    ]
  ]
};
