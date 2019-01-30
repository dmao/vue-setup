
<template lang="pug">
  section
    h1.text-grey-light.tracking-wide.text-5xl.uppercase {{ title }}
    ui-button test
    p {{ text }}
    ul
      li(v-for="(link, index) in links" v-bind:key="index") {{ link }}
    .flex
      div(class="w-1/6 bg-grey-light h-12")
      div(class="w-1/6 bg-grey h-12")
      div(class="w-1/6 bg-grey-dark h-12")
      div(class="w-1/6 bg-grey-darker h-12")
      div(class="w-1/6 bg-black h-12")
      div(class="w-1/6 bg-blue h-12")
</template>


<script>

import { mapState } from 'vuex';
import uiButton from 'Common/button/button.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      text: 'hello from data',
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState([
      'title',
      'links',
    ]),
  },
  components: {
    uiButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
