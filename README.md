<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Exponential

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Exponential distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-exponential
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var exponential = require( '@stdlib/stats-base-dists-exponential' );
```

#### exponential

Exponential distribution.

```javascript
var dist = exponential;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, lambda )`][@stdlib/stats/base/dists/exponential/cdf]</span><span class="delimiter">: </span><span class="description">exponential distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, lambda )`][@stdlib/stats/base/dists/exponential/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for an exponential distribution.</span>
-   <span class="signature">[`logpdf( x, lambda )`][@stdlib/stats/base/dists/exponential/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for an exponential distribution.</span>
-   <span class="signature">[`mgf( t, lambda )`][@stdlib/stats/base/dists/exponential/mgf]</span><span class="delimiter">: </span><span class="description">exponential distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, lambda )`][@stdlib/stats/base/dists/exponential/pdf]</span><span class="delimiter">: </span><span class="description">exponential distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, lambda )`][@stdlib/stats/base/dists/exponential/quantile]</span><span class="delimiter">: </span><span class="description">exponential distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( lambda )`][@stdlib/stats/base/dists/exponential/entropy]</span><span class="delimiter">: </span><span class="description">exponential distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( lambda )`][@stdlib/stats/base/dists/exponential/kurtosis]</span><span class="delimiter">: </span><span class="description">exponential distribution excess kurtosis.</span>
-   <span class="signature">[`mean( lambda )`][@stdlib/stats/base/dists/exponential/mean]</span><span class="delimiter">: </span><span class="description">exponential distribution expected value.</span>
-   <span class="signature">[`median( lambda )`][@stdlib/stats/base/dists/exponential/median]</span><span class="delimiter">: </span><span class="description">exponential distribution median.</span>
-   <span class="signature">[`mode( lambda )`][@stdlib/stats/base/dists/exponential/mode]</span><span class="delimiter">: </span><span class="description">exponential distribution mode.</span>
-   <span class="signature">[`skewness( lambda )`][@stdlib/stats/base/dists/exponential/skewness]</span><span class="delimiter">: </span><span class="description">exponential distribution skewness.</span>
-   <span class="signature">[`stdev( lambda )`][@stdlib/stats/base/dists/exponential/stdev]</span><span class="delimiter">: </span><span class="description">exponential distribution standard deviation.</span>
-   <span class="signature">[`variance( lambda )`][@stdlib/stats/base/dists/exponential/variance]</span><span class="delimiter">: </span><span class="description">exponential distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating an [exponential][exponential-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Exponential( [lambda] )`][@stdlib/stats/base/dists/exponential/ctor]</span><span class="delimiter">: </span><span class="description">exponential distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Exponential = require( '@stdlib/stats-base-dists-exponential' ).Exponential;

var dist = new Exponential( 2.0 );

var y = dist.logpdf( 0.8 );
// returns ~-0.907
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var exponential = require( '@stdlib/stats-base-dists-exponential' );

console.log( objectKeys( exponential ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-exponential/main/LICENSE

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/exponential/ctor]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor

[@stdlib/stats/base/dists/exponential/entropy]: https://github.com/stdlib-js/stats-base-dists-exponential-entropy

[@stdlib/stats/base/dists/exponential/kurtosis]: https://github.com/stdlib-js/stats-base-dists-exponential-kurtosis

[@stdlib/stats/base/dists/exponential/mean]: https://github.com/stdlib-js/stats-base-dists-exponential-mean

[@stdlib/stats/base/dists/exponential/median]: https://github.com/stdlib-js/stats-base-dists-exponential-median

[@stdlib/stats/base/dists/exponential/mode]: https://github.com/stdlib-js/stats-base-dists-exponential-mode

[@stdlib/stats/base/dists/exponential/skewness]: https://github.com/stdlib-js/stats-base-dists-exponential-skewness

[@stdlib/stats/base/dists/exponential/stdev]: https://github.com/stdlib-js/stats-base-dists-exponential-stdev

[@stdlib/stats/base/dists/exponential/variance]: https://github.com/stdlib-js/stats-base-dists-exponential-variance

[@stdlib/stats/base/dists/exponential/cdf]: https://github.com/stdlib-js/stats-base-dists-exponential-cdf

[@stdlib/stats/base/dists/exponential/logcdf]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf

[@stdlib/stats/base/dists/exponential/logpdf]: https://github.com/stdlib-js/stats-base-dists-exponential-logpdf

[@stdlib/stats/base/dists/exponential/mgf]: https://github.com/stdlib-js/stats-base-dists-exponential-mgf

[@stdlib/stats/base/dists/exponential/pdf]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf

[@stdlib/stats/base/dists/exponential/quantile]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
