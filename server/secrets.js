const secrets = {
  dbUri: process.env.DB_URI || 'mongourihere',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
