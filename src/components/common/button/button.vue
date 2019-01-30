<template lang="pug">
  button
   slot button
</template>

<script>
export default {
  name: 'uiButton',
  props: {
    /**
    * The color for the button.
    */
    color: {
      type: String,
      default: '#333',
    },
    /**
    * The size of the button
    * `small, normal, large`
    */
    size: {
      type: String,
      default: 'normal',
    },
    /**
    * Gets called when the user clicks on the button
    */
    onClick: {
      type: Function,
      default: (event) => {
        console.log('You have clicked me!', event.target);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>

button
  background: powderblue

</style>
