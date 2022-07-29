import axios from 'axios';

const headlessAPI = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: 'Basic ' + window.btoa('test@liferay.com:a')
  }
});

export default headlessAPI;
