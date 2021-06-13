module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
    pages: {
      index: {
        entry: 'examples/main.ts',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add('/packages')
          .end()
        .use('babel')
          .loader('babel-loader')
    }
}