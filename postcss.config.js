const autoprefixer = require("autoprefixer");
const mergeRules = require("postcss-merge-rules");

module.exports = {
    plugins: [
        autoprefixer(),
        mergeRules(),
    ],
};
