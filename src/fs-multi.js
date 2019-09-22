const fs = require('fs-extra')

const fsMulti = {
	multi: async (method, files) => {
		for (let [src, prop] of Object.entries(files)) {
			if(typeof prop.callback !== 'function') prop.callback = err => { if (err) console.error(err) }
			await fs[method](src, prop.dest, prop.opts, prop.callback)
		}
	}
}

Object.assign(fsMulti, fs)

module.exports = fsMulti