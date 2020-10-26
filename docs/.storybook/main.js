const sites =
  process.env.NODE_ENV === "development"
    ? {
        core: "http://localhost:6007",
        ui: "http://localhost:6006",
      }
    : {
        core: "https://redesign-ui-core.netlify.app",
        ui: "https://redesign-ui.netlify.app",
      };

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  refs: {
    core: {
      title: "UI Core",
      url: sites.core,
    },
    ui: {
      title: "UI",
      url: sites.ui,
    },
  },
};
