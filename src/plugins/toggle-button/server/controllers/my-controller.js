'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('toggle-button')
      .service('myService')
      .getWelcomeMessage();
  },
});
