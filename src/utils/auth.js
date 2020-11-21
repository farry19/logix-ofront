/* eslint-disable no-async-promise-executor */
import decode from 'jwt-decode'
import axios from 'axios'

// const REST_ENDPOINT = 'http://logix.test/api/v1'
const REST_ENDPOINT = process.env.VUE_APP_BASE_URL
const AUTH_TOKEN_KEY = 'token'

export const loginUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${REST_ENDPOINT}/auth/token`,
        method: 'POST',
        data: {
          email,
          password,
          grant_type: 'password',
        },
      })

      setAuthToken(res.data.token)
      resolve()
    } catch (err) {
      console.error('Caught an error during login:', err)
      reject(err)
    }
  })
}

export const registerUser = (name, email, password, password_confirmation) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${REST_ENDPOINT}/auth/register`,
        method: 'POST',
        data: {
          name,
          email,
          password,
          password_confirmation,
        },
      })

      setAuthToken(res.data.token)
      resolve()
    } catch (err) {
      console.error('Caught an error during login:', err)
      reject(err)
    }
  })
}

export const logoutUser = () => {
  clearAuthToken()
}

export const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = ''
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

export const isLoggedIn = () => {
  let authToken = getAuthToken()
  return !!authToken && !isTokenExpired(authToken)
}

export const getUserInfo = () => {
  if (isLoggedIn()) {
    return decode(getAuthToken())
  }
}

const getTokenExpirationDate = encodedToken => {
  let token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  let date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

const isTokenExpired = token => {
  let expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}
