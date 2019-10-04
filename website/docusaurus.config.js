/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "MagicScript API",
  tagline: "MagicScript Typscript Definitions",
  url: "https://api.magicscript.org",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "magic-script", // Usually your GitHub org/user name.
  projectName: "magic-script-typings", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "MagicScript",
      logo: {
        alt: "MagicScript Logo",
        src: "img/magicscript.svg"
      },
      links: [
        { to: "docs/index", label: "API", position: "left" },
        {
          href: "https://www.magicscript.org/",
          label: "Home",
          position: "left"
        },
        {
          href: "https://www.npmjs.com/package/magic-script-typings",
          label: "NPM",
          position: "right"
        },
        {
          href: "https://github.com/magic-script/magic-script-typings",
          label: "GitHub",
          position: "right"
        },
        {
          href:
            "https://creator.magicleap.com/learn/guides/magicscript-overview",
          label: "Creator Portal",
          position: "right"
        }
      ]
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
