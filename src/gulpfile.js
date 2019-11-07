const gulp = require("gulp");
const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

const jsSrc = [
    './node_modules/jquery/dist/jquery.min.js' ,
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/isotope-layout/dist/isotope.pkgd.js',
    './node_modules/vanilla-lazyload/dist/lazyload.min.js',
    './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    './node_modules/persian-date/dist/persian-date.min.js',
    './node_modules/persian-datepicker/dist/js/persian-datepicker.min.js',
    './scripts/*.js'];

const scssSrc = ['./scss/app.scss'];

function css(cb) {
    gulp.src(scssSrc)
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(dest('../dist/css'))
        .pipe(browserSync.stream());
    cb();
}

function js(cb) {
    gulp.src(jsSrc, { sourcemaps: true })
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(dest('../dist/js', { sourcemaps: true }))
        .pipe(browserSync.stream());
    cb();
}

function nunjucks(cb) {
    gulp.src('./pages/**/*.+(html|njk)')
        .pipe(
            data(function() {
                    return require('./data.json');
                }
            ))
        .pipe(
            nunjucksRender({
                    path: ['./components']
                }
            ))
        .pipe(gulp.dest('../'));
    cb();
}

// Watch Files
function watch_files() {
    browserSync.init({
        server: {
            baseDir: "../",
            serveStaticOptions: {
                extensions: ['html']
            },
            notify: true,
            cors: true,
            port: 3000
        }
    });
    gulp.watch("./scss/**/*.scss", css);
    gulp.watch("./scripts/*.js", js).on("change", browserSync.reload);
    gulp.watch("./components/**/*.html", nunjucks).on("change", browserSync.reload);
    gulp.watch("./pages/*.html", nunjucks).on("change", browserSync.reload);
}


// Default 'gulp' command with start local server and watch files for changes.
exports.default = series(nunjucks, css, js, watch_files);
