var gulp = require('gulp');
var psi = require('psi');
var ngrok = require('ngrok');

/**
 * PSI: Testing/Benchmarking
 *
 * Use GhostLabs to get a localhost url, use its port below.
 *
 * If you want to test for mobile, set `STRATEGY` to `'mobile'`.
 *
 * Related: https://github.com/addyosmani/psi/issues/8
 * http://addyosmani.com/blog/automating-web-performance-measurement-with-psi-for-node/
 */
var PORT = 8005;
var AUTHTOKEN = 'aGJcNEqh838HDfvyheIe';
var STRATEGY = 'desktop';

gulp.task('psi', function(cb) {
  ngrok.connect({
    authtoken: AUTHTOKEN,
    port: PORT
  }, function(err, url) {

    if (err !== null) {
      console.log( err );
      return cb();
    }

    url = url.replace('https://', 'http://');
    console.log( 'url', url );

    psi({
      nokey: 'true', // or use key: ‘YOUR_API_KEY’
      url: url,
      strategy: STRATEGY,
    }, cb);

  });
});
