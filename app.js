// Requiring the in-built url module
// to override
const url = require("url");

// The default behaviour of format()
// function of url
console.log(url.format("http://localhost:9000/"));

// Deleting the format function of url
delete url["format"];

// Adding new function to url with same
// name so that it would override
url.format = function(str) {
    return "Sorry!! I don't know how to format the url";
};

// Re-exporting the module for changes
// to take effect
module.exports = url;

// The new behaviour of export() function
// of url module
console.log(url.format("http://localhost:9000/"));