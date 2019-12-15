const axios = require('axios')
const cfg = require('@/app_config')

const getList = () => new Promise ((resolve, reject) => {
  axios.get(cfg.backend_url + '/api/v1/posts', { params: {}, headers: { Authorization: "Token token=" + localStorage.getItem('rss_auth_token') }})
    .then(resp => {
      resolve(resp.data)
    })
  .catch(err => {
    reject(err)
  })
})
module.exports = { getList }
