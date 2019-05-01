// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.tsx$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        emitWarning: dev,
      }
    })
    return config
  }
})