'use strict';

const isRemote = require('./is-remote');

module.exports = function getLocation(json) {
  let location = null;

  if (isRemote(json)) {
    return location;
  }

  if (json.location) {
    location = json.location;
  }

  return location;
};
