<script setup>
import {ref} from 'vue'

const login = ref('')
const password = ref('')

const loginError = ref('')
const passwordError = ref('')

const signIn = (event) => {
  event.preventDefault()

  if (login.value.length === 0) {
    loginError.value = 'заполните логин'
  }else {
    loginError.value = ''
  }

  if (password.value.length === 0) {
    passwordError.value = 'заполните пароль'
  }else {
    passwordError.value = ''
  }
}
</script>

<template>
  <main>
    <div class="container-main-login">
      <section class="list-login">
        <h1>Авторизация</h1>

        <form class="login-box" method="post" @submit="signIn">
          <div>
            <div class="error"> {{loginError}}</div>
            <input name="Username" type="username" placeholder="логин" v-model="login">
          </div>
          <div>
            <div class="error"> {{passwordError}}</div>
            <input name="Password" type="password" placeholder="пароль" v-model="password">
          </div>
          <div>
            <button class="but-myth"> ввести </button>
          </div>
        </form>

        <label class="from-row">
          <input type="checkbox" class="checkbox" >
          запомнить меня
        </label>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>