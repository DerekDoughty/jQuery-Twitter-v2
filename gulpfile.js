'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
 
gulp.task('lint', function() {
  return gulp.src('js/bundle.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', ['clean'], function() {
  return gulp.src('js/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

 
gulp.task('clean', function () {
    return gulp.src('./js/bundle.js', {read: false})
        .pipe(clean());
});
// Add your require statements and gulp tasks here
gulp.task('watch', function () {
  return gulp.watch(['./js/*.js', '!./js/bundle.js'], ['build'])
})

//default should be building, linting and uglify
//get rid of serve, watch with build..they should not be together. 
gulp.task('default', ['uglify', 'lint', 'build', 'watch'], function() {
  return gulp.src
})
// Browserify
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var hbsfy = require('hbsfy');

var bundler = browserify({
  entries: ['./js/index.js'],
  debug: true
});

bundler.transform(hbsfy);
bundler.on('log', gutil.log); // output build logs to terminal

gulp.task('build', ['clean'], function () {
  console.log('running build task')
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    // set output filename
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('js'));
});

// API Server
var jsonServer = require('json-server');

var apiServer = jsonServer.create();
var router = jsonServer.router('db.json');

apiServer.use(jsonServer.defaults);
apiServer.use(router);

gulp.task('serve:api', function (cb) {
  apiServer.listen(3000);
  cb();
});

// Web Server
var serve = require('gulp-serve');

gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));

gulp.task('serve', ['serve:api', 'serve:web']);

