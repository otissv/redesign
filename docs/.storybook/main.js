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
      url: "http://localhost:6007",
    },
    ui: {
      title: "UI",
      url: "http://localhost:6006",
    },
  },
};
