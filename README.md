# AWS DynamoDB connector for deepstream.io

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> AWS DynamoDB connector for deepstream.io

## Install

```sh
npm i -S deepstreamio-storage-aws-dynamodb
```

## Usage

First you must set up your AWS credentials via [one of these methods][aws-auth-docs]. Then:

```js
import DynamoConnector from 'deepstreamio-storage-aws-dynamodb';

server.set('storage', new DynamoConnector({
	region: 'us-east-1',
	table: 'deepstream'
}));
```

## Developing

This project uses the [RISE yeoman generator][rise].  For development workflow,
see the [workflow guide][rise-workflow].  Cheatsheet:

* Add code to `src/index.js` and tests to `test/index.js`.
* Lint, build and test a project with `npm run build`.
* Build and watch changes in `src/` with `npm run watch`
* Run only tests with `npm run test`.
* Check coverage with `npm run coverage`.
* Generate a TOC for the `CHANGELOG` with `npm run toc`
* Deploy to a remote origin with `npm run deploy`.
* Bump version and publish a package with `npm run major` or `minor/patch`


[rise]: https://github.com/bucaran/generator-rise
[rise-workflow]: https://github.com/bucaran/generator-rise#beginner-workflow

[aws-auth-docs]: https://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html

[npm-url]: https://npmjs.org/package/deepstreamio-storage-aws-dynamodb
[npm-image]: https://img.shields.io/npm/v/deepstreamio-storage-aws-dynamodb.svg?style=flat-square

[travis-url]: https://travis-ci.org/inxilpro/deepstreamio-storage-aws-dynamodb
[travis-image]: https://img.shields.io/travis/inxilpro/deepstreamio-storage-aws-dynamodb.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/inxilpro/deepstreamio-storage-aws-dynamodb
[coveralls-image]: https://img.shields.io/coveralls/inxilpro/deepstreamio-storage-aws-dynamodb.svg?style=flat-square

[depstat-url]: https://david-dm.org/inxilpro/deepstreamio-storage-aws-dynamodb
[depstat-image]: https://david-dm.org/inxilpro/deepstreamio-storage-aws-dynamodb.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/deepstreamio-storage-aws-dynamodb.svg?style=flat-square
