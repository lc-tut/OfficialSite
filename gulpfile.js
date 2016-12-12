var gulp = require('gulp');
var ejs = require('gulp-ejs');

gulp.task("ejs",function () {
    gulp.src(["template/**/*.ejs","!template/**/_*.ejs"])
        .pipe(ejs("json",{"ext":".html"}))
        .pipe(gulp.dest("public_html"))
})

gulp.task("copyLib",function() {
    //libから必要なライブラリをコピーする
    gulp.src([
        "lib/css/bootstrap.min.css",
        "lib/css/style.css",
        "lib/fonts/*",
        "lib/js/bootstrap.min.js"
    ],{"base":"lib/"})
        .pipe(gulp.dest("public_html"))
})

gulp.task("copyContents",function() {
    gulp.src("contents/**/*",{"base":"contents/"})
        .pipe(gulp.dest("public_html"))
})

gulp.task("default",["ejs","copyLib","copyContents"],function() {

})