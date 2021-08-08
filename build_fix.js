var shell = require('shelljs')

shell.cp('-R', 'build/static/js/*', 'build/')
shell.cp('-R', 'build/static/css/*', 'build/')
shell.rm('-rf', 'build/static/')
