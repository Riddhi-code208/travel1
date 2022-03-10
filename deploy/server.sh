# Pull code
cd /desktop/travel1/
git checkout riddhi
git pull origin riddhi

# Build and deploy
yarn install
yarn run build
pm2 restart server