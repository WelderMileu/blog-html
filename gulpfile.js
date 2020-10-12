const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

exports.default = () => {
    gulp.src('./assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
} 
