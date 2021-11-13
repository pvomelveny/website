module.exports = function (eleventyConfig) {
    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    eleventyConfig.setUseGitIgnore(false);
    // Add Watch Targets
    eleventyConfig.addWatchTarget("./src/css");
    // Add Passthrough Paths
    eleventyConfig.addPassthroughCopy("./src/css");

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: "src",
            output: "public",

            layouts: '_includes/layouts'
        },
    };
};