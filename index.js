'use strict';

const got = require('got');

const fetch = require('./lib/fetch');
const getGotOptions = require('./lib/get-got-options');

const ADAPTER_ENDPOINT = 'https://jobs.github.com/positions.json';

module.exports = function gigsAdapterGitHubJobs(options) {
  options = Object.assign({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  return fetch(options)
    .catch(console.error);
}
