'use strict';

module.exports = function getRemote(json) {
  return typeof json.location === 'string' &&
    (json.location.toLowerCase() === 'remote' || /remote/i.test(json.location));
};
