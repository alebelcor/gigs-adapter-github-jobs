'use strict';

import test from 'ava';
import proxyquire from 'proxyquire';

test('it should return a promise', t => {
  const fetch = proxyquire('../lib/fetch', {
    'got': {
      get: () => {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve({
              body: []
            });
          }, 250);
        });
      }
    }
  });

  t.true(typeof fetch({}).then === 'function');
});

test('it should accumulate/flatten the results', async t => {
  let count = 0;
  const fetch = proxyquire('../lib/fetch', {
    'got': {
      get: () => {
        const body = [{title: 'foo'}, {title: 'bar'}];

        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            if (count < 2) {
              resolve({
                body: body
              });
            } else {
              resolve({
                body: []
              })
            }
            count += 1;
          }, 250);
        });
      }
    }
  });

  const results = await fetch({gotOptions: {body: {page: 0}}});

  t.true(Array.isArray(results));
  t.deepEqual(4, results.length);
});
