#!/usr/bin/env node
const now = require('./index');
const path = require('path');
const {DEFAULT_ENV} = require('./constants');

/**
 * Parse, save and update
 * @param  {Array} argv
 */
async function bin (argv) {
  try {
    const [file = DEFAULT_ENV] = argv._;
    const {parsed} = require('dotenv').config({'path': path.resolve(process.cwd(), file)});
    const keys = Object.keys(parsed);
    const secrets = now.generate(parsed);

    console.log(`🔍 ${keys.length} "${file}" variables found: ${keys}`);
    console.log(`🤐 secrets are: ${Object.keys(secrets)}`);

    now.save(secrets);
    console.log('📁 now-secrets.json file created or updated');

    await now.update(parsed);
    console.log('💾 now.json file is updated');
  } catch (error) {
    console.error(`🛑 ${error}`);
  }
}

const argv = module.exports = require('yargs')
  .usage('usage: now-secrets <env-file>')
  .strict()
  .locale('en')
  .wrap(120)
  .help('help')
  .argv;

bin(argv);
