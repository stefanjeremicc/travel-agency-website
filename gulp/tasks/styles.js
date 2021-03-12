// variables
const gulp = require('gulp'); // gulp
const postcss = require('gulp-postcss'); // postcss
const autoprefixer = require('autoprefixer'); // autoprefixer
const cssVars = require('postcss-simple-vars'); // simple variables
const nested = require('postcss-nested'); // nested
const cssImport = require('postcss-import'); // import
const mixins = require('postcss-mixins'); // mixins
const hexrgba = require('postcss-hexrgba'); // hex > rgba

// gulp task follow CSS changes
gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css') // main working css file (with all imports)
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer])) // adding all features to our code
    .on('error', function(errorInfo) { // on 'error' show errorInfo - It has to be within function()
      console.log(errorInfo.toString()); // console.log error message
      this.emit('end'); // prevent gulp watch task stop running
    })
    .pipe(gulp.dest('./app/temp/styles/')) // final destination of our css file
})

