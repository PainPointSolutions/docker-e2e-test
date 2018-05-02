FROM alekzonder/puppeteer:1.3.0

VOLUME /app/config
VOLUME /app/test

COPY . /app

# install the dependencies
RUN yarn install --prod --ignore-optional

CMD [ "npm" , "test" ]