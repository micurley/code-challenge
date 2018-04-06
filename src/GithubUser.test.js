import React from 'react';
import ReactDOM from 'react-dom';
import GithubUser from './GithubUser';

let dummy_user = {
  login: 'micurley',
  id: 424056,
  avatar_url: 'https://avatars2.githubusercontent.com/u/424056?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/micurley',
  html_url: 'https://github.com/micurley',
  followers_url: 'https://api.github.com/users/micurley/followers',
  following_url: 'https://api.github.com/users/micurley/following{/other_user}',
  gists_url: 'https://api.github.com/users/micurley/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/micurley/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/micurley/subscriptions',
  organizations_url: 'https://api.github.com/users/micurley/orgs',
  repos_url: 'https://api.github.com/users/micurley/repos',
  events_url: 'https://api.github.com/users/micurley/events{/privacy}',
  received_events_url: 'https://api.github.com/users/micurley/received_events',
  type: 'User',
  site_admin: false,
  name: 'Morgan Curley',
  company: null,
  blog: '',
  location: 'Red Hook, NY',
  email: 'morgan.curley@gmail.com',
  hireable: true,
  bio: null,
  public_repos: 27,
  public_gists: 1,
  followers: 0,
  following: 0,
  created_at: '2010-10-01T23:37:43Z',
  updated_at: '2018-04-05T01:06:12Z',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubUser user={dummy_user} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
