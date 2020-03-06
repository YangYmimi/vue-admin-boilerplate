<!-- Layout widt header/footer/aside -->
<template>
  <el-container class="layout-basic">
    <el-header>
      这是 Header
    </el-header>
    <el-container>
      <el-aside>
        这是左边 Aside
      </el-aside>
      <el-main>
        这是 Content
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'LayoutBasic',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

.layout-basic {
  height: 100%;
}
</style>
