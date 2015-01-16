// Root path to assets.
var ROOT = './assets/';

// Path to build compiled assets to.
var DEST = './build/';

// Build
var paths = {};

/**
 * Clean
 *
 * Folders to remove before doing a full production build.
 */
paths.clean = DEST;

/**
 * Styles
 *
 * Source SASS files, output to `DEST` folder
 */
var CSS = ROOT + 'css/';
var SASS = ROOT + 'css/sass/';

paths.styles = {
  src: SASS + 'main.scss',
  dest: CSS,
  watch: SASS + '**/*.scss',
};

paths.cssToSass = {
  src: CSS + 'lib/**/*.css',
  dest : SASS + 'css/',
};

/**
 * Scripts
 *
 * Source JavaScript files, output minified to `DEST` folder
 */
var JS = ROOT + 'js/';
var JS_EX = '!' + JS;

paths.scripts = {
  src: [
    JS + '**/*.js',
    JS_EX + 'ify/**/*',
  ],
  dest: DEST + 'js/',
};

/**
 * JS Hint
 *
 * Lint our source JavaScript files and Gulp files.
 * Exclude files to not be linted with the `JS_EX` path.
 */
paths.jshint = {
  src: [
    JS + '**/*.js',
    JS_EX + 'dump.js',
    JS_EX + 'app.vwo.bundle.js',
    JS_EX + 'app.pro.js',
    JS_EX + 'meetings.js',
    JS_EX + 'vendor/**/*.js',
  ],
  gulp: [
    ROOT + 'gulpfile.js',
    ROOT + 'gulp/**/*.js',
  ]
};

/**
 * JavaScript Bundles
 *
 * Add more properties to the `paths.bundles` object with
 * arrays of file names. Each group will be built into a
 * bundle file named: `{property name}.bundle.js`
 * e.g. `main.bundle.js`
 */
paths.bundles = {
  'main': [
    JS + 'vendor/initr.js',
    JS + 'initr.config.js',
    JS + 'dump.js',
  ],
  'imagesloaded-masonry': [
    JS + 'vendor/imagesloaded.js',
    JS + 'vendor/masonry.js',
  ]
};

/**
 * Browserify
 *
 * Build browserify modules into `JS` folder,
 * "scripts" task will minify everything after.
 */
paths.browserify = {
  src: JS + 'ify/*.js',
  dest: JS,
};

/**
 * Copy
 *
 * Copy JavaScript files from one place (usually `bower_components`)
 * into the `js/vendor` folder.
 */
paths.copy = {
  'copy-test' : {
    src: [
      JS + 'test-1.js',
      JS + 'test-2.js',
    ],
    dest: DEST + 'js'
  }
};

/**
 * Images
 *
 * Compress images and output to `build/images` folder.
 */
paths.images = {
  src:  ROOT + 'images/**/*',
  dest: DEST + 'images'
};

/**
 * PHP
 *
 * Run php server
 */
paths.php = {
  src:  './example/**/*.php',
};


/**
 * File Size
 *
 * Show size of files gzipped and not.
 */
paths.fileSize = [
  paths.styles.dest  + '*',
  // paths.scripts.dest + 'main.bundle.js'
];

/**
 * Docs
 *
 * Build JavaScript documentation with JSDocs.
 */
paths.docs = {
  dest : 'docs',
  js: [
    JS + '**/*.js',
    JS_EX + 'vendor/**/*.js',
    'README.md'
  ]
};
paths.docs.js.concat(paths.jshint.gulp);

module.exports = paths;
