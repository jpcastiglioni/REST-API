const Joi = require("@hapi/joi");

//REGISTER VALIDATION

const registerSchema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
});

const validation = (data, schema) => {
  return schema.validate(data);
};

const registerValidation = (data) => {
  return validation(data, registerSchema);
};

const loginValidation = (data) => {
    return validation(data, loginSchema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
