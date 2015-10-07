//Initialisation des variables
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

//Tâche LiveReload du plugin gulp-connect
//Qui permet de créer un serveur de test en local
gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

//Compilation SASS
gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
});
gulp.task('watch', function () {
    gulp.watch(['*.html','assets/css/**', 'assets/js/**'], ['html']);
    gulp.watch(['assets/scss/**/*.scss'],['styles']);
});

gulp.task('default', ['connect', 'watch']);