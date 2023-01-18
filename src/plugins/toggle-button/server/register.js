"use strict";

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: "togglebutton",
    plugin: "toggle-button",
    type: "boolean",
  });
};
