module.exports = {
  mode: 'development', // development OR production
  cache: true,
  entry: [
    './script.js',
    './style.less'
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
    ]
  }
};
