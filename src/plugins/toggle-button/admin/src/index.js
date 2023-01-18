import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import MyToggleButton from "./components/MyToggleButton.js";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
    app.customFields.register({
      name: "togglebutton",
      pluginId: "toggle-button", // the custom field is created by a color-picker plugin
      type: "boolean", // the color will be stored as a string
      intlLabel: {
        id: "toggle-button.togglebutton.label",
        defaultMessage: "Toggle",
      },
      intlDescription: {
        id: "toggle-button.togglebutton.description",
        defaultMessage: "Select any state",
      },
      icon: PluginIcon, // don't forget to create/import your icon component
      components: {
        Input: async () => import("./components/MyToggleButton"),
      },
      options: {
        // declare options here
      },
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
