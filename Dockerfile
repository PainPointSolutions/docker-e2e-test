FROM alekzonder/puppeteer:1.1.1

# copy the package.json and yarn.lock file
COPY package.json /app
COPY yarn.lock /app

# install the dependencies
RUN yarn install --prod --ignore-optional

# copy source code
COPY ./app /app

CMD [ "npm" , "test" ]
