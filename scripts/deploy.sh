#!/bin/sh
set -e

cd ..
echo "Deploying application ..."


# Update codebase
git fetch origin main
echo "failed 1"
git reset --hard origin/main
echo "failed 2"

echo "Installing dependencies 🛠"
yarn install

echo "Building application ⚙"
yarn build
            
echo "Restart pm2 service 🔥"
pm2 restart deploy.json

echo "Application deployed!"