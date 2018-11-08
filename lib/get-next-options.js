'use strict';

module.exports = options => {
  const nextOptions = {...options};

  nextOptions.gotOptions.query.page += 1;

  return nextOptions;
};
