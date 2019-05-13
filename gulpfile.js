const gulp  = require('gulp');
const {lastRun, series} = require ('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require("gulp-autoprefixer");
const rename = require('gulp-rename');
const del = require('del');
const spritesmith = require('gulp.spritesmith');
const gulpif = require("gulp-if");



function style (){
   //where is my scss file
   return gulp.src('./scss/**/style.scss', {sourcemaps: true}, {since: lastRun(sass)})
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   // adapté à tous les browser
   .pipe(
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    //renome css en .min
    .pipe(
        rename({
          suffix: '.min'
        })
      )
   //destination
   .pipe(gulp.dest('./css', {sourcemaps: '.' }))
   .pipe(browserSync.stream());
}


function clean() {
    return del('css');
   }

function sprites() {
    return  gulp.src('img/*.png')
                .pipe(spritesmith({
                    imgName: 'sprite.png',
                    cssName: 'sprite.scss',
                    imgPath: '../img/sprites/sprite.png'
                }))
                //return spriteData.pipe(gulp.dest('sprites/'));
                .pipe(gulpif('*.png', gulp.dest('img/sprites')))
                .pipe(gulpif('*.scss', gulp.dest('scss/modules')));
};



function watch() {
   browserSync.init({
       server: {
           baseDir: './'
       }
   }); 
    //quand quelque chose change => run style
   gulp.watch('scss/**/*.scss', style);
   gulp.watch('./**/*.html').on('change', browserSync.reload);
}



module.exports = {
    //default: series(clean,  ), 
    watcher: series(clean,sprites, watch),
    sprites: sprites,
    style:style,
}




