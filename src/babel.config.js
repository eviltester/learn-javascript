module.exports = {
    // parts of the project demonstrate 'bad' practices so we need to switch off use strict
    sourceType: "script",
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],

    // parts of the project use EcmaScript Modules
    overrides: [
        {
            test: "./jest/includes/import_includes/**",
            sourceType: "module"
        }
    ]
  };