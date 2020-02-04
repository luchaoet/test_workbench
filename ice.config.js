const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: './',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
  alias: {
    '@': path.resolve(__dirname, './src/'),
  },
  proxy: {
    '/log/**': {
      // 通过 enable 字段快速开关代理配置
      enable: true,
      target: 'http://47.111.2.9/'
    }
  }
};
