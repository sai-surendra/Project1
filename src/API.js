import Axios from "axios";

export function API(type, userData, url) {
   var BaseUrl = `http://cordonoff.in/api/${url}`
  //var BaseUrl = `http://192.168.1.36/cordonoff/${url}`
  return new Promise((resolve, reject) => {
    try {
      if (type == "get") {
        Axios({url: BaseUrl, method: type}).then(res => {
          resolve(res);
        }).catch((error) => {
          reject(error);
        });
      }else{
        Axios({url: BaseUrl, method: type, headers: {}, data: userData}).then(res => {
          resolve(res);
        }).catch((error) => {
          reject(error);
        });
      }

    } catch (error) {
      reject(error);
    }

  });
}