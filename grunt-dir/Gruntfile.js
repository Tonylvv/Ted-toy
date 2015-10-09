module.exports = function(grunt){
	grunt.initConfig({
		uglify:{
			output:{
				src:['source/test1.js', 'source/test2.js'],
				dest: 'target/uTest.js'
			},
			dest:{
				src:['source/test1.js','source/test3.js'],
				dest: 'third/third.min.js'
			}
		},
		watch:{
			uglify:{
				files:'source/*',
				tasks:['uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}