const fs = require('fs');
const paramCase = require('param-case');
const path = require('path');
const loadJsonFile = require('load-json-file');
const writeJsonFile = require('write-json-file');
const {NOW_JSON, NOW_SECRETS} = require('./constants');

/**
 * convert dotenv parsed object to secrets
 * {
 *  "@my-secret-key": "keep-it-secret"
 * }
 * @param  {Object} variables
 * @return {Object}
 */
module.exports.generate = variables => {
  const secrets = Object.entries(variables).reduce(
    (current, [key, value]) =>
      Object.assign(current, {[`@${paramCase(key)}`]: value}),
    {}
  );

  return secrets;
};

/**
 * Save secrets into 'now-secrets.json
 * @param  {Object} secrets [description]
 */
module.exports.save = secrets => {
  const file = path.join(process.cwd(), NOW_SECRETS);

  fs.writeFileSync(file, JSON.stringify(secrets, null, 2));
};

/**
 * Update the now.json with env key
 * @param  {Object}  variables
 */
module.exports.update = async variables => {
  const file = path.join(process.cwd(), NOW_JSON);
  const env = Object.entries(variables).reduce(
    (current, [key]) =>
      Object.assign(current, {[key]: `@${paramCase(key)}`}),
    {}
  );
  const now = await loadJsonFile(file);
  const merged = Object.assign({}, now, {env});

  await writeJsonFile(file, Object.assign(merged, {env}));
};
