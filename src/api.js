import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API ? process.env.REACT_APP_API + '/' : '/',
});
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

const users = async username => {
  const path = username;

  let response = await axiosInstance.get(path);
  console.log('response: ', response);
  let data = await response.data;
  console.log('data: ', data);
  return Array.isArray(data) ? data : [data];
};

const repos = async username => {
  const path = username + '/repos';

  let response = await axiosInstance.get(path);
  return response.data;
};

export default {
  users,
  repos,
};
