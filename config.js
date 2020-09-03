SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
      "*.scss": { "loader": "sass" },
      "*.sass": { "loader": "sass" },
    
    '*.vue': {
       'loader': 'vue-loader'
    },
  },
  map: {
        'plugin-babel': './js/systemjs-plugin-babel/plugin-babel.js',
         'systemjs-babel-build': './js/systemjs-plugin-babel/systemjs-babel-browser.js',
        
        'vue-loader': './js/systemjs-vue-loader.js',
        'vue-template-compiler': 'vue-template-compiler@latest',
        'vue-template-es2015-compiler': 'vue-template-es2015-compiler@latest',
        'sass.js': './js/sass.sync.js',
        'less': 'less@latest',
        'acorn': 'acorn@latest',
        'bootstrap-vue': './js/bootstrap-vue.common.js',
        'vue-infinite-loading': 'vue-infinite-loading',
        'vue-router': 'vue-router',
        'axios': 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js',
        'vue-unsaved-changes-dialog': 'vue-unsaved-changes-dialog',
        'sweetalert2': './js/sweetalert2.all.js',
        'vue-sweetalert2': 'vue-sweetalert2',
        'vue-float-action-button': 'vue-float-action-button',
        'vue-loading-overlay': 'vue-loading-overlay',
        'animejs': 'animejs',
        'vue-progressbar': 'vue-progressbar',
        "vue": "./js/vue.js"
  },
  transpiler: 'plugin-babel',
  separateCSS: false,
  buildCSS: true,
  sassPluginOptions: {
     "autoprefixer": true
  },
  packages: {
        /*vue: {
            main: 'vue.js'
        },*/
        'vue-template-es2015-compiler': {
            main: 'index.js'
        }
    }
});

SystemJS.import('./main.js')
  .catch(console.error.bind(console));