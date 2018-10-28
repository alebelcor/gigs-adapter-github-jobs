'use strict';

const moment = require('moment');

module.exports = function getPublishedAt(json) {
  let publishedAt = null;

  if (json.created_at) {
    publishedAt = moment.utc(json.created_at, 'ddd MMM DD HH:mm:ss UTC YYYY', true).format('YYYY-MM-DD');
  }

  return publishedAt;
};
