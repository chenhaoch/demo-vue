var gulp = require('gulp');

var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var less = require('gulp-less');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');
var vue = require('vue-loader');

// clear
gulp.task('clean', function(){
  gulp.src('./build/*.*')
      .pipe(clean({force: true}));
});
// copy libs
gulp.task('copylibs', function () {
  gulp.src('./src/lib/*.*')
      .pipe(gulp.dest('build/lib'));
});
//
gulp.task('vue', function() {
  gulp.src('src/app.js')
      .pipe(webpack({
        output: {
          filename: 'app.js'
        },
        module: {
          loaders: [
            { test: /\.vue$/, loader: 'vue'}
          ]
        },
        babel: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }))
      .pipe(gulp.dest('build/vue'));
});
// 压缩html
gulp.task('minhtml', function () {
  gulp.src('./src/*.html')
      .pipe(minifyHTML({comments:false,spare:false,quotes:true}))
      .pipe(gulp.dest('build/'));
});

// less 解析
gulp.task('less', function () {
  gulp.src('./src/styles/*.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('build/styles'));
});
// es6 解析
gulp.task('babel', function () {
  gulp.src('./src/scripts/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('build/scripts'));
});

// less解析
gulp.task('lessAndMini', function () {
  gulp.src('./src/styles/*.less')
      .pipe(less())
      .pipe(minifyCss())
      .pipe(gulp.dest('build/styles'));
});

// es6 解析
gulp.task('babelAndMini', function () {
  gulp.src('./src/scripts/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('build/scripts'));
});
// 启动服务器
gulp.task('connect', function () {
  connect.server({
    root: './build',
    port: 3000,
    livereload: true
  });
});
// 监听文件变化
gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['minhtml']);
  gulp.watch(['./src/scripts/*.js'], ['babel']);
  gulp.watch(['./src/styles/*.less'], ['less']);
  gulp.watch(['./src/vue/*.vue'], ['vue']);
})

gulp.task('default', ['clean', 'copylibs', 'vue', 'minhtml', 'lessAndMini', 'babelAndMini']);

gulp.task('dev', ['clean', 'copylibs', 'vue', 'minhtml', 'less', 'babel', 'connect', 'watch']);
