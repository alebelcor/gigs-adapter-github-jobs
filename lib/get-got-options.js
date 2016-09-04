'use strict';

const pkg = require('../package.json');

module.exports = function getGotOptions() {
  return {
    json: true,
    headers: {
      'user-agent': pkg.repository.url
    },
    body: {
      page: 0
    }
  };
};
