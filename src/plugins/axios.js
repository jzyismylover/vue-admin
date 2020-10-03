import Axios from "axios";
import qs from "qs";
import { Message } from 'element-ui'


let http = Axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "http://175.24.4.196" : "http://175.24.4.196",
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    const token = localStorage.token || "";
    config.headers.Authorization = token;
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
      return Promise.error(err);
  }
);

http.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    Message.error(err.toString())
})

Vue.prototype.$api = http;
