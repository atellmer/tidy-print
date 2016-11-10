'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var connect = require('gulp-connect');
var spritesmith = require('gulp.spritesmith');
var config = require('./config');
var path = {
	root: config.root,
	shared: config.root + '/shared/',
	components: config.root + '/components/',
	images: config.root + '/images/',
};

console.log('----------------------------');
console.log('mode: ', config.mode);
console.log('----------------------------');

//connect
gulp.task('connect', function () {
	connect.server({
		root: config.root,
		port: config.port,
		livereload: true
	});
});

//js
gulp.task('js', function () {
	return gulp.src([path.components + '**/*.js'])
		.pipe(connect.reload());
});

//html
gulp.task('html', function () {
	return gulp.src([path.root + '/**/*.html'])
		.pipe(connect.reload());
});

//styl
gulp.task('styl', function () {
	return gulp.src([
		path.shared + '**/*.styl',
		path.components + '**/*.styl'])
		.pipe(stylus({
			use: [nib()],
			compress: config.debug ? false : true
		}))
		.pipe(gulp.dest(function (file) {
			return file.base;
		}))
		.pipe(connect.reload());
});

//sprite
gulp.task('sprite', function () {
	return gulp.src([path.images + 'icons/source/**/*.*'])
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css'
		}))
		.pipe(gulp.dest(path.images + 'icons/sprite/'));
});

//watch
gulp.task('watch', function () {
	gulp.watch([
		path.root + '/**/*.html'], ['html']);
	gulp.watch([
		path.shared + '**/*.styl', 
		path.components + '**/*.styl'], ['styl']);
	gulp.watch([
		path.components + '**/*.js'], ['js']);
	gulp.watch([
		path.images + 'icons/source/**/*.*'], ['sprite']);
});

gulp.task('default', [
	'connect',
	'styl',
	'sprite',
	'watch'
]);