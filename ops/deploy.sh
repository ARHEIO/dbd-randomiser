#!/bin/sh

rm -rf node_modules/.cache

yarn build
yarn export

touch ./out/.nojekyll

git add ./out/
# git commit -m "chore: deploy to gh-pages"
# git push origin `git subtree split --prefix out master`:gh-pages --force