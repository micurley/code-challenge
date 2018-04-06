import React from 'react';
import ReactDOM from 'react-dom';
import GithubRepo from './GithubRepo';

let dummy_repo = {
  id: 48912487,
  name: 'baseball_R',
  full_name: 'micurley/baseball_R',
  owner: {
    login: 'micurley',
    id: 424056,
    avatar_url: 'https://avatars2.githubusercontent.com/u/424056?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/micurley',
    html_url: 'https://github.com/micurley',
    followers_url: 'https://api.github.com/users/micurley/followers',
    following_url:
      'https://api.github.com/users/micurley/following{/other_user}',
    gists_url: 'https://api.github.com/users/micurley/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/micurley/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/micurley/subscriptions',
    organizations_url: 'https://api.github.com/users/micurley/orgs',
    repos_url: 'https://api.github.com/users/micurley/repos',
    events_url: 'https://api.github.com/users/micurley/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/micurley/received_events',
    type: 'User',
    site_admin: false,
  },
  private: false,
  html_url: 'https://github.com/micurley/baseball_R',
  description: 'Companion to Analyzing Baseball Data with R',
  fork: true,
  url: 'https://api.github.com/repos/micurley/baseball_R',
  forks_url: 'https://api.github.com/repos/micurley/baseball_R/forks',
  keys_url: 'https://api.github.com/repos/micurley/baseball_R/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/micurley/baseball_R/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/micurley/baseball_R/teams',
  hooks_url: 'https://api.github.com/repos/micurley/baseball_R/hooks',
  issue_events_url:
    'https://api.github.com/repos/micurley/baseball_R/issues/events{/number}',
  events_url: 'https://api.github.com/repos/micurley/baseball_R/events',
  assignees_url:
    'https://api.github.com/repos/micurley/baseball_R/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/micurley/baseball_R/branches{/branch}',
  tags_url: 'https://api.github.com/repos/micurley/baseball_R/tags',
  blobs_url: 'https://api.github.com/repos/micurley/baseball_R/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/micurley/baseball_R/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/micurley/baseball_R/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/micurley/baseball_R/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/micurley/baseball_R/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/micurley/baseball_R/languages',
  stargazers_url: 'https://api.github.com/repos/micurley/baseball_R/stargazers',
  contributors_url:
    'https://api.github.com/repos/micurley/baseball_R/contributors',
  subscribers_url:
    'https://api.github.com/repos/micurley/baseball_R/subscribers',
  subscription_url:
    'https://api.github.com/repos/micurley/baseball_R/subscription',
  commits_url: 'https://api.github.com/repos/micurley/baseball_R/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/micurley/baseball_R/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/micurley/baseball_R/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/micurley/baseball_R/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/micurley/baseball_R/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/micurley/baseball_R/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/micurley/baseball_R/merges',
  archive_url:
    'https://api.github.com/repos/micurley/baseball_R/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/micurley/baseball_R/downloads',
  issues_url:
    'https://api.github.com/repos/micurley/baseball_R/issues{/number}',
  pulls_url: 'https://api.github.com/repos/micurley/baseball_R/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/micurley/baseball_R/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/micurley/baseball_R/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/micurley/baseball_R/labels{/name}',
  releases_url:
    'https://api.github.com/repos/micurley/baseball_R/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/micurley/baseball_R/deployments',
  created_at: '2016-01-02T14:34:53Z',
  updated_at: '2016-01-02T14:34:57Z',
  pushed_at: '2015-01-08T13:40:10Z',
  git_url: 'git://github.com/micurley/baseball_R.git',
  ssh_url: 'git@github.com:micurley/baseball_R.git',
  clone_url: 'https://github.com/micurley/baseball_R.git',
  svn_url: 'https://github.com/micurley/baseball_R',
  homepage: null,
  size: 31585,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'R',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubRepo repo={dummy_repo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
