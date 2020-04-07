#!/usr/bin/sh
set -e
echo "Ensuring we have submodules..."
git submodule update --init

echo "Cleaning gh-pages module"
rm -rf website/gh-pages
git clone git@github.com:magic-script/magic-script-typings.git website/gh-pages --branch=gh-pages --depth=1
(cd website/gh-pages && git rm -rf .)

echo "Building latest version of documentation..."
typedoc website/v1.7/ --name 'MagicScript' --out 'website/gh-pages/latest'
mv website/gh-pages/latest/* website/gh-pages
rmdir website/gh-pages/latest
rsync -av website/static/ website/gh-pages/

echo "Building past versions of documentation..."
typedoc website/v1.6/ --name 'MagicScript - v1.6' --out 'website/gh-pages/v1.6'
(cd website/gh-pages && git add .)