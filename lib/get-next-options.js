'use strict';

module.exports = function getNextOptions(options) {
  const nextOptions = Object.assign({}, options);

  nextOptions.gotOptions.query.page += 1;

  return nextOptions;
};
