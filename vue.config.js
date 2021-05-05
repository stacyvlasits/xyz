module.exports = {
  pages: {
    index: 'js/index/index.js',
    coords: 'js/coords/main.js',
    project: 'js/project/main.js'
  },
  outputDir: 'docs',
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/xyz/'
    : '/'
};
