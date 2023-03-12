#! /usr/bin/env node

const { program } = require('commander');
const { chalk } = require('../lib/utils');
const pkg = require('../package.json');
const create = require('../lib/create');

program.name(pkg.name);
program.version(pkg.version)
    .usage('<command> [options]');

program.command('create <app-name>')
    .description('create project')
    .action((name, options) => {
        create(name, options)
    });
program.on('--help', () => {
    console.log();
    console.log(`Run ${chalk.yellow('swz-cli <command> --help')}`);
    console.log();
})
program.parse(process.argv);