
import axios from 'axios';
// import querystring from 'querystring';
// import { setAuthorizationToken } from '../auth';
// import { setSiteToken } from '../auth';
// import { toast } from 'react-toastify';

let config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

let langHeaders = () => {
  return { headers: { ...config.headers, 'referrermodule': window.location.href } };

};

class ApiClient {
  static post(url, params, token = null, dispatch = null, site_token = null) {
    // if (token) setAuthorizationToken(axios, token);
    // setSiteToken(axios, site_token);
    if (dispatch)
      dispatch({ type: 'SORT', data: {} }); // reset previous sorting when post any new records
    return new Promise((fulfill, reject) => {
      axios.post(url, JSON.stringify(params), langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static put(url, params, token = null, dispatch = null, site_token = null) {
    // setAuthorizationToken(axios, token);
    // setSiteToken(axios, site_token);
    return new Promise(function (fulfill, reject) {
      axios
        .put(url, JSON.stringify(params), langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static get(url, params, token = null, dispatch = null, site_token = null) {
    // setAuthorizationToken(axios, token);
    // setSiteToken(axios, site_token);
    let query;
    // let query = querystring.stringify(params);
    return new Promise(function (fulfill, reject) {
      axios
        .get(url, langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static delete(url, params, token = null, dispatch = null, site_token = null) {
    // setAuthorizationToken(axios, token);
    // setSiteToken(axios, site_token);
    return new Promise(function (fulfill, reject) {
      axios
        .delete(url, { data: params }, langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
            // setTimeout(() => {
            //   logout(error, dispatch);
            // }, 1000);
          } else {
            reject(error);
          }
        });
    });
  }
  
  static patch(url, params, token = null, dispatch = null, site_token = null) {
    // setAuthorizationToken(axios, token);
    // setSiteToken(axios, site_token);
    return new Promise(function (fulfill, reject) {
      axios
        .patch(url, JSON.stringify(params), langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
            // setTimeout(() => {
            //   logout(error, dispatch);
            // }, 1000);
          } else {
            reject(error);
          }
        });
    });
  }
}


export default ApiClient;
