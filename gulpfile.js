// Loading external packages for use later
const annotate = require( 'gulp-ng-annotate' );
const autoprefixer = require( 'gulp-autoprefixer' );
const babel = require( 'gulp-babel' );
const browserSync = require( 'browser-sync' )
  .create();
const cache = require( 'gulp-cache' );
const concat = require( 'gulp-concat' );
const fs = require( 'fs' );
const gulp = require( 'gulp' );
const gulpSrc = require( 'gulp-src-ordered-globs' );
const gutil = require( 'gulp-util' );
const htmlify = require( 'gulp-angular-htmlify' );
const jshint = require( 'gulp-jshint' );
const minifyCss = require( 'gulp-minify-css' );
const noComments = require('gulp-strip-comments');
const noHtmlComments = require( 'gulp-remove-html-comments' );
const plumber = require( 'gulp-plumber' );
const rename = require( 'gulp-rename' );
const sass = require( 'gulp-sass' );
const sourcemaps = require( 'gulp-sourcemaps' );
const tempCache = require( 'gulp-angular-templatecache' );
const uglify = require( 'gulp-uglify' );


//################################
///---- Internal Functions ---####
//################################


// jshint - required by jshint.
var jshintVersion = '2.4.1';
var jshintOptions = fs.readFileSync( '.jshintrc' );

function makeHashKey( file ) {
  return [ file.contents.toString( 'utf8' ), jshintVersion, jshintOptions ].join( '' );
}


// cache clearing
gulp.task( 'clear', function ( done ) {
  return cache.clearAll( done );
} );

// error handling
var onError = function ( err ) {
  gutil.beep();
  console.log( err );
  this.emit( 'end' );
};

// Browser definitions for autoprefixer
var AUTOPREFIXER_BROWSERS = [
  'last 3 versions',
  'ie >= 8',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];



//################################
///-- Gulp Source Processes --####
//################################


// process html
gulp.task( 'html', function () {
  gulp.src( './dev/**/*.html' )
    .pipe( noHtmlComments() )
    .pipe( gulp.dest( './dist' ) )
    .pipe( browserSync.stream() );
} );

// process index.html
gulp.task( 'index', function () {
  gulp.src( './dev/index.html' )
    .pipe( noHtmlComments() )
    .pipe( gulp.dest( './dist' ) )
    .pipe( browserSync.stream() );
} );


// process styles files and return one css file.
gulp.task( 'styles', function () {
  return gulpSrc( [  './dev/normalize.css', './dev/style.css', './dev/*.scss' ], {
      base: './dev'
    } )
    .pipe( plumber( {
      errorHandler: onError
    } ) )
    .pipe( sourcemaps.init( {
      debug: true
    } ) )
    .pipe( sass( {
      errLogToConsole: true
    } ) )
    .pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
    .pipe( concat( 'bundle.css' ) )
    .pipe( gulp.dest( './dist' ) )
    .pipe( rename( {
      suffix: '.min'
    } ) )
    .pipe( minifyCss() )
    .pipe( sourcemaps.write( './maps' ) )
    .pipe( gulp.dest( './dist' ) )

  .pipe( browserSync.stream() );
} );



// process JS files and return the stream.
gulp.task( 'scripts', function () {
  return gulpSrc( [ './dev/jquery.min.js', './dev/**/*.js' ] )
    .pipe( plumber( {
      errorHandler: onError
    } ) )
    .pipe( jshint(), {
      key: makeHashKey,
      success: function ( jshintedFile ) {
        return jshintedFile.jshint.success;
      },
      value: function ( jshintedFile ) {
        return {
          jshint: jshintedFile.jshint
        };
      }
    } )
    .pipe( jshint.reporter( 'default' ) )
    .pipe( sourcemaps.init( {
      loadMaps: true
    } ) )
    .pipe( babel() )
    .pipe( concat( 'bundle.js' ) )
    .pipe( gulp.dest( './dist' ) )
    .pipe( annotate() )
    .pipe( rename( {
      suffix: '.min'
    } ) )
    .pipe( uglify() )
    .pipe( sourcemaps.write( './maps', {
      includeContent: true,
      sourceRoot: './dev/app/'
    } ) )
    .pipe( gulp.dest( './dist' ) )
    .pipe( browserSync.stream() )
} );


//################################
///-- Gulp Adjunct Processes --###
//################################


// relocate dependencies
gulp.task( 'depends', function () {
  return gulpSrc( [ './other-dependencies/**/*.{js, css, gzip, map, json, md, less, scss, sass}' ] )
    .pipe( plumber( {
      errorHandler: onError
    } ) )
    .pipe( gulp.dest( './dist' ) )
} );

// load assets into dist folder
gulp.task( 'assets', function () {
  return gulp.src( [ './*.pdf' ] )
    .pipe( gulp.dest( './dist' ) )
} );

// Optimize Images task
gulp.task( 'images', function () {
  return gulp.src( './dev/images/*.jpg' )
    .pipe( gulp.dest( './dist/images' ) )
} );

// import normalize.css into dist
gulp.task( 'normalize', function () {
  return gulp.src( './dev/normalize.css' )
    .pipe( concat( 'normalize.css' ) )
    .pipe( gulp.dest( './dist' ) )
} )

// browser-sync
gulp.task( 'browser-sync', function () {
  browserSync.init( {
    server: {
      baseDir: './dist'
    }
  } );
} );

// browser-sync reload
gulp.task( 'reload', function () {
  browserSync.reload();
  gutil.log( 'reloading from task' );
} );


gulp.task( 'adjunct', [ 'depends', 'images', 'normalize', 'assets' ] );



//################################
///-- Gulp Default Process --####
//################################



gulp.task( 'default', [ 'index', 'images', 'html', 'styles', 'scripts', 'browser-sync', 'reload' ], function () {
  gulp.watch( [ './dev/*.{scss,css,sass,less,stylus}', './dev/**/*.{scss,css,sass,less,stylus}' ], [ 'styles' ] )
  gulp.watch( [ './dev/*js', './dev/**/*.js' ], [ 'scripts' ] )
  gulp.watch( [ './dev/*.html', './dev/**/*.html' ], [ 'html' ] )
  gulp.watch( 'index.html' )
    .on( 'change', browserSync.reload );
} );
