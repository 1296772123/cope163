import axios from 'axios'

export default function ajax (url, data = {}, methods = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (methods === 'GET') {
      promise = axios.get(url, data, methods)
    } else {
      promise = axios.post(url, data, methods)
    }

    promise.then(response => {
      resolve(response)
    }).catch(err => {
      alert(err)
    })
  })
}
