module.exports = {
  pages: {
    index: 'js/index/index.js',
    project: 'js/project/main.js',
    extract: 'js/extract/index.js',
    coords: 'js/coords/main.js'
  },
  outputDir: 'docs',
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/xyz'
    : '/'
};
