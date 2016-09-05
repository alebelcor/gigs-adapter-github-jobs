# gigs-adapter-github-jobs

> A [gigs](https://github.com/alebelcor/gigs) adapter for [GitHub's job board](https://jobs.github.com)

[![Build Status](https://img.shields.io/travis/alebelcor/gigs-adapter-github-jobs/master.svg)](https://travis-ci.org/alebelcor/gigs-adapter-github-jobs)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/gigs-adapter-github-jobs.svg)](https://coveralls.io/github/alebelcor/gigs-adapter-github-jobs)

## Install

Ensure you have [Node.js](https://nodejs.org) version 4+ installed. Then run the following:

```bash
npm install --save gigs
npm install --save gigs-adapter-github-jobs
```

## Usage

```js
const gigs = require('gigs');

const adapter = require('gigs-adapter-github-jobs');

gigs([adapter])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## Related

* [gigs](https://github.com/alebelcor/gigs) - A jobs/careers/openings/positions aggregator

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.
