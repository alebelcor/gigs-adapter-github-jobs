'use strict';

const gigs = require('gigs');

const getLocation = require('./get-location');
const getIsFullTime = require('./get-is-full-time');
const getIsRemote = require('./get-is-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'github-jobs';
const ADAPTER_SOURCE_URL = 'https://jobs.github.com';

module.exports = json => {
  return json.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
      title: job.title,
      description: job.description,
      url: job.url,
      company_name: job.company, // eslint-disable-line camelcase
      location: getLocation(job),
      full_time: getIsFullTime(job), // eslint-disable-line camelcase
      remote: getIsRemote(job),
      published_at: getPublishedAt(job) // eslint-disable-line camelcase
    });
  });
};
