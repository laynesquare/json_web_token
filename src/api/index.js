import axios from 'axios';

const url = 'http://localhost:8000';

const API = axios.create({ baseURL: url });

API.interceptors.request.use(
  (req) => {
    if (localStorage.getItem('profile')) {
      req.headers.common['Authorization'] = `Bearer ${
        JSON.parse(localStorage.getItem('profile'))?.token
      }`;
    }
    return req;
  },
  (error) => {
    console.log(error);
  }
);

export const signup = (formData) => {
  return API.post('/user/signup', formData);
};

export const signin = (formData) => {
  return API.post('/user/signin', formData);
};

export const getCount = () => {
  return API.get('/count/getCount');
};

export const add = (count) => {
  return API.post('/count/add', count);
};
