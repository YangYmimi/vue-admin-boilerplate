<template>
  <!-- 试图页面请以 page-${module}-${pageName} 作为命名规则 -->
  <layout-blank>
    <el-col
      :md="12"
      :lg="8"
      :xl="6"
      class="page-system-login"
    >
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        class="login-form"
      >
        <div class="form-title">
          <span class="title">系统登录</span>
        </div>
        <el-form-item prop="email">
          <el-input
            v-model="loginForm.email"
            placeholder="邮箱"
            name="email"
            type="text"
            tabindex="1"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            name="password"
            type="password"
            tabindex="2"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click.native.prevent="handleLogin"
        >
          登陆
        </el-button>
      </el-form>
    </el-col>
  </layout-blank>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [ { required: true, blur: true, message: '邮箱必填' } ],
        password: [ { required: true, blur: true, message: '密码必填' } ]
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs['loginForm'].validate((valid) => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.page-system-login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .form-title {
    text-align: left;
    margin-bottom: 22px;

    .title {
      font-size: 24px;
      color: $--color-primary;
      font-weight: bold;
    };
  }

  .el-button {
    width: 100%;
  }
}
</style>
