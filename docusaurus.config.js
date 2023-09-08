const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

require('dotenv').config();

module.exports = {
  title: "Ensono Stacks",
  tagline:
    "Helping projects gain momentum on digital transformation, with opinionated and modular boilerplate solutions",
  url: "https://stacks.amido.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "warn",
  favicon: "img/icons/stacks-logo.svg",
  organizationName: "Ensono", // Usually your GitHub org/user name.
  projectName: "Stacks", // Usually your repo name.
  customFields: {
    description: 'Ensono Stacks is a catalogue of workload templates that\n' +
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
    docSearch: {
      appId: process.env.DOCSEARCH_APP_ID,
      apiKey: process.env.DOCSEARCH_API_KEY,
      indexName: process.env.DOCSEARCH_INDEX_NAME,
    }
  },
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['csharp', 'docker', 'powershell', 'java', 'bash', 'json'],
    },
    navbar: {
      title: "",
      logo: {
        alt: "Ensono Stacks Logo",
        src: "img/icons/ensono-logo.svg",
        href: "https://www.ensono.com/",
        width: 150,
        height: 36,
      },
      items: [
        {
          href: "https://github.com/Ensono/amido.github.io",
          label: "Ensono Stacks benefits",
        },
        {
          href: "https://github.com/Ensono/amido.github.io",
          label: "Stacks blog",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Developer documentation",
        },
        {
          href: "https://github.com/Ensono/amido.github.io",
          label: "GitHub",
        },
        {
          href: "https://www.ensono.com/company/lets-connect/",
          label: "Let's connect",
          position: 'right'
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
              label: "Ensono",
              href: "https://ensono.com/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/Ensono/amido.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ensono Ltd`,
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
        },
        gtag: {
          trackingID: 'G-EKCQBC5CSJ',
          anonymizeIP: true, // Should IPs be anonymized? (optional)
        },
        googleAnalytics: {
          trackingID: 'G-EKCQBC5CSJ',
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }
    ]
  ]
};
