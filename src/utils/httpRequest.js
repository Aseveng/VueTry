import axios from 'axios'

const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
})

const API = process.env.BASE_API
/**
 * 设置请求地址 简写
 *
 */
http.commonUrl = path => {
  return API + path
}

export default http
