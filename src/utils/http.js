import axios from 'axios'

export function createService({url, params, method='get'}) {
  return new Promise((resolve, reject) => {
    return axios({ 
      method, url, params
    })
    .then(checkStatus)
    .then(function (response) {
      resolve(response.data)
    })
    .catch(function (error) {
      resolve(error)
      // reject(error);
    });
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}