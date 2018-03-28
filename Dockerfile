FROM alekzonder/puppeteer:1.1.1

COPY . /app

VOLUME /app/test

# install the dependencies
RUN yarn install --prod --ignore-optional

CMD [ "npm" , "test" ]