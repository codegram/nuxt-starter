<template>
  <div>
    <h1>About</h1>
    <NuxtContent :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      page: await $content('pages/about').fetch(),
    }
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About page description',
        },
      ],
    }
  },
}
</script>
