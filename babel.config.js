module.exports = function(babel) {
    babel.cache(true);
  
    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ];
  
    return {
      presets,
      plugins,
    };
  };
  