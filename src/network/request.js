import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://10.100.54.135:8080/TraSysC',
    timeout: 500000000000000000
  })
   return instance(config)  //会返回一个promise
}

export function dopost(config) {
  const instance = axios.create({
     baseURL:'http://10.100.54.135:8080/TraSysC',
     timeout:50000000
  })
  return instance.post(config)
}
