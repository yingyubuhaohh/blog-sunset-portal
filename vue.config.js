const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/blog/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 9090
  }
})
