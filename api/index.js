import axios from "axios";
const apiCall = axios.create({
  baseURL: "http://192.168.16.1:4001/api",
});

const createNewUser = async (data) => {
  return new Promise((resolve, reject) => {
    apiCall("/user", {
      data,
      method: "post",
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default {
  createNewUser,
};
