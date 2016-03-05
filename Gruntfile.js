module.exports = function(grunt){
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	require('load-grunt-config')(grunt);
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('ontest', ['connect']);
}