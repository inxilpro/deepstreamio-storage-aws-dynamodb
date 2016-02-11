'use strict';

import { EventEmitter } from 'events';
import AWS from 'aws-sdk';
import pkg from '../package.json';

/**
 *
 */
export default class DynamoDbConnector extends EventEmitter
{
	/**
	 * Constructor
	 *
	 * @param {Object} options - "table" required, "db" optional, "region" optional
	 *
	 * @constructor
	 */
	constructor(options) {
		super();

		// Basic properties
		this.isReady = true;
		this.name = pkg.name;
		this.version = pkg.version;

		// Set region
		if (options.region) {
			AWS.config.update({
				region: options.region
			});
		}

		// Set table
		if (!options.table) {
			throw new Error('"table" option is required');
		}
		this.table = options.table;

		// Set DynamoDb instance
		if (!options.db) {
			options.db = new AWS.DynamoDB.DocumentClient();
		}
		this.db = options.db;

		// Set ready
		process.nextTick(() => {
			this.emit('ready');
		});
	}

	/**
	 * Writes a value to the cache.
	 *
	 * @param {String}   id
	 * @param {Object}   data
	 * @param {Function} callback Should be called with null for successful set operations or with an error message string
	 *
	 * @private
	 * @returns {void}
	 */
	set(id, data, cb) {
		const params = {
			TableName: this.table,
			Item: {
				id,
				data
			}
		};
		// console.log('Set', params);
		this.db.put(params, err => {
			cb(err ? err.message : null);
		});
	}

	/**
	 * Retrieves a value from the cache
	 *
	 * @param {String}   id
	 * @param {Function} callback Will be called with null and the stored object
	 *                            for successful operations or with an error message string
	 *
	 * @private
	 * @returns {void}
	 */
	get(id, cb) {
		const params = {
			TableName: this.table,
			Key: {
				id
			}
		};
		// console.log('Get', params);
		this.db.get(params, (err, res) => {
			if (err) {
				return cb(err.message);
			}
			if (!res || !res.Item) {
				return cb(null, null);
			}
			return cb(null, res.Item.data)
		});
	}

	/**
	 * Deletes an entry from the cache.
	 *
	 * @param   {String}   id
	 * @param   {Function} callback Will be called with null for successful deletions or with
	 *                     an error message string
	 *
	 * @private
	 * @returns {void}
	 */
	delete(id, cb) {
		const params = {
			TableName: this.table,
			Key: {
				id: {
					S: id
				}
			}
		};
		this.db.delete(params, err => {
			cb(err ? err.message : null);
		});
	}
}
