var gulp        = require('gulp');
var gulpNodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  gulpNodemon({
    script: 'cli/start.js',
    ext: 'js',
    env: {
      PORT: 3000
    }
  })
});

gulp.task('develop', ['nodemon']);