// docs: https://www.11ty.io/docs/config/

const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addFilter( "myFilter", function() {});
    
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['src/assets/css/*.scss', '!node_modules/**'],
  });
  
//   return {
//     dir: { input: 'site', output: 'public', data: '_data' },
//     passthroughFileCopy: true,
//     templateFormats: ['njk', 'md', 'css', 'html', 'yml',"txt"],
//     htmlTemplateEngine: 'njk'
//   }
 
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};