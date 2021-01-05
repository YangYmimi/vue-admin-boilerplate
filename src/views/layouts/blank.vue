<!-- Layout without header/footer/aside -->
<template>
  <el-container class="layout-blank tx-center">
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "LayoutBlank"
}
</script>

<style lang="scss" scoped>
.layout-blank {
  height: 100%;
}
</style>
