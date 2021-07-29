<template>
  <div class="min-h-screen bg-white">
    <LayoutNavigation />
    <div class="py-6">
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Nuxt />
        </div>
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>
