<template>
  <div id="app">
    <div id="authenticated_block" v-if=isAuthentificated()>
      <router-link to="/feeds">Manage feeds</router-link>
      <span> | </span>
      <router-link to="/reader">Read feeds</router-link>
      <div class='rigthExtraLinks'>
        <router-link to="/sign_in" v-on:click.native="signOut()" replace>Logout</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import { isAuthentificated, signOut } from '@/services/sessions'

  export default {
    name: 'app',
    methods: {
      signOut: () => { signOut() },
      isAuthentificated: () => { return isAuthentificated() }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.rigthExtraLinks {
float:right;
}
</style>
