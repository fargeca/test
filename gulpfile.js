const gulp  = require('gulp');
const {lastRun} = require ('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require("gulp-autoprefixer");
const del = require('del')




function style(){
   //where is my scss file
   return gulp.src('./scss/**/style.scss', {sourcemaps: true}, {since: lastRun(sass)})
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))


   //destination
   .pipe(gulp.dest('./css', {sourcemaps: '.' }))
   .pipe(browserSync.stream());
}

function watch(){
   browserSync.init({
       server: {
           baseDir: './'
       }
   }); 
    //quand quelque chose change => run style
   gulp.watch('scss/**/*.scss', style);
   gulp.watch('./**/*.html').on('change', browserSync.reload);
}

//exports.style = style;
//exports.watch = watch;

module.exports = {
    watch
}




