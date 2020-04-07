# MagicScript Typings

[![npm version](https://badge.fury.io/js/magic-script-typings.svg)](https://badge.fury.io/js/magic-script-typings) [![License](http://img.shields.io/:license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

## MagicScript Typscript Definitions

These `.d.ts` files are meant to be used in your MagicScript application to enable code completion in VS Code.

## Updating Documentation

1. Get documentation source code and install dependencies

```bash
git clone https://github.com/magic-script/magic-script-typings.git --recursive
cd magic-script-typings
npm install
```

2. Make your changes and test them locally

```bash
npm build
npx http-serve website/gh-pages -p 5000
```

3. Publish new website to gh-pages

```bash
cd website/gh-pages
git commit
git push
```

## Adding a new version

- Create a new branch based on the latest version branch with the changed typescript headers.
- Add a new submodule to website.
- Update `.tsd-filter-version` in `website/theme/partials/header.hbs` to add the new version.
- Update `website/build.sh` with the new version.


## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details
