module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("getAttr", function (obj, attr) { return obj[attr]; });
};