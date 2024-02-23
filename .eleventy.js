const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("getAttr", function (obj, attr) { return obj[attr]; });
    eleventyConfig.addPlugin(pluginRss);
};
