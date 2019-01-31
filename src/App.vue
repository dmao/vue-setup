<template lang="pug">
  #app
    ui-nav
    main.container.mx-auto
      router-view

</template>

<script>

import uiNav from 'Layout/nav/nav.vue';

export default {
  components: {
    uiNav,
  },
};
</script>


<style lang="stylus">
// the common CSS style are loaded from here, the only style tag how is not scoped
// @import "assets/css/kaboo-core"
// the common CSS style are loaded from here, the only style tag how is not scoped
@import "assets/css/kaboo-foundation"
// CSS of common components, like button, container, etc
@import "assets/css/kaboo-components"

#app
  &:before
    content: ""
    position: fixed
    top: 0
    right: 0;
    bottom: 0;
    left: 0;
    will-change: opacity
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url("bg/bg--m-2x.jpg")
    background-repeat: no-repeat
    background-size: cover
    +retina()
      background-size: cover


</style>
