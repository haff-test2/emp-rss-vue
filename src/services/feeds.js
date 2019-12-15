const axios = require('axios')
const cfg = require('@/app_config')

const getList = () => new Promise ((resolve, reject) => {
  axios.get(cfg.backend_url + '/api/v1/feeds', { params: {}, headers: { Authorization: "Token token=" + localStorage.getItem('rss_auth_token') }})
    .then(resp => {
      resolve(resp.data)
    })
  .catch(err => {
    reject(err)
  })
})

const registerFeed = feedUrl => new Promise ((resolve, reject) => {
  axios.post(cfg.backend_url + '/api/v1/feeds', null, { params: { feed_url: feedUrl }, headers: { Authorization: "Token token=" + localStorage.getItem('rss_auth_token') }})
    .then(resp => {
      resolve(resp)
    })
  .catch(err => {
    reject(err)
  })
})

const removeFeed = feedId => new Promise ((resolve, reject) => {
  axios.delete(cfg.backend_url + `/api/v1/feeds/${feedId}`, { params: {}, headers: { Authorization: "Token token=" + localStorage.getItem('rss_auth_token') }})
    .then(resp => {
      resolve(resp)
    })
  .catch(err => {
    reject(err)
  })
})

module.exports = { getList, registerFeed, removeFeed }

