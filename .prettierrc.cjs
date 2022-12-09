module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',

  plugins: [
    /** @see https://www.npmjs.com/package/prettier-plugin-jsdoc#options */
    require('prettier-plugin-jsdoc'),
  ],
  jsdocVerticalAlignment: true,
  jsdocCapitalizeDescription: false,
  jsdocPreferCodeFences: true,
  jsdocKeepUnParseAbleExampleIndent: true,
};
