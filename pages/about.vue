<template>
  <div class="py-16">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-lg">
        <h1>
          <span
            class="
              block
              text-center text-indigo-600 text-base
              font-semibold
              tracking-wide
              uppercase
            "
            >{{ page.title }}</span
          >
          <span
            class="
              block
              mt-2
              text-center text-gray-900 text-3xl
              font-extrabold
              tracking-tight
              leading-8
              sm:text-4xl
            "
            >{{ page.subtitle }}</span
          >
        </h1>
        <p class="mt-8 text-gray-500 text-xl leading-8">
          {{ page.description }}
        </p>
      </div>
      <div class="prose prose-lg prose-indigo mt-6 mx-auto text-gray-500">
        <NuxtContent :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      page: await $content('pages/about').fetch(),
    }
  },
}
</script>
