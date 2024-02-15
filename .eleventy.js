module.exports = function(eleventyConfig) {

  // Výchozí výstupní složka: _site
    
  // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    
  // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");

  //Omezí počet článků v sidebar na 2
    eleventyConfig.addFilter("limit", function (arr, limit) {
      return arr.slice(0, limit);
    });
    
  // Custom filter to generate URL from title
      eleventyConfig.addFilter("titleToUrl", function(title) {
      return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    });
    
    return {
        // možné formáty šablon
        templateFormats: ["njk", "html", "md", "liquid"],
    
        // jako šablonovací jazyk zvolíme Nunjucks
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }
    
    };
    