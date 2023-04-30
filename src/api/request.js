import axios from "axios";

//创建axios实例
const service = axios.create({
  baseURL: "http://8.222.140.62:1337/api",
  //请求时间
  timeout: 5000,
});

//request拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error); //for debug
    Promise.reject(error);
  }
);

//response拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
