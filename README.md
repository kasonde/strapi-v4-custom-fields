# Getting started with Custom Fields 🚀

This is a simple guide that shows you how to create a custom field. In order to do this, I created a plugin called toggle button. This plugin was enabled in `./config/plugins.js`.

# Running the application

- Install the dependencies for this project by running `npm install` or `yarn` in the project directory.
- Copy the `.env.example` file contents to a `.env` file you must create
- Run yarn develop to run the application.
- If you want to make changes to the plugin (and Strapi admin inturn) without having to stop your server and running `yarn build`, run `yarn develop --watch-admin`.

# Details

The custom fields uses the `ToggleInput` component from our [Design System](https://design-system-git-main-strapijs.vercel.app/?path=/docs/design-system-components-toggleinput--base) to render a boolean field in the content manager. If you want to know more about customizing the `ToggleInput`, please view our design system.

## Things to note

1. Review all comments I placed in the `admin's register.js` and the `MyToggleButton.js` files.
2. Ensure use suitable datatypes for you custom field. Review our docs on what fields are not allowed.
3. When registering your custom field, do NOT use a 'space' in the value of the name parameter.
4. Create something cool :)
