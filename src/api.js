import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API + '/',
});
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

// const users = username => {
//   const path = username;
//
//   return axiosInstance
//     .get(path)
//     .then(response => {
//       let data = response.json();
//       console.log('data: ', data);
//       return data;
//     })
//     .catch(err => {
//       console.log('err: ', err);
//       return null;
//     });
// };

const users = async username => {
  const path = username;

  try {
    let response = await axiosInstance.get(path);
    console.log('response: ', response);
    let data = await response.json();
    console.log('data: ', data);
    return data;
  } catch (err) {
    console.log('err: ', err);
    return null;
  }
};

const repos = async username => {
  const path = username + '/repos';

  try {
    let response = await axiosInstance.get(path);
    return response.data;
  } catch (err) {
    return null;
  }
};

export default {
  users,
  repos,
};
