'use strict';

const got = require('got');
const flattenDeep = require('lodash/flattenDeep');

const getResponseBody = require('./get-response-body');
const getGigs = require('./get-gigs');
const getNextOptions = require('./get-next-options');

const results = [];

module.exports = async function fetch(options) {
  const response = await got.get(options.endpoint, options.gotOptions);
  const json = getResponseBody(response);

  if (json.length > 0) {
    results.push(getGigs(json));
    return fetch(getNextOptions(options));
  }

  return flattenDeep(results);
};
