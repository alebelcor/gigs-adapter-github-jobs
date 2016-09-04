'use strict';

const got = require('got');
const flattenDeep = require('lodash.flattendeep');

const getResponseBody = require('./get-response-body');
const getGigs = require('./get-gigs');
const getNextOptions = require('./get-next-options');

const results = [];

module.exports = function fetch(options) {
  return got.get(options.endpoint, options.gotOptions)
    .then(getResponseBody)
    .then(function (json) {
      if (json.length > 0) {
        results.push(getGigs(json));
        return fetch(getNextOptions(options));
      }

      return flattenDeep(results);
    });
};
