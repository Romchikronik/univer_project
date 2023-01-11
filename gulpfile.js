var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var gcmq = require("gulp-group-css-media-queries");
var browserSync = require("browser-sync").create();
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var imagemin = require("gulp-imagemin");
var sass = require("gulp-sass");

function style() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest("./src/css/"))
    .pipe(csso())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(browserSync.stream())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./src/css/"));
}

gulp.task("watch", function () {
  watch("./src/styles/*.scss", style);
  watch("./src/*.html", browserSync.reload);
  watch("./src/js/script.js", browserSync.reload);
});

gulp.task("sync", function () {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
});

// Для сжатия картинок
// gulp.task("imagemin", function () {
//   return gulp
//     .src("./src/img-original/*.*")
//     .pipe(imagemin())
//     .pipe(gulp.dest("./src/assets/"));
// });

gulp.task("style", style);

gulp.task("default", gulp.parallel("watch", "sync", "style"));
/*  "imagemin", */
