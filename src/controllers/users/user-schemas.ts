import * as Joi from "joi";

export const userSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    email: Joi.string().email(),
    profilePicture: Joi.string().uri(),
    googleUserId: Joi.string(),
    isFacilitator: Joi.bool(),
    isAdmin: Joi.bool(),
    isAlumni: Joi.bool().allow(null).default(false),
    center: Joi.string().allow(null),
    githubLink: Joi.string().regex(/(ftp|http|https):\/\/?(?:www\.)?github.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).allow(null).uri(),
    linkedinLink: Joi.string().regex(/(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).allow(null).uri(),
    mediumLink: Joi.string().regex(/(ftp|http|https):\/\/?(?:www\.)?medium.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).allow(null).uri()
});

export const noteSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.number().required(),
    text: Joi.string().required(),
    createdAt: Joi.date().required(),
    name: Joi.string().required(),
  
});


export const userRoleSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    email: Joi.string().email(),
    profilePicture: Joi.string().uri().allow(null),
    googleUserId: Joi.string(),
    roles:Joi.string(),
    center: Joi.string(),
    mentor: Joi.allow(null),
    mentee: Joi.number().allow(null),
});
