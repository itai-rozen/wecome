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
      entity = await strapi.services.event.create(data, { files });
    } else {
      entity = await strapi.services.event.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.event });
  },

  async delete(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.event.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.event });
  },

  async update(ctx) {
    const { id } = ctx.params;
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.event.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.event.update({ id }, ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.event });
  },
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.event.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.event });
  },
};
 


