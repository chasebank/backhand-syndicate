// docs: https://www.11ty.io/docs/config/

const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['src/assets/css/*.scss', '!node_modules/**'],
  });

  eleventyConfig.addPassthroughCopy("src/assets/images");
 
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};