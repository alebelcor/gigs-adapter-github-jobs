'use strict';

const gigs = require('gigs');

const getLocation = require('./get-location');
const isFullTime = require('./is-full-time');
const isRemote = require('./is-remote');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'github-jobs';
const ADAPTER_SOURCE_URL = 'https://jobs.github.com';

module.exports = function getGigs(json) {
  return json.map((job) => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: job.title,
      description: job.description,
      url: job.url,
      company_name: job.company,
      location: getLocation(job),
      full_time: isFullTime(job),
      remote: isRemote(job),
      published_at: getPublishedAt(job)
    });
  });
};