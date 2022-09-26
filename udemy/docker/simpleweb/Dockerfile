from node:alpine

WORKDIR user/app
copy ./package.json ./
run npm install
copy ./ ./

cmd ["npm", "start"]