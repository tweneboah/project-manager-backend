const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;

    entity = await strapi.services.income.create(ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models.income });
  }
};
