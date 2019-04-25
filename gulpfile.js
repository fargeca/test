const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();



function style(){
   //where is my css file
   return gulp.src('./scss/**/*.scss')
   .pipe(sass())
   //destination
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.stream());
}

function watch(){
   browserSync.init({
       server: {
           baseDir: './'
       }
   });
   // quand quelque chose change => run style
   gulp.watch('scss/**/*.scss', style);
   gulp.watch('./**/*.html').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;

