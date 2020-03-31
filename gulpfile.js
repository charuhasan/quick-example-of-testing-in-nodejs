var gulp = require('gulp');
var jshint = require('gulp-jshint');
var checkstyleFileReporter = require('jshint-checkstyle-file-reporter');

// optional specify a different filename:
process.env.JSHINT_CHECKSTYLE_FILE = 'jshint.xml'; // default: checkstyle.xml

gulp.task('jshint', function() {
	gulp.src('**/*/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(checkstyleFileReporter));
});
