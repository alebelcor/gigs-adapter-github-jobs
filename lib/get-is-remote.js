'use strict';

module.exports = function getIsRemote(json) {
  let location = null;

  if (typeof json.location === 'string') {
    location = json.location.toLowerCase().trim();
  }

  return location === 'remote' || /remote/i.test(location);
};
