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
