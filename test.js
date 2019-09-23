const fs = require('./src')

describe('copy and move', () => {
	it('should copy files', function () {
		fs.multi('copy', {
			'src/index.js': 'test/index.js',
			'src/fs-multi.js': 'test/fs-multi.js'
		})
	})

	it('should move files', function () {
		fs.multi('move', {
			'test/index.js': 'test/index-moved.js',
			'test/fs-multi.js': 'test/fs-multi-moved.js'
		})
	})
})
