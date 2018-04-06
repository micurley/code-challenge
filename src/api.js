import axios from 'axios';

console.log('process.env: ', process.env);
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API ? process.env.REACT_APP_API + '/' : '/',
});
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

const users = async username => {
  const path = username;

  console.log('process.env: ', process.env);
  let response = await axiosInstance.get(path);
  let users = Array.isArray(response.data) ? response.data : [response.data];
  return {
    headers: response.headers,
    users,
  };
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
