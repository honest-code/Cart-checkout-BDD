# Cart - Checkout

## Objetives

A simple app with Acceptance tests to learn BDD and ATDD and connect with the service pro.HonestCode.io


## System requisites

Node is required. It can be downloaded at: https://nodejs.org/en

* NodeJS: ~4.4.5
* NPM: ~2.15.5

## Use

First we need to install libraries

```
npm install

```

To start the server:

```

npm start

```

After startin the server and from a different Terminal window run the Acceptance tests (for Unix or Windows):

```

npm run test-acceptance
npm run test-acceptance-win

```


Generate the Acceptance test results report (for Unix or Windows):

```

npm run test-acceptance-file
npm run test-acceptance-win-file

```

After generating tests-result.json file, update your Blueprint WEBHOOK_API_KEY in package.json and send the results to pro.HonestCode.io:

```
npm run honestcode

```


To run the Unit tests:

```
npm run test

```

To check code quality:

```
npm run jshint

```




