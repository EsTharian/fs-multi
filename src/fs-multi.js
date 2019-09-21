const fs = require('fs-extra')

const params = {
	'copy': 'copied',
	'move': 'moved'
}

const fsMulti = {
	multi: (method, arr) => {
		for (let [src, target] of Object.entries(arr)) {
			fs[method](src, target, err => {
				if (err) {
					this.errorLog = `${src} couldn't be ${params[method]} to ${target}: ${err}`
					console.error(this.errorLog)
				}
				else {
					this.successLog = `${src} is ${params[method]} to ${target}`
					console.log(this.successLog)
				}
			})
		}
	}
}

Object.assign(fsMulti, fs)

module.exports = fsMulti