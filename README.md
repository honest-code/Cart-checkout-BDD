[![HonestCode](https://pro.honestcode.io/api/blueprint/bp.HkNcISmx-/environment/r1g4cUB7gWSkWNcUSXlbHyMV/badge.svg)](https://pro.honestcode.io/#/blueprint/edit/bp.HkNcISmx-)

# Cart - Checkout


## Objetives

A simple NodeJS app with Acceptance tests written in Gherkin to be used with CucumberJS to learn BDD and ATDD and connect with the service pro.HonestCode.io

Repository at:
https://github.com/honest-code/Cart-checkout-BDD

There is just a CI pipeline Gitlab project at:
https://gitlab.intelygenz.com/HonestCode.io/Cart-checkout-BDD


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

After starting the server and from a different Terminal window run the Acceptance tests (for Unix or Windows):

```
npm run test-acceptance
npm run test-acceptance-win

```


With the server running a report can also been generated with Acceptance test results (for Unix or Windows):

```

npm run test-acceptance-file
npm run test-acceptance-win-file

```

Visit pro.HonestCode.io

```
Log in
Create a team
Create a Product
Create a Blueprint
```


After generating tests-result.json file, update your HonestCode's Blueprint WEBHOOK_API_KEY in package.json and send the results to pro.HonestCode.io with:
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
