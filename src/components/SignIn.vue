<template>
  <div class="signin">
    <form class="login" @submit.prevent="login">
     <h2>Sign in</h2>
     <label>User email</label>
     <input required v-model="email" type="email" placeholder="some@emp.com"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit" v-on:click="login()">Login</button>
   </form>
  </div>
</template>

<script>
  import { signIn } from '@/services/sessions'

  export default {
    name: 'SignIn',
    data: function() {
      return {  email: "", password: "" }
    },
    methods: {
      login: function() {
        const { email, password } = this
        signIn({ email, password }).then(() => {
          this.$router.push({name: 'feeds'}).catch(() => {})
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
