'use strict';

import test from 'ava';
import isRemote from '../lib/is-remote';

test('it should return true', t => {
  t.true(isRemote({location: 'San Francisco or Remote'}));
  t.true(isRemote({location: 'Remote'}));
  t.true(isRemote({location: 'North America (Remote)'}));
  t.true(isRemote({location: 'Remote - USA'}));
});

test('it should return false', t => {
  t.false(isRemote({location: 'Boston'}));
  t.false(isRemote({}));
});
