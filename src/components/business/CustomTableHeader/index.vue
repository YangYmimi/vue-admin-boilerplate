<template>
  <div class="cpt-business-customtableheader-wrapper">
    <span class="header-title">{{ name }}</span>
    <span class="header-sort">
      <i class="el-icon-caret-top"></i>
      <i class="el-icon-caret-bottom"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "BusinessCustomTableHeader",
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
