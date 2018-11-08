'use strict';

import test from 'ava';

import getIsRemote from '../lib/get-is-remote';

test('it should return true', t => {
  t.true(getIsRemote({location: 'San Francisco or Remote'}));
  t.true(getIsRemote({location: 'Remote'}));
  t.true(getIsRemote({location: 'North America (Remote)'}));
  t.true(getIsRemote({location: 'Remote - USA'}));
});

test('it should return false', t => {
  t.false(getIsRemote({location: 'Boston'}));
  t.false(getIsRemote({}));
});
