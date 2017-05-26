#! /usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const express = require('express');
const packege = require('./package.json')
const app = express();
var path = require('path');

program
  .version(packege.version)
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-p, --port [optional]','optional port to serve files')
  .parse(process.argv); // end with parse to parse through the input

const filePath = program.chdir || process.cwd();
app.use(express.static(filePath))

const port = program.port || 8080;
const server = app.listen(port, (err) => {
  if(err) { throw err }
  console.log(chalk.blue(`App listening on port: ${port}`))
  console.log(`  -> Serving : ${filePath}`)
})
