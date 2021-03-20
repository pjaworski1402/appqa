import axios from "axios";
import apiConfig from "../config/apiConfig";

class ApiConnection {
  checkConnect(callback) {
    const config = {
      method: "get",
      url: `${apiConfig.address}:${apiConfig.port}`,
      headers: {
        accept: "application/json",
      },
    };

    axios(config)
      .then((res) => {
        callback(JSON.stringify(res.status));
      })
      .catch((err) => {
        callback(JSON.stringify(err));
      });
  }
}

export default ApiConnection;
