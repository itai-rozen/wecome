const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.invite.create(data, { files });
    } else {
      entity = await strapi.services.invite.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.invite });
  },

  async delete(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.invite.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.invite });
  },

  async update(ctx) {
    const { id } = ctx.params;
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.invite.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.invite.update({ id }, ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.invite });
  },
  
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.invite.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.invite });
  },
};
 
