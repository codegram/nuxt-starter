<template>
  <div class="py-16">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-lg max-w-prose">
        <h1>
          <span
            class="
              block
              text-base
              font-semibold
              tracking-wide
              text-center text-indigo-600
              uppercase
            "
            >{{ page.title }}</span
          >
          <span
            class="
              block
              mt-2
              text-3xl
              font-extrabold
              leading-8
              tracking-tight
              text-center text-gray-900
              sm:text-4xl
            "
            >{{ page.subtitle }}</span
          >
        </h1>
        <p class="mt-8 text-xl leading-8 text-gray-500">
          {{ page.description }}
        </p>
      </div>
      <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
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
