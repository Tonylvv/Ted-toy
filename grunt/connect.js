module.exports = function(){
	return {
		options: {
			open: true,
			port: 9000,
			hostname: '*',
			livereload: 35729
		},
		ser: {
			options: {
				keepalive: true,
				base: './views/'
			}
		}
	}
}