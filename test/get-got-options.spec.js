'use strict';

import test from 'ava';
import getGotOptions from '../lib/get-got-options';

test('it should return an object', t => {
  t.deepEqual('[object Object]', Object.prototype.toString.call(getGotOptions()));
});
