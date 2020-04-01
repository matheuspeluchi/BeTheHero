const { celebrate, Segments, Joi } = require('celebrate');

module.exports ={
	ProfileHeaderValidator: celebrate({
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	})
}