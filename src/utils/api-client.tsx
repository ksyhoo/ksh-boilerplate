import * as axios from 'axios';

const {default: request} = axios;

export default class APIClient {
  private host?: string;
  private get headers() {
    return {
      Authorization: localStorage.getItem('token'),
    };
  }

  constructor(host: string) {
    this.host = host;
  }

  public get(endpoint: string, params?: object) {
    const promise: axios.AxiosPromise = request.get(this.url(endpoint), {
      headers: this.headers,
      params: params || {},
    });
    promise.catch(checkError);
    return promise;
  }

  public post(endpoint: string, data?: any) {
    const promise: axios.AxiosPromise = request.post(this.url(endpoint), data || {}, {
      headers: this.headers,
    });
    promise.catch(checkError);

    return promise;
  }
  public patch(endpoint: string, data?: any) {
    const promise: axios.AxiosPromise = request.patch(this.url(endpoint), data || {}, {
      headers: this.headers,
    });
    promise.catch(checkError);

    return promise;
  }

  public url(path: string): string {
    const endpoint = path.startsWith('/') ? path : `/${path}`;

    return `${this.host}${endpoint}`;
  }
}

function checkError(error: axios.AxiosError) {
  if (error.response.status === 503) {
    location.href = '/service-unavailable';
  } else if (error.request) {
    console.warn(error.request);
  } else {
    console.warn('Error', error.message);
  }
}
