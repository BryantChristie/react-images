var gulp = require('gulp'),
    initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		file: 'Lightbox.js',
		name: 'Lightbox',
		dependencies: [
			'react',
			'react-addons-transition-group',
			'react-dom',
			'react-jss',
			'react-swipeable',
			'jss',
			'jss-camel-case',
			'jss-nested',
			'jss-px',
			'jss-vendor-prefixer'
		]
	},

	example: {
		src: 'examples/src',
		dist: 'examples/dist',
		standalone: true,
		files: [
			'.gitignore',
			'.npmignore',
            'images/*',
			'favicon.ico',
			'index.html'
		],
		scripts: [
			'app.js'
		],
		less: [
			'example.less'
		],
		port: 9000
	}

};

initGulpTasks(gulp, taskConfig);
