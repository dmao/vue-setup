
<template lang="pug">
    nav.flex.items-center.justify-between.flex-wrap.bg-grey-dark.p-4
      //- logo
      .flex.items-center.flex-no-shrink.text-white.mr-6
        h1.font-semibold.text-xl.tracking-tight Get a def
      //- menu
      .block(class='lg:hidden')
        button.flex.items-center.px-3.py-2.border.rounded.text-teal-lighter.border-teal-light(class='hover:text-white hover:border-white')
          svg.fill-current.h-3.w-3(viewBox='0 0 20 20', xmlns='http://www.w3.org/2000/svg')
            title Menu
            path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')
      //- source link
      .w-full.block.flex-grow(class='lg:flex lg:items-center lg:w-auto')
        .text-sm(class='lg:flex-grow')
          a.block.mt-4.text-teal-lighter.mr-4(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
            | Docs
          a.block.mt-4.text-teal-lighter.mr-4(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
            | Examples
          a.block.mt-4.text-teal-lighter(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
            | Blog
        div
          a.inline-block.text-sm.px-4.py-2.leading-none.border.rounded.text-white.border-grey-darker.mt-4(href='#', class='hover:border-transparent hover:text-teal hover:bg-grey-darker lg:mt-0') Download

</template>

<script>
export default {
  name: 'uiNav',
};
</script>
