FROM cypress/base
RUN mkdir /app

WORKDIR /app

COPY . C:/Users/krzysztof.tatara/source/repos/soneta/bin

RUN npx cypress install # Install Cypress binary into image

RUN $(npm bin)/cypress verify

