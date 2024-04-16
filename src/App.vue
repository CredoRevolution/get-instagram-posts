<template>
  <div id="app" class="app">
    <button v-if="!authorised" class="login-button" @click.prevent="login">
      login
    </button>
    <div v-else class="authorized">
      <button class="get-posts-button" @click.prevent="getPosts">
        getPosts
      </button>
      <div v-if="posts.length" class="posts">
        <div v-for="post in posts" :key="post.id" class="post">
          <img :src="post.media_url" width="200" height="200" />
          <p>{{ post.caption }}</p>
        </div>
      </div>
      <div v-else class="no-posts">Постов нет</div>
    </div>
  </div>
</template>

<script>
let FB_INITIALIZED = false

const axios = require('axios')

export default {
  name: 'App',
  data() {
    return {
      authorised: false,
      posts: [],
      accessToken:
        'IGQWRNcHhHNVlrNmh4anJqbVlkMTlUNElXX0pKLWZABX24zeEpvWlREWXlMM01VbmVTaEJJLW9NczYzT3ljUHFvMjR3OThLdGpkLWd2ZA19GVW04N2NlTEtqSVpzZADhGZAm95bGZAaLWlCSndneWNWM3QyWlFVY2FFWmMZD',
    }
  },
  methods: {
    login() {
      if (!FB_INITIALIZED) {
        console.warn('FB.init() must be called before FB.login()')
        return
      }
      FB.login(
        (facebookResponse) => {
          console.log('FB.login', facebookResponse)
          this.statusChangeCallback(facebookResponse)
        },
        {
          scope: 'user_photos',
        }
      )
    },
    statusChangeCallback(facebookResponse) {
      if (facebookResponse.status === 'connected') {
        console.log('connected')
        // Logged into your app and Facebook.
        this.authorised = true
      } else if (facebookResponse.status === 'not_authorized') {
        console.log('not_authorized')
        // The person is logged into Facebook, but not your app.
        this.authorised = false
      }
    },
    getPosts() {
      if (!this.authorised) {
        console.warn('login() must be called before getPosts()')
        return
      }
      axios
        .get(
          `https://graph.instagram.com/v14.0/me/media?fields=id,caption,media_url&access_token=${this.accessToken}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log('axios response', response)
          if (response.data && response.data.error) {
            console.error(response.data.error)
          } else if (response.data && !response.data.error) {
            console.log(response.data)
            this.posts = response.data.data
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  mounted() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '738688201743899',
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      })
      FB_INITIALIZED = true
      FB.AppEvents.logPageView()
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  },
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.login-button {
  background: #3b5998;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}

.authorized {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.get-posts-button {
  background: #3b5998;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #3b5998;
  border-radius: 3px;
}

.post {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post img {
  border-radius: 3px;
}

.no-posts {
  text-align: center;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #3b5998;
  border-radius: 3px;
}
</style>
