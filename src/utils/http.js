import axios from 'axios'

export function createService({url, params, method='get'}) {
  return new Promise((resolve, reject) => {
    if(method.toLowerCase() === 'get'){
      return axios.get(url, {params})
      .then(checkStatus)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        resolve(error)
        // reject(error);
      })
    } else {
      return axios.post(url, params)
      .then(checkStatus)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        resolve(error)
        // reject(error);
      })
    }
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}