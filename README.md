# Web movie search engine [![Build Status](https://travis-ci.org/dawid-drelichowski/movie-info.svg?branch=master)](https://travis-ci.org/dawid-drelichowski/movie-info) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[movie-info-pwa.firebaseapp.com](https://movie-info-pwa.firebaseapp.com/) - simple [Movie DB API](https://www.themoviedb.org/documentation/api/) and [React](https://facebook.github.io/react/) based movie search engine. 

## Requirements

* [Node.js](https://nodejs.org/) version 6.0.0 or higher.
* [Movie DB API](https://www.themoviedb.org/documentation/api/) key. How to apply for an API key? Answer can be found [here](https://www.themoviedb.org/faq/api) in "How do I apply for an API key?" section
* Optionally [Yarn](https://yarnpkg.com/lang/en/) as alternative to [NPM](https://www.npmjs.com/) package manager.

## Installation

Copy `config.json.dist` to `config.json` file.  
Put the [Movie DB API](https://www.themoviedb.org/documentation/api/) key under `movieDb.apiKey` property in `config.json` file.  
Depending on preferred package manager execute `yarn install` or `npm install` command.  
There is no build assets version attached with this repository. To build them run `npm run build` or `yarn run build`.  

## Usage

Run **public/index.html** in favorite browser. Consider **only last two versions of major browsers** are supported.

## Tests

Based on [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme).

Command: `npm test` or `yarn test`

## Development

To rebuild assets every time they change execute `npm run build:dev` or `yarn run build:dev`.  
There is a better way: `npm run watch` or `yarn run watch` command will continue running in terminal and watch all relevant files for changes.  
[Webpack](https://webpack.js.org/) will then automatically recompile assets when it detects a change.  
It's possible to use [Webpack DevServer](https://webpack.js.org/configuration/dev-server/). To start it use `npm run start` or `yarn run start`  
To specify a port number to listen for requests on, modify [webpack.config.babel.js](webpack.config.babel.js)  
Default server port is *3000*.  

Minified (so called "production") version of assets can be build with `npm run build` or `yarn run build`.

## NPM scripts

Available [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/lang/en/) scripts:

* `npm run build` or `yarn build` combine related scripts/styles and minimizes them with [Webpack](https://webpack.js.org/).
* `npm run build:dev` or `yarn build:dev` combine related scripts/styles with [Webpack](https://webpack.js.org/).
* `npm start` or `yarn start` runs [Webpack DevServer](https://webpack.js.org/configuration/dev-server/).
* `npm run lint` or `yarn lint` runs [ESLint](http://eslint.org/) source code check.
* `npm test` or `yarn test` runs tests.
* `npm run watch` or `yarn watch` runs combination of related scripts/styles in [Webpack's watch mode](https://webpack.js.org/api/cli/#watch-options).