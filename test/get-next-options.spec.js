'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';

import getNextOptions from '../lib/get-next-options';

test('it should return a plain object', t => {
  t.true(isPlainObj(getNextOptions({gotOptions: {query: {page: 0}}})));
});

test('it should return the options with the next page', t => {
  let options;

  options = getNextOptions({gotOptions: {query: {page: 0}}});
  t.deepEqual(1, options.gotOptions.query.page);

  options = getNextOptions({gotOptions: {query: {page: 1}}});
  t.deepEqual(2, options.gotOptions.query.page);

  options = getNextOptions({gotOptions: {query: {page: 999}}});
  t.deepEqual(1000, options.gotOptions.query.page);
});
