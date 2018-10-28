'use strict';

const getIsRemote = require('./get-is-remote');

module.exports = function getLocation(json) {
  if (getIsRemote(json)) {
    return null;
  }

  return json.location ? json.location.trim() : null;
};
