// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const remarkImages = require('remark-images');
const {themes} = require('prism-react-renderer');

require('dotenv').config();
/** @type {import('@docusaurus/types').Config} */

// Content Security Policy directives for GitHub Pages (meta tag based)
// Note: Report-Only mode and frame-ancestors are not supported via meta tags, only via HTTP headers
// This policy is enforced directly - test thoroughly before deployment
const cspDirectives = [
  "default-src 'self'",
  // Scripts: 'unsafe-inline' required for Docusaurus theme init, gtag, and runtime scripts
  "script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com",
  // Styles: 'unsafe-inline' required for react-select Emotion CSS-in-JS
  "style-src 'self' 'unsafe-inline'",
  // Images: Google Analytics pixel tracking
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
  // Fonts: Self-hosted only (Inter, Plus Jakarta Sans)
  "font-src 'self'",
  // API connections: Algolia search, Google Analytics (includes regional endpoints)
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.algolia.net https://*.algolianet.com",
  // Embedded frames: YouTube for ReactPlayer video embeds
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
  // Form submissions
  "form-action 'self'",
  // Base URI restriction
  "base-uri 'self'",
  // Object/embed elements (Flash, etc.) - not needed
  "object-src 'none'",
  // Upgrade insecure requests
  "upgrade-insecure-requests"
].join('; ');

const config = {
  title: "Ensono Stacks",
  tagline:
    "Helping projects gain momentum on digital transformation, with opinionated and modular boilerplate solutions",
  url: "https://stacks.ensono.com",
  baseUrl: "/",
  baseUrlIssueBanner: false, // Disabled to reduce inline scripts for CSP
  trailingSlash: false,
  onBrokenLinks: "warn",
  favicon: "img/icons/favicon.ico",
  // Content Security Policy meta tag for GitHub Pages
  headTags: [
    {
      tagName: "meta",
      attributes: {
        "http-equiv": "Content-Security-Policy",
        content: cspDirectives,
      },
    },
  ],
  organizationName: "Ensono", // Usually your GitHub org/user name.
  projectName: "amido.github.io", // Usually your repo name.
  customFields: {
    description:
      "Ensono Stacks is a catalogue of workload templates that\n" +
      "instantly scaffold and deploy boilerplate software projects. Slash the time it takes to get productive on your software project.",
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
    },
  },
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.vsDark,
      additionalLanguages: [
        "csharp",
        "docker",
        "powershell",
        "java",
        "bash",
        "json",
      ],
    },
    navbar: {
      title: "",
      logo: {
        alt: "Ensono Stacks Logo",
        src: "img/icons/ensono-logo.svg",
        href: "/",
        width: 150,
        height: 36,
        className: "custom-navbar-logo-class",
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
          position: "right",
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
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkImages.default || remarkImages],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-EKCQBC5CSJ",
          anonymizeIP: true, // Should IPs be anonymized? (optional)
        },
        googleAnalytics: {
          trackingID: "G-EKCQBC5CSJ",
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};

module.exports = config;
