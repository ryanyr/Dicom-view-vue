// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

//引入 cornerstone,dicomParser,cornerstoneWADOImageLoader
import * as cornerstone from "cornerstone-core";
import * as dicomParser from "dicom-parser";

// 不建议 npm 安装 cornerstoneWADOImageLoader 如果你做了 会很头疼 
import * as cornerstoneWADOImageLoader from "../static/dist/cornerstoneWADOImageLoader.js";
Vue.use(ElementUI);
Vue.use(cornerstone);
Vue.use(dicomParser);
Vue.use(cornerstoneWADOImageLoader);

//指定要注册加载程序的基石实例
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;


/*
 *配置 webWorker (必须配置)
 *
 *注意这里的路径问题  如果路径不对 cornerstoneWADOImageLoaderWebWorker 会报错:
 *        "index.html Uncaught SyntaxError: Unexpected token <"
 *
 */
var config = {
  webWorkerPath: "/static/dist/cornerstoneWADOImageLoaderWebWorker.js",
  taskConfiguration: {
    decodeTask: {
      codecsPath: "/static/dist/cornerstoneWADOImageLoaderCodecs.js"
    }
  }
};
cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})