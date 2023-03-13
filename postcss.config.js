module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-nested'),
      require('postcss-preset-env')({stage:1}),
      require('cssnano'),
      require('postcss-import')
    ]
  }