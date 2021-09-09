#!/bin/sh

rm -rf node_modules/.cache

yarn build
yarn export

touch ./out/.nojekyll
