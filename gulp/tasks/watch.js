// variables
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create(); // just create method().

// gulp task watch HTML & CSS files
gulp.task('watch', () => {
  
  // INIT browser sync
  browserSync.init({ // initialize browserSync
    notify: false, // remove black pop up in browser
    server: {
      baseDir: 'app' // set up location of the server
    }
  });

  // watch HTML file (reload server on save)
  watch('./app/index.html', () => {
    browserSync.reload() // html file on changes trigger reload in our browser
  })

  // watch CSS file
    watch('./app/assets/styles/**/*.css', () => { // any css file in our working directory
      gulp.start('cssInject') // start cssInject task
    })
})

// gulp task CSS browserSync (cssInject)
gulp.task('cssInject', ['styles'], () => { // before starting task, do the developer 'styles' task
  return gulp.src('./app/temp/styles/styles.css') // our final styles.css file
    .pipe(browserSync.stream()) // do the stream method in our browser on our final styles.css file
})
