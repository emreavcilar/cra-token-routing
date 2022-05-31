import axios from 'axios';

const apiServices = axios.create({
  withCredentials: true,
  headers: {
    common: {
      'access-token': localStorage.getItem('access_token') || null
    },
  },
});

// apiservices request interceptor configurations
apiServices.interceptors.request.use(
  config => {
    config.startTime = performance.now();
    return config;
  },
  error =>
    // console.log('error.response request >>>> ', error.response);
    Promise.reject(error),
);

// apiservices response interceptor configurations
apiServices.interceptors.response.use(
  response => {
    const { responseType } = response.request;

    return Promise.resolve(response);
  },
  error => {
    if (error && error.response) {

      // console.log('error.response response >>>>', error.response);
      return Promise.reject(error);
    }
  },
);

/**
 * All axios requests
 *
 * Returns apiServices axios object.
 *
 * servicePathObj is declared in api.js. if fullPath is declared (test / dummy / different path requests)
 * fullPath is used for api requests otherwise api domain that declared in .env file is used before path
 *
 * params is parameteres of api. for example  ({id:123})
 *
 * headers is header parameters of axios
 *
 * @param {Object} servicePathObj
 * @param {Object} params // optional
 * @param {Object} headers // optional
 * @return {axios}
 * @public
 */

export const serviceWrapper = (
  requestPath,
  requestType,
  params = {},
  options = {},
) => {
  // options can be {headers:{'x-override-organization-id':123}} or {responseType:'arraybuffer'}
  // define the path of the api call

  // set querystring params if type is GET
  if ((params && requestType === 'get') || (params && requestType === 'delete')) {
    // if request has query params
    // if (Object.entries(params).length > 0) {
    //   const paramString = objectConvertQueryString(params);
    //   path += paramString;
    // }
  }

  if (params === null) {
    params = {};
  }

  options = {
    ...options,
    headers: {
      ...options?.headers,
      common: {
        // 'Accept-Language': requestLang,
        // organizationid: organizationId,
      },
    },
  };

  if (requestType === 'get') {
    return apiServices[requestType](requestPath, options);
  }

  return apiServices[requestType](requestPath, params, options);
};