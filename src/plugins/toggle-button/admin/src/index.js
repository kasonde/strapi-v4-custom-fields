import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";

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
      pluginId: "toggle-button", // the custom field is created by a toggle-button plugin
      type: "boolean", // the datatype which should store your value
      intlLabel: {
        id: "toggle-button.togglebutton.label",
        defaultMessage: "Toggle", // This can be any Label
      },
      intlDescription: {
        id: "toggle-button.togglebutton.description",
        defaultMessage: "Select any state", // This can be any description
      },
      // The intl label and intl description are for when you are adding the field to your content type.
      icon: PluginIcon, // don't forget to create/import your icon component
      components: {
        // You need to use the syntax shown below to reference your component, otherwise it'll appear as not supported in the admin
        // When you import your component here: the component gets props passed into it to aid how you interact with your data. View the component to see the two I've used.
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
