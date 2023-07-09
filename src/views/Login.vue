<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" class="validate" v-model="email" />
        <label for="name">E-mail</label>
        <small class="helper-text invalid" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </small>
      </div>

      <div class="input-field">
        <input id="password" type="password" class="validate" v-model="password" />
        <label for="password">Password</label>
        <small class="helper-text invalid" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </small>
      </div>

    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
  name: 'login',
  data: () => ({
    v$: useValidate(),
    email: '',
    password: '',
  }),
  validations: () => ({
    email: { required, email },
    password: { required, minLength: minLength(6) }
  }),
  methods: {
    async submitHandler() {
      this.v$.$validate();
      if (!this.v$.$error) {

      }
      const formData = {
        email: this.email,
        password: this.password,
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/');
      } catch (e) { }
    }

  }
}
</script>
