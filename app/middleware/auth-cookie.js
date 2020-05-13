import Cookies from 'universal-cookie'

export default ({ req, store }) => {
  if (process.browser) {
    return
  }
  const cookies = new Cookies(req.headers.cookie)
  const user = cookies.get('user')
  // console.log('auth-cookie.js')
  // console.log(user)
  if (user && user.id) {
    // console.log('setUser')
    const { id, likes } = user
    store.commit('setUser', { user: { id, likes } })
  } else {
    // console.log('no setUser')
  }
}