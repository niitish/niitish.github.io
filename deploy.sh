#!/bin/bash

# abort on errors 
set -e

# build
npm run build

# navigate to build directory
cd dist

# create robots.txt
echo "User-agent: *
Disallow: /" > robots.txt


git init
git checkout main
git add -A
git commit -m 'deploy'
git push -f git@github.com:niitish/niitish.github.io.git main:pages

cd -