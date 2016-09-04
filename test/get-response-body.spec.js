'use strict';

import test from 'ava';
import getResponseBody from '../lib/get-response-body';

test('it should return the response body', t => {
  t.deepEqual({foo: 'bar'}, getResponseBody({body: {foo: 'bar'}}));
});
