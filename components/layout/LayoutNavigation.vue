<template>
  <nav>
    <LayoutLogo />
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  watch: {
    $route() {
      this.menuOpen = false
    },
  },
}
</script>
