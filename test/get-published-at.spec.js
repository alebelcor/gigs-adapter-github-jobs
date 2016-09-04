'use strict';

import test from 'ava';
import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-09-02', getPublishedAt({created_at: 'Fri Sep 02 02:23:52 UTC 2016'}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
