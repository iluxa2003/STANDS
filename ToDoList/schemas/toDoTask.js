const Joi = require('joi');

const schema = Joi.object({
  task: Joi.string().max(50).required(),
  project: Joi.string().required(),
  date: Joi.number(),
  id: Joi.string(),
});

module.exports = { schema };
