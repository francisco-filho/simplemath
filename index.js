#!/usr/bin/env node

var simplemath = require('./lib/simplemath')
var chalk = require('chalk')
var yargs = require('yargs')

yargs
  .command('sum', 'sum two numbers', (yargs) => {
    yargs.command('test', 'sum 1+1', y => console.log(chalk.red('sum 1+1 = %d'), simplemath.sum(1,1)))
    yargs.option('a', { default: 0 , describe: 'first value'})
    yargs.option('b', { default: 0 , describe: 'second value'})
    }, (argv) => console.log(simplemath.sum(argv.a, argv.b)))
.argv

//console.log(chalk.underline.blue.bold('starting'))
module.exports = simplemath

// $ app-dev create conexao
// $ app-dev postgres --start
// $ app-dev postgres --sync relatorios
// $ app-dev postgres --sync relatorios.colunas
/*
cp.execSync('pg_config', {encoding: 'utf8'})
  .split('\n')
  .filter(n => n.startsWith('BINDIR'))
  .map(n => n.split('=')[1])
  .split('=')[
*/

