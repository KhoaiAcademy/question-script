var shell = require('shelljs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

shell.cp('-R', 'build/static/js/*', 'build/')
shell.cp('-R', 'build/static/css/*', 'build/')
shell.rm('-rf', 'build/static/')
