import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://192.168.1.8:8080',
    timeout: 500000000000000000
  })
   return instance(config)  //会返回一个promise
}

