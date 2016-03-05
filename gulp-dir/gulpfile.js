var gulp = require("gulp");
var jshint = require("gulp-jshint");
var hb = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("default", function(){
	console.log("hi,I'm a new gulp player!");

});
//js检验
gulp.task("hint", function(){
	gulp.src("./scripts/**/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter());
})
gulp.task("hb", function(){
	gulp.src("./scripts/*/*js")
	.pipe(hb({mangle: false}))
	.pipe(gulp.dest("./scripts/ug/"));
})

gulp.task("concat", function(){
	gulp.src("./scripts/*/*.js")
	.pipe(concat("cc.js", {newLine: "\n//////////////////\n"}))
	.pipe(gulp.dest("./scripts/concat/"));
})