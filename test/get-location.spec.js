'use strict';

import test from 'ava';
import getlocation from '../lib/get-location';

test('it should return null when remote', t => {
  t.deepEqual(null, getlocation({location: 'San Francisco or Remote'}));
  t.deepEqual(null, getlocation({location: 'Remote'}));
  t.deepEqual(null, getlocation({location: 'North America (Remote)'}));
  t.deepEqual(null, getlocation({location: 'Remote - USA'}));
});

test('it should return null when no location available', t => {
  t.deepEqual(null, getlocation({}));
});


test('it should return the location', t => {
  t.deepEqual('foo', getlocation({location: 'foo'}));
});
