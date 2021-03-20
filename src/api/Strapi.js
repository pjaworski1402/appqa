import axios from "axios";
import apiConfig from "../config/apiConfig";
import { getCookie } from "../utils/Cookies";

class Strapi {
  constructor(email = "", password = "", username = "") {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  register(callback) {
    const data = JSON.stringify({
      username: this.username,
      email: this.email,
      password: this.password,
    });

    const config = {
      method: "post",
      url: `${apiConfig.address}:${apiConfig.port}/auth/local/register`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        callback(err.response);
      });
  }

  login(callback) {
    const data = JSON.stringify({
      identifier: this.email,
      password: this.password,
    });

    const config = {
      method: "post",
      url: `${apiConfig.address}:${apiConfig.port}/auth/local`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        callback(err.response);
      });
  }

  getUserInfo(callback) {
    const jwt = getCookie("ssid");
    const config = {
      method: "get",
      url: `${apiConfig.address}:${apiConfig.port}/users/me`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    axios(config)
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        callback(err.response);
      });
  }
}
export default Strapi;
