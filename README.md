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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Exponential

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Exponential distribution.



<section class="usage">

## Usage

To use in Observable,

```javascript
exponential = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential@v0.3.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var exponential = require( 'path/to/vendor/umd/stats-base-dists-exponential/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential@v0.3.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.exponential;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-exponential@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dcusum@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential@v0.3.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Simulate interarrival times of customers entering a store:
var lambda = 0.5; // Average rate (customers per minute)
var numCustomers = 10;

// Generate interarrival times using the exponential distribution:
var interarrivalTimes = randomExponential( numCustomers, lambda, {
    'dtype': 'float64'
});

console.log( 'Simulated interarrival times for ' + numCustomers + ' customers: ' );
console.log( interarrivalTimes );

// Calculate cumulative arrival times by computing the cumulative sum of interarrival times:
var arrivalTimes = new Float64Array( interarrivalTimes.length );
dcusum( interarrivalTimes.length, 0.0, interarrivalTimes, 1, arrivalTimes, 1 );

console.log( '\nCustomer arrival times: ' );
console.log( arrivalTimes );

// Probability that a customer arrives within two minutes:
var x = 2.0;
var prob = exponential.cdf( x, lambda );
console.log( '\nProbability that a customer arrives within ' + x + ' minutes: ' + prob.toFixed(4) );

// Expected time until the next customer arrives:
var mean = exponential.mean( lambda );
console.log( 'Expected interarrival time: ' + mean + ' minutes' );

var dist = new exponential.Exponential( lambda );

var median = dist.median;
console.log( 'Median interarrival time: ' + median + ' minutes' );

// Evaluate the PDF at x = 1.0:
var out = dist.pdf( 1.0 );
console.log( 'PDF at x = 1: ' + out.toFixed(4) );

// Evaluate the MGF at t = 0.1:
out = dist.mgf( 0.1 );
console.log( 'MGF at t = 0.1: ' + out.toFixed(4) );

})();
</script>
</body>
</html>
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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-exponential/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-exponential/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-exponential/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-exponential/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-exponential/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-exponential/main/LICENSE

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/exponential/ctor]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/tree/umd

[@stdlib/stats/base/dists/exponential/entropy]: https://github.com/stdlib-js/stats-base-dists-exponential-entropy/tree/umd

[@stdlib/stats/base/dists/exponential/kurtosis]: https://github.com/stdlib-js/stats-base-dists-exponential-kurtosis/tree/umd

[@stdlib/stats/base/dists/exponential/mean]: https://github.com/stdlib-js/stats-base-dists-exponential-mean/tree/umd

[@stdlib/stats/base/dists/exponential/median]: https://github.com/stdlib-js/stats-base-dists-exponential-median/tree/umd

[@stdlib/stats/base/dists/exponential/mode]: https://github.com/stdlib-js/stats-base-dists-exponential-mode/tree/umd

[@stdlib/stats/base/dists/exponential/skewness]: https://github.com/stdlib-js/stats-base-dists-exponential-skewness/tree/umd

[@stdlib/stats/base/dists/exponential/stdev]: https://github.com/stdlib-js/stats-base-dists-exponential-stdev/tree/umd

[@stdlib/stats/base/dists/exponential/variance]: https://github.com/stdlib-js/stats-base-dists-exponential-variance/tree/umd

[@stdlib/stats/base/dists/exponential/cdf]: https://github.com/stdlib-js/stats-base-dists-exponential-cdf/tree/umd

[@stdlib/stats/base/dists/exponential/logcdf]: https://github.com/stdlib-js/stats-base-dists-exponential-logcdf/tree/umd

[@stdlib/stats/base/dists/exponential/logpdf]: https://github.com/stdlib-js/stats-base-dists-exponential-logpdf/tree/umd

[@stdlib/stats/base/dists/exponential/mgf]: https://github.com/stdlib-js/stats-base-dists-exponential-mgf/tree/umd

[@stdlib/stats/base/dists/exponential/pdf]: https://github.com/stdlib-js/stats-base-dists-exponential-pdf/tree/umd

[@stdlib/stats/base/dists/exponential/quantile]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
