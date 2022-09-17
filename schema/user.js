const ajvInstance = require('./ajv-instance');

const schema = {
    type: "object",
    properties: {
      firstName: {type: "string"},
      email: {type: "string", format: 'email'},
      dob: {type: "string", format: 'date'},
      countryCode: {type: "string", enum: ['UA', 'US']}
    },
    required: ['firstName', 'email', 'dob', 'countryCode'],
    additionalProperties: false
  };

module.exports = ajvInstance.compile(schema)