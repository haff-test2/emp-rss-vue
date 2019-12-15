const axios = require('axios')
const cfg = require('@/app_config')

const signIn = user => new Promise ((resolve, reject) => {
  axios.post(cfg.backend_url + '/api/v1/sessions', null, { params: { email: user.email, password: user.password }})
    .then(resp => {
      const token = resp.data.token
      if (token)  {
        localStorage.setItem('rss_auth_token', token)
        resolve(resp)
      } else {
        reject(resp)
      }
    })
  .catch(err => {
    localStorage.removeItem('rss_auth_token')
    reject(err)
  })
})

const isAuthentificated = () => {
  return !(localStorage.getItem('rss_auth_token') == null)
}

const signOut = () => {
  localStorage.removeItem('rss_auth_token')
}

module.exports = { isAuthentificated, signOut, signIn }

