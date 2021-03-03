'use strict';
const Conf = require('conf');
const config = new Conf();

config.set({
  'mongoose': {
    'options': {
      'useNewUrlParser': true,
      'useUnifiedTopology': true,
      'useCreateIndex': true
    }
  },
  'commodity-names': {
    'url': 'https://eddb.io/archive/v6/commodities.json'
  }
});
module.exports = config;
