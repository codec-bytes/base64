[@aureooms/js-codec-base64](https://make-github-pseudonymous-again.github.io/js-codec-base64)
==

Base64 encoder/decoder for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-codec-base64/index.html).
Parent is [@aureooms/js-codec](https://github.com/make-github-pseudonymous-again/js-codec).

```js
> import ascii from '@aureooms/js-codec-ascii' ;
> import base64 from '@aureooms/js-codec-base64' ;
> let bytes = ascii.encode('any carnal pleasure') ;
> base64.decode( bytes ) ;
'YW55IGNhcm5hbCBwbGVhc3VyZQ=='
> base64.decode( bytes , { variant : 'RFC7515' } ) ;
'YW55IGNhcm5hbCBwbGVhc3VyZQ'
> base64.decode( bytes , { variant : 'Y64' } ) ;
'YW55IGNhcm5hbCBwbGVhc3VyZQ--'
> base64.decode( bytes , { alphabet : 'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/A' , padding : '.' } ) ;
'ZX66JHOidn6icDCxcHWid4WzaR..'
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-codec-base64.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-codec-base64/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-codec-base64.svg)](https://www.npmjs.org/package/@aureooms/js-codec-base64)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-codec-base64/main.svg)](https://travis-ci.com/make-github-pseudonymous-again/js-codec-base64/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-codec-base64.svg)](https://david-dm.org/make-github-pseudonymous-again/js-codec-base64)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-codec-base64.svg)](https://david-dm.org/make-github-pseudonymous-again/js-codec-base64?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-codec-base64.svg)](https://github.com/make-github-pseudonymous-again/js-codec-base64/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-codec-base64.svg)](https://www.npmjs.org/package/@aureooms/js-codec-base64)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-codec-base64.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-codec-base64/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-codec-base64.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-codec-base64/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-codec-base64/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-codec-base64)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-codec-base64.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-codec-base64/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-codec-base64/badge.svg)](https://make-github-pseudonymous-again.github.io/js-codec-base64/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-codec-base64)](https://bundlephobia.com/result?p=@aureooms/js-codec-base64)
