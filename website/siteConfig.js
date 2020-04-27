/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: "next",
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        // image: '/img/undraw_open_source.svg',
        infoLink: "https://www.next.co.uk",
        pinned: true,
    },
]

const siteConfig = {
    /*
    ⚠️ IMPORTANT: Ensure we are not indexing with Search Engines.
    */
    noIndex: true,

    title: "Amido Stacks", // Title for your website.
    tagline: "Amido Stacks",
    url: "https://amido.github.io", // Org github.io custom URL
    baseUrl: "/stacks/", // Base URL for project repo
    projectBaseUrl: "/stacks",
    editUrl: "/edit/master/docs/", //Append to the repo URL for editing docs

    // Used for publishing and more
    projectName: "stacks",
    organizationName: "amido", // Same as Github org

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc: "index", label: "Docs"},
        {doc: "monorepo", label: "About Stacks"},
        {href: "https://github.com/amido/stacks", label: "GitHub"},
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: "img/thumbnail_stacks.png",
    footerIcon: "img/thumbnail_stacks.png",
    favicon: "img/favicon.ico",

    /* Colors for website */
    colors: {
        primaryColor: "#000000",
        secondaryColor: "#FECB07",
    },

    /* Custom fonts for website */
    fonts: {
        myFont: ["Work sans"],
        myOtherFont: ["Arial"],
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Amido Ltd`,

    // Add custom scripts here that would be placed in <script> tags.
    //   scripts: ['https://buttons.github.io/buttons.js'],

    onPageNav: "separate",
    cleanUrl: true,
    ogImage: "img/logo.png",

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    enableUpdateBy: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: "https://github.com/amido/stacks",
    baseRepoUrl: "https://github.com/amido/stacks",
}

module.exports = siteConfig
