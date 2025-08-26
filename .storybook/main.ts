import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";

export default (<StorybookConfig>{
  framework: "storybook-solidjs-vite",
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-vitest",
      options: {
        cli: false,
      },
    },
  ],
  stories: ["../src/stories/**/*.stories.@(ts|tsx|js|jsx)", "../src/stories/**/*.tsx"],
  async viteFinal(config) {
    // Try using the exact same Vite config as your main app
    const { default: tailwindPlugin } = await import("@tailwindcss/vite");

    return mergeConfig(config, {
      plugins: [tailwindPlugin()],
      define: {
        "process.env": {},
      },
    });
  },
  docs: {
    autodocs: true,
  },
});
