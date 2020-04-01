const { celebrate, Segments, Joi } = require('celebrate');

module.exports ={
	IncidentPageValidator:  celebrate({
		[Segments.QUERY]: Joi.object().keys({
			page: Joi.number()
		})
	}),

	IncidentDeleteValidator: celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			id: Joi.number().required()
		})
	})
};