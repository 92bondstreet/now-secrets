const {parsed} = require('dotenv').config();
const now = require('./index');

async function sandbox () {
  try {
    const secrets = now.generate(parsed);

    console.log(`🔍 env variables: ${JSON.stringify(parsed, null, 2)}`);
    console.log(`🤐 secrets: ${JSON.stringify(secrets, null, 2)}`);

    now.save(secrets);
    await now.update(parsed);

    console.log('📁 now-secrets.json created');
    console.log('💾 now.json updated updated');
  } catch (error) {
    console.error(error);
  }
}

sandbox();
