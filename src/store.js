// https://coursetro.com/posts/code/144/A-Vuex-Tutorial-by-Example---Learn-Vue-State-Management
// https://www.thepolyglotdeveloper.com/2018/04/vuejs-app-using-axios-vuex/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Find a beer',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com',
    ],
  },
  mutations: {

  },
  actions: {

  },
});
