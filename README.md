:fax:
[@codec-bytes/base64](https://codec-bytes.github.io/base64)
==

Base64 encoder/decoder for JavaScript.
See [docs](https://codec-bytes.github.io/base64/index.html).
Parent is [@codec-bytes/about](https://github.com/codec-bytes/about).

```js
import * as ascii from '@codec-bytes/ascii';
import * as base64 from '@codec-bytes/base64';
let bytes = ascii.encode('any carnal pleasure');
base64.decode(bytes); // 'YW55IGNhcm5hbCBwbGVhc3VyZQ=='
base64.decode(bytes, {variant: 'RFC7515'}); // 'YW55IGNhcm5hbCBwbGVhc3VyZQ'
base64.decode(bytes, {variant: 'Y64'}); // 'YW55IGNhcm5hbCBwbGVhc3VyZQ--'
base64.decode(bytes, {alphabet: 'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/A', padding: '.'}); // 'ZX66JHOidn6icDCxcHWid4WzaR..'
```

[![License](https://img.shields.io/github/license/codec-bytes/base64.svg)](https://raw.githubusercontent.com/codec-bytes/base64/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@codec-bytes/base64.svg)](https://www.npmjs.org/package/@codec-bytes/base64)
[![Tests](https://img.shields.io/github/actions/workflow/status/codec-bytes/base64/ci.yml?branch=main&event=push&label=tests)](https://github.com/codec-bytes/base64/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/codec-bytes/base64.svg)](https://github.com/codec-bytes/base64/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/codec-bytes/base64.svg)](https://github.com/codec-bytes/base64/issues)
[![Downloads](https://img.shields.io/npm/dm/@codec-bytes/base64.svg)](https://www.npmjs.org/package/@codec-bytes/base64)

[![Code issues](https://img.shields.io/codeclimate/issues/codec-bytes/base64.svg)](https://codeclimate.com/github/codec-bytes/base64/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/codec-bytes/base64.svg)](https://codeclimate.com/github/codec-bytes/base64/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/codec-bytes/base64/main.svg)](https://codecov.io/gh/codec-bytes/base64)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/codec-bytes/base64.svg)](https://codeclimate.com/github/codec-bytes/base64/trends/technical_debt)
[![Documentation](https://codec-bytes.github.io/base64/badge.svg)](https://codec-bytes.github.io/base64/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@codec-bytes/base64)](https://bundlephobia.com/result?p=@codec-bytes/base64)
