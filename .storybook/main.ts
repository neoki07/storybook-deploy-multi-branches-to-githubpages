import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    const basePath = process.env.STORYBOOK_BASE_PATH;
    const base = basePath ? `/${basePath}/` : "/";

    console.log("basePath", basePath);
    console.log("base", base);

    return mergeConfig(config, {
      base,
    });
  },
};
export default config;
