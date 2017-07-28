'use strict';

const YAML = require('yamljs');

module.exports.hello = (params) => {
  return {
    message: 'Public example. Your function executed successfully!',
    haveYAML: !!YAML
  };
};

