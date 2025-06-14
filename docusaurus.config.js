// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const remarkImages = require('remark-images');
const {themes} = require('prism-react-renderer');

require('dotenv').config();
/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Ensono Stacks",
  tagline:
    "Helping projects gain momentum on digital transformation, with opinionated and modular boilerplate solutions",
  url: "https://stacks.ensono.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "warn",
  favicon: "img/icons/favicon.ico",
  organizationName: "Ensono", // Usually your GitHub org/user name.
  projectName: "amido.github.io", // Usually your repo name.
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
      "REST",
      "Rest Assured",
      "Jest",
      "Gatling",
      "Google Lighthouse",
      "Applitools",
      "OWASP",
    ],
    docSearch: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    }
  },
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.vsDark,
      additionalLanguages: ['csharp', 'docker', 'powershell', 'java', 'bash', 'json'],
    },
    navbar: {
      title: "",
      logo: {
        alt: "Ensono Stacks Logo",
        src: "img/icons/ensono-logo.svg",
        href: "/",
        width: 150,
        height: 36,
        className: "custom-navbar-logo-class"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
        },
        {
          href: "https://github.com/Ensono/amido.github.io",
          label: "GitHub",
        },
        {
          href: "https://www.ensono.com/company/lets-connect/",
          label: "Connect",
          position: 'right'
        },
      ],
    },
    footer: {      
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            }
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Ensono",
              href: "https://ensono.com/",
            },
            {
              label: "Get in touch",
              href: "https://www.ensono.com/company/lets-connect/",
            },
            {
              label: "Careers at Ensono",
              href: "https://www.ensono.com/company/careers/",
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
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [remarkImages.default || remarkImages],
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

module.exports = config;
