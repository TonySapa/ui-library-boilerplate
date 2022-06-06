module.exports = {
  "reactOptions": {
    "strictMode": false // switch to "true" for debugging. Leave it as "false" since storybook build causes error for deprecated use of "findDOMNode". See issue #17
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}