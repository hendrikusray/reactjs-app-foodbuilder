import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-myapp-5852f.firebaseio.com/',
});

export default instance;
