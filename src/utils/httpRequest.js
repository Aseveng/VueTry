import axios from 'axios'

const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
})

/**
 * 设置请求地址 简写
 *
 */
http.commonUrl = path => {
  return 'http://localhost:8099/' + path
}

export default http
