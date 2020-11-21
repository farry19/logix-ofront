<template>
  <div class="form-container">
    <div class="form-form">
      <div class="form-form-wrap">
        <div class="form-container">
          <div class="form-content">
            <h1 class="">
              Log In to
              <a href="#"
                ><span class="brand-name">{{ APP_NAME }}</span></a
              >
            </h1>

            <form class="text-left">
              <div class="form">
                <div id="username-field" class="field-wrapper input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="email@example.com"
                  />
                </div>

                <div id="password-field" class="field-wrapper input mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-lock"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    v-model="password"
                    :type="password_show ? 'text' : 'password'"
                    class="form-control"
                    placeholder="password"
                  />
                </div>
                <div class="d-sm-flex justify-content-between">
                  <div class="field-wrapper toggle-pass">
                    <p class="d-inline-block">Show Password</p>
                    <label class="switch s-primary">
                      <input v-model="password_show" type="checkbox" class="d-none" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="field-wrapper">
                    <button @click.prevent="login" class="btn btn-primary" value="">Log In</button>
                  </div>
                </div>

                <!-- <div class="field-wrapper text-center keep-logged-in">
                  <div class="n-chk new-checkbox checkbox-outline-primary">
                    <label class="new-control new-checkbox checkbox-outline-primary">
                      <input type="checkbox" class="new-control-input" />
                      <span class="new-control-indicator"></span>Keep me logged in
                    </label>
                  </div>
                </div>

                <div class="field-wrapper">
                  <a href="auth_pass_recovery.html" class="forgot-pass-link">Forgot Password?</a>
                </div> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="form-image">
      <div class="l-image"></div>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/utils/auth'

export default {
  name: 'login',
  data() {
    return {
      APP_NAME: process.env.VUE_APP_NAME,
      email: '',
      password: '',
      password_show: false,
    }
  },
  methods: {
    async login() {
      try {
        await loginUser(this.email, this.password)
        this.$router.push('/')
      } catch (err) {
        alert(`Error: ${err}`)
      }
    },
  },
}
</script>

<style>
.input-group {
  margin: 1rem;
}

.input-group label {
  margin-right: 0.5rem;
}
</style>
