import React, {Component} from 'react';
import {debounce} from 'lodash/debounce';
import {omit} from 'lodash/omit';

import Search from './Search';
import GithubUser from './GithubUser';
import logo from './logo.svg';
import './App.css';

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
let dummy_repos = [
  {
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    blobs_url:
      'https://api.github.com/repos/micurley/baseball_R/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/baseball_R/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/baseball_R/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/baseball_R/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/baseball_R/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/baseball_R/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/baseball_R/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/baseball_R/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/baseball_R/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/baseball_R/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/baseball_R/commits{/sha}',
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
    pulls_url:
      'https://api.github.com/repos/micurley/baseball_R/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/baseball_R/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/baseball_R/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/baseball_R/labels{/name}',
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
  },
  {
    id: 22699330,
    name: 'chunkdata',
    full_name: 'micurley/chunkdata',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/chunkdata',
    description: 'Django fixture tools for dumping/loading chunked fixtures',
    fork: false,
    url: 'https://api.github.com/repos/micurley/chunkdata',
    forks_url: 'https://api.github.com/repos/micurley/chunkdata/forks',
    keys_url: 'https://api.github.com/repos/micurley/chunkdata/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/chunkdata/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/chunkdata/teams',
    hooks_url: 'https://api.github.com/repos/micurley/chunkdata/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/chunkdata/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/chunkdata/events',
    assignees_url:
      'https://api.github.com/repos/micurley/chunkdata/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/chunkdata/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/chunkdata/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/chunkdata/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/chunkdata/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/chunkdata/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/chunkdata/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/chunkdata/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/chunkdata/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/chunkdata/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/chunkdata/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/chunkdata/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/chunkdata/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/chunkdata/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/chunkdata/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/chunkdata/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/chunkdata/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/chunkdata/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/chunkdata/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/chunkdata/merges',
    archive_url:
      'https://api.github.com/repos/micurley/chunkdata/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/chunkdata/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/chunkdata/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/chunkdata/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/chunkdata/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/chunkdata/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/chunkdata/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/chunkdata/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/chunkdata/deployments',
    created_at: '2014-08-06T21:48:46Z',
    updated_at: '2014-08-06T22:51:54Z',
    pushed_at: '2014-08-06T21:49:01Z',
    git_url: 'git://github.com/micurley/chunkdata.git',
    ssh_url: 'git@github.com:micurley/chunkdata.git',
    clone_url: 'https://github.com/micurley/chunkdata.git',
    svn_url: 'https://github.com/micurley/chunkdata',
    homepage: null,
    size: 464,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
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
  },
  {
    id: 82210974,
    name: 'cors',
    full_name: 'micurley/cors',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/cors',
    description:
      'Webservice to retrive and convert 3rd party web pages to json',
    fork: false,
    url: 'https://api.github.com/repos/micurley/cors',
    forks_url: 'https://api.github.com/repos/micurley/cors/forks',
    keys_url: 'https://api.github.com/repos/micurley/cors/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/cors/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/cors/teams',
    hooks_url: 'https://api.github.com/repos/micurley/cors/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/cors/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/cors/events',
    assignees_url:
      'https://api.github.com/repos/micurley/cors/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/cors/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/cors/tags',
    blobs_url: 'https://api.github.com/repos/micurley/cors/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/micurley/cors/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/micurley/cors/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micurley/cors/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/micurley/cors/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/cors/languages',
    stargazers_url: 'https://api.github.com/repos/micurley/cors/stargazers',
    contributors_url: 'https://api.github.com/repos/micurley/cors/contributors',
    subscribers_url: 'https://api.github.com/repos/micurley/cors/subscribers',
    subscription_url: 'https://api.github.com/repos/micurley/cors/subscription',
    commits_url: 'https://api.github.com/repos/micurley/cors/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/cors/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/cors/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/cors/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/micurley/cors/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/cors/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/cors/merges',
    archive_url:
      'https://api.github.com/repos/micurley/cors/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/cors/downloads',
    issues_url: 'https://api.github.com/repos/micurley/cors/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/cors/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/cors/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/cors/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/cors/labels{/name}',
    releases_url: 'https://api.github.com/repos/micurley/cors/releases{/id}',
    deployments_url: 'https://api.github.com/repos/micurley/cors/deployments',
    created_at: '2017-02-16T18:11:47Z',
    updated_at: '2017-02-16T18:27:37Z',
    pushed_at: '2017-02-23T18:12:00Z',
    git_url: 'git://github.com/micurley/cors.git',
    ssh_url: 'git@github.com:micurley/cors.git',
    clone_url: 'https://github.com/micurley/cors.git',
    svn_url: 'https://github.com/micurley/cors',
    homepage: null,
    size: 35,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
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
  },
  {
    id: 124434498,
    name: 'craft',
    full_name: 'micurley/craft',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/craft',
    description: 'Create React App From Template',
    fork: true,
    url: 'https://api.github.com/repos/micurley/craft',
    forks_url: 'https://api.github.com/repos/micurley/craft/forks',
    keys_url: 'https://api.github.com/repos/micurley/craft/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/craft/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/craft/teams',
    hooks_url: 'https://api.github.com/repos/micurley/craft/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/craft/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/craft/events',
    assignees_url:
      'https://api.github.com/repos/micurley/craft/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/craft/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/craft/tags',
    blobs_url: 'https://api.github.com/repos/micurley/craft/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/micurley/craft/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/micurley/craft/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micurley/craft/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/micurley/craft/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/craft/languages',
    stargazers_url: 'https://api.github.com/repos/micurley/craft/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/craft/contributors',
    subscribers_url: 'https://api.github.com/repos/micurley/craft/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/craft/subscription',
    commits_url: 'https://api.github.com/repos/micurley/craft/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/craft/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/craft/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/craft/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/craft/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/craft/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/craft/merges',
    archive_url:
      'https://api.github.com/repos/micurley/craft/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/craft/downloads',
    issues_url: 'https://api.github.com/repos/micurley/craft/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/craft/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/craft/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/craft/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/craft/labels{/name}',
    releases_url: 'https://api.github.com/repos/micurley/craft/releases{/id}',
    deployments_url: 'https://api.github.com/repos/micurley/craft/deployments',
    created_at: '2018-03-08T18:55:24Z',
    updated_at: '2018-03-08T18:55:26Z',
    pushed_at: '2017-09-21T15:53:24Z',
    git_url: 'git://github.com/micurley/craft.git',
    ssh_url: 'git@github.com:micurley/craft.git',
    clone_url: 'https://github.com/micurley/craft.git',
    svn_url: 'https://github.com/micurley/craft',
    homepage: null,
    size: 77,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
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
  },
  {
    id: 123461393,
    name: 'create-react-app',
    full_name: 'micurley/create-react-app',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/create-react-app',
    description: 'Create React apps with no build configuration.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/create-react-app',
    forks_url: 'https://api.github.com/repos/micurley/create-react-app/forks',
    keys_url:
      'https://api.github.com/repos/micurley/create-react-app/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/create-react-app/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/create-react-app/teams',
    hooks_url: 'https://api.github.com/repos/micurley/create-react-app/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/create-react-app/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/create-react-app/events',
    assignees_url:
      'https://api.github.com/repos/micurley/create-react-app/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/create-react-app/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/create-react-app/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/create-react-app/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/create-react-app/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/create-react-app/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/create-react-app/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/create-react-app/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/create-react-app/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/create-react-app/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/create-react-app/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/create-react-app/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/create-react-app/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/create-react-app/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/create-react-app/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/create-react-app/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/create-react-app/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/create-react-app/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/create-react-app/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/create-react-app/merges',
    archive_url:
      'https://api.github.com/repos/micurley/create-react-app/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/create-react-app/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/create-react-app/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/create-react-app/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/create-react-app/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/create-react-app/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/create-react-app/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/create-react-app/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/create-react-app/deployments',
    created_at: '2018-03-01T16:28:48Z',
    updated_at: '2018-03-01T16:28:53Z',
    pushed_at: '2018-03-01T16:13:44Z',
    git_url: 'git://github.com/micurley/create-react-app.git',
    ssh_url: 'git@github.com:micurley/create-react-app.git',
    clone_url: 'https://github.com/micurley/create-react-app.git',
    svn_url: 'https://github.com/micurley/create-react-app',
    homepage: null,
    size: 5011,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'next',
  },
  {
    id: 107042873,
    name: 'create-react-app-buildpack',
    full_name: 'micurley/create-react-app-buildpack',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/create-react-app-buildpack',
    description:
      'Heroku Buildpack for create-react-app: static hosting for React.js web apps',
    fork: true,
    url: 'https://api.github.com/repos/micurley/create-react-app-buildpack',
    forks_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/forks',
    keys_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/teams',
    hooks_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/events',
    assignees_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/merges',
    archive_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/create-react-app-buildpack/deployments',
    created_at: '2017-10-15T19:35:41Z',
    updated_at: '2017-10-15T19:35:43Z',
    pushed_at: '2017-09-04T17:19:01Z',
    git_url: 'git://github.com/micurley/create-react-app-buildpack.git',
    ssh_url: 'git@github.com:micurley/create-react-app-buildpack.git',
    clone_url: 'https://github.com/micurley/create-react-app-buildpack.git',
    svn_url: 'https://github.com/micurley/create-react-app-buildpack',
    homepage: null,
    size: 109,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
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
  },
  {
    id: 23257504,
    name: 'django-ckeditor',
    full_name: 'micurley/django-ckeditor',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-ckeditor',
    description: 'Django admin CKEditor integration.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-ckeditor',
    forks_url: 'https://api.github.com/repos/micurley/django-ckeditor/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-ckeditor/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-ckeditor/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/django-ckeditor/teams',
    hooks_url: 'https://api.github.com/repos/micurley/django-ckeditor/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-ckeditor/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/django-ckeditor/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-ckeditor/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-ckeditor/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/django-ckeditor/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-ckeditor/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-ckeditor/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-ckeditor/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-ckeditor/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-ckeditor/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-ckeditor/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-ckeditor/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-ckeditor/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-ckeditor/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-ckeditor/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-ckeditor/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-ckeditor/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-ckeditor/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-ckeditor/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-ckeditor/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-ckeditor/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/django-ckeditor/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-ckeditor/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-ckeditor/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-ckeditor/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-ckeditor/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-ckeditor/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-ckeditor/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-ckeditor/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-ckeditor/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-ckeditor/deployments',
    created_at: '2014-08-23T14:16:27Z',
    updated_at: '2014-08-16T04:46:33Z',
    pushed_at: '2014-04-12T18:50:03Z',
    git_url: 'git://github.com/micurley/django-ckeditor.git',
    ssh_url: 'git@github.com:micurley/django-ckeditor.git',
    clone_url: 'https://github.com/micurley/django-ckeditor.git',
    svn_url: 'https://github.com/micurley/django-ckeditor',
    homepage: '',
    size: 7937,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: null,
      url: null,
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 28926415,
    name: 'django-cms-clippings',
    full_name: 'micurley/django-cms-clippings',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-cms-clippings',
    description:
      'Include content, editable via django-cms, in your application.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-cms-clippings',
    forks_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/teams',
    hooks_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/django-cms-clippings/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-cms-clippings/deployments',
    created_at: '2015-01-07T17:55:05Z',
    updated_at: '2015-01-07T21:41:43Z',
    pushed_at: '2015-01-07T21:41:42Z',
    git_url: 'git://github.com/micurley/django-cms-clippings.git',
    ssh_url: 'git@github.com:micurley/django-cms-clippings.git',
    clone_url: 'https://github.com/micurley/django-cms-clippings.git',
    svn_url: 'https://github.com/micurley/django-cms-clippings',
    homepage: null,
    size: 90,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: null,
      url: null,
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 110363695,
    name: 'django-events',
    full_name: 'micurley/django-events',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-events',
    description: 'A calendaring app for Django. Forked from django-schedule.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-events',
    forks_url: 'https://api.github.com/repos/micurley/django-events/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-events/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-events/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/django-events/teams',
    hooks_url: 'https://api.github.com/repos/micurley/django-events/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-events/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/django-events/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-events/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-events/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/django-events/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-events/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-events/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-events/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-events/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-events/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-events/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-events/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-events/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-events/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-events/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-events/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-events/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-events/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-events/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-events/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-events/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/django-events/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-events/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-events/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-events/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-events/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-events/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-events/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-events/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-events/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-events/deployments',
    created_at: '2017-11-11T17:04:43Z',
    updated_at: '2017-11-11T17:04:46Z',
    pushed_at: '2017-10-30T12:26:54Z',
    git_url: 'git://github.com/micurley/django-events.git',
    ssh_url: 'git@github.com:micurley/django-events.git',
    clone_url: 'https://github.com/micurley/django-events.git',
    svn_url: 'https://github.com/micurley/django-events',
    homepage: '',
    size: 1776,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
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
  },
  {
    id: 23264561,
    name: 'django-fluent-comments',
    full_name: 'micurley/django-fluent-comments',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-fluent-comments',
    description: 'A modern, ajax-based appearance for django.contrib.comments',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-fluent-comments',
    forks_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/teams',
    hooks_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-fluent-comments/deployments',
    created_at: '2014-08-23T19:37:50Z',
    updated_at: '2016-06-20T13:33:41Z',
    pushed_at: '2014-07-21T09:01:52Z',
    git_url: 'git://github.com/micurley/django-fluent-comments.git',
    ssh_url: 'git@github.com:micurley/django-fluent-comments.git',
    clone_url: 'https://github.com/micurley/django-fluent-comments.git',
    svn_url: 'https://github.com/micurley/django-fluent-comments',
    homepage: 'http://django-fluent.org/',
    size: 594,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 68244179,
    name: 'django-project-template',
    full_name: 'micurley/django-project-template',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-project-template',
    description: 'Django project template for startproject (Requires 1.8+)',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-project-template',
    forks_url:
      'https://api.github.com/repos/micurley/django-project-template/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-project-template/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-project-template/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/micurley/django-project-template/teams',
    hooks_url:
      'https://api.github.com/repos/micurley/django-project-template/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-project-template/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/micurley/django-project-template/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-project-template/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-project-template/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/micurley/django-project-template/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-project-template/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-project-template/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-project-template/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-project-template/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-project-template/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-project-template/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-project-template/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-project-template/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-project-template/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-project-template/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-project-template/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-project-template/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-project-template/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-project-template/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-project-template/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-project-template/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/micurley/django-project-template/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-project-template/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-project-template/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-project-template/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-project-template/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-project-template/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-project-template/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-project-template/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-project-template/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-project-template/deployments',
    created_at: '2016-09-14T21:17:44Z',
    updated_at: '2016-09-14T21:17:45Z',
    pushed_at: '2016-09-14T14:49:33Z',
    git_url: 'git://github.com/micurley/django-project-template.git',
    ssh_url: 'git@github.com:micurley/django-project-template.git',
    clone_url: 'https://github.com/micurley/django-project-template.git',
    svn_url: 'https://github.com/micurley/django-project-template',
    homepage: '',
    size: 1632,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
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
  },
  {
    id: 23206001,
    name: 'django-s3storage',
    full_name: 'micurley/django-s3storage',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-s3storage',
    description: 'Our in-house version of s3boto from django-storages.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-s3storage',
    forks_url: 'https://api.github.com/repos/micurley/django-s3storage/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-s3storage/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-s3storage/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/django-s3storage/teams',
    hooks_url: 'https://api.github.com/repos/micurley/django-s3storage/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-s3storage/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/django-s3storage/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-s3storage/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-s3storage/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/django-s3storage/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-s3storage/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-s3storage/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-s3storage/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-s3storage/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-s3storage/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-s3storage/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-s3storage/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-s3storage/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-s3storage/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-s3storage/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-s3storage/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-s3storage/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-s3storage/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-s3storage/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-s3storage/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-s3storage/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/django-s3storage/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-s3storage/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-s3storage/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-s3storage/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-s3storage/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-s3storage/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-s3storage/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-s3storage/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-s3storage/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-s3storage/deployments',
    created_at: '2014-08-21T23:12:36Z',
    updated_at: '2014-08-08T13:28:29Z',
    pushed_at: '2012-05-30T23:02:28Z',
    git_url: 'git://github.com/micurley/django-s3storage.git',
    ssh_url: 'git@github.com:micurley/django-s3storage.git',
    clone_url: 'https://github.com/micurley/django-s3storage.git',
    svn_url: 'https://github.com/micurley/django-s3storage',
    homepage: null,
    size: 100,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
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
  },
  {
    id: 30848879,
    name: 'django-userena',
    full_name: 'micurley/django-userena',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/django-userena',
    description: 'Accounts for Django made beautifully simple',
    fork: true,
    url: 'https://api.github.com/repos/micurley/django-userena',
    forks_url: 'https://api.github.com/repos/micurley/django-userena/forks',
    keys_url:
      'https://api.github.com/repos/micurley/django-userena/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/django-userena/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/django-userena/teams',
    hooks_url: 'https://api.github.com/repos/micurley/django-userena/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/django-userena/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/django-userena/events',
    assignees_url:
      'https://api.github.com/repos/micurley/django-userena/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/django-userena/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/django-userena/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/django-userena/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/django-userena/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/django-userena/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/django-userena/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/django-userena/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/django-userena/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/django-userena/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/django-userena/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/django-userena/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/django-userena/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/django-userena/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/django-userena/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/django-userena/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/django-userena/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/django-userena/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/django-userena/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/django-userena/merges',
    archive_url:
      'https://api.github.com/repos/micurley/django-userena/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/django-userena/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/django-userena/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/django-userena/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/django-userena/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/django-userena/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/django-userena/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/django-userena/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/django-userena/deployments',
    created_at: '2015-02-16T01:13:19Z',
    updated_at: '2015-02-16T01:13:20Z',
    pushed_at: '2015-02-06T15:44:20Z',
    git_url: 'git://github.com/micurley/django-userena.git',
    ssh_url: 'git@github.com:micurley/django-userena.git',
    clone_url: 'https://github.com/micurley/django-userena.git',
    svn_url: 'https://github.com/micurley/django-userena',
    homepage: 'http://django-userena.org',
    size: 3658,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'bsd-3-clause',
      name: 'BSD 3-Clause "New" or "Revised" License',
      spdx_id: 'BSD-3-Clause',
      url: 'https://api.github.com/licenses/bsd-3-clause',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 119264992,
    name: 'drf-dynamic-fields',
    full_name: 'micurley/drf-dynamic-fields',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/drf-dynamic-fields',
    description:
      'Dynamically select only a subset of fields per DRF resource, either using a whitelist or a blacklist.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/drf-dynamic-fields',
    forks_url: 'https://api.github.com/repos/micurley/drf-dynamic-fields/forks',
    keys_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/drf-dynamic-fields/teams',
    hooks_url: 'https://api.github.com/repos/micurley/drf-dynamic-fields/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/events',
    assignees_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/drf-dynamic-fields/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/merges',
    archive_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/drf-dynamic-fields/deployments',
    created_at: '2018-01-28T14:20:08Z',
    updated_at: '2018-01-28T14:20:10Z',
    pushed_at: '2017-11-24T19:26:17Z',
    git_url: 'git://github.com/micurley/drf-dynamic-fields.git',
    ssh_url: 'git@github.com:micurley/drf-dynamic-fields.git',
    clone_url: 'https://github.com/micurley/drf-dynamic-fields.git',
    svn_url: 'https://github.com/micurley/drf-dynamic-fields',
    homepage: '',
    size: 28,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
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
  },
  {
    id: 39736720,
    name: 'ezdz',
    full_name: 'micurley/ezdz',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/ezdz',
    description:
      'A jQuery plugin to turn any standard input type file into a nice drag & drop zone with validators and previews.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/ezdz',
    forks_url: 'https://api.github.com/repos/micurley/ezdz/forks',
    keys_url: 'https://api.github.com/repos/micurley/ezdz/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/ezdz/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/ezdz/teams',
    hooks_url: 'https://api.github.com/repos/micurley/ezdz/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/ezdz/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/ezdz/events',
    assignees_url:
      'https://api.github.com/repos/micurley/ezdz/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/ezdz/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/ezdz/tags',
    blobs_url: 'https://api.github.com/repos/micurley/ezdz/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/micurley/ezdz/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/micurley/ezdz/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micurley/ezdz/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/micurley/ezdz/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/ezdz/languages',
    stargazers_url: 'https://api.github.com/repos/micurley/ezdz/stargazers',
    contributors_url: 'https://api.github.com/repos/micurley/ezdz/contributors',
    subscribers_url: 'https://api.github.com/repos/micurley/ezdz/subscribers',
    subscription_url: 'https://api.github.com/repos/micurley/ezdz/subscription',
    commits_url: 'https://api.github.com/repos/micurley/ezdz/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/ezdz/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/ezdz/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/ezdz/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/micurley/ezdz/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/ezdz/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/ezdz/merges',
    archive_url:
      'https://api.github.com/repos/micurley/ezdz/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/ezdz/downloads',
    issues_url: 'https://api.github.com/repos/micurley/ezdz/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/ezdz/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/ezdz/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/ezdz/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/ezdz/labels{/name}',
    releases_url: 'https://api.github.com/repos/micurley/ezdz/releases{/id}',
    deployments_url: 'https://api.github.com/repos/micurley/ezdz/deployments',
    created_at: '2015-07-26T18:30:16Z',
    updated_at: '2015-07-26T18:30:17Z',
    pushed_at: '2014-12-16T10:29:49Z',
    git_url: 'git://github.com/micurley/ezdz.git',
    ssh_url: 'git@github.com:micurley/ezdz.git',
    clone_url: 'https://github.com/micurley/ezdz.git',
    svn_url: 'https://github.com/micurley/ezdz',
    homepage: '',
    size: 404,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 10084508,
    name: 'factory_boy',
    full_name: 'micurley/factory_boy',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/factory_boy',
    description:
      "A test fixtures replacement for Python based on thoughtbot's factory_girl for Ruby.",
    fork: true,
    url: 'https://api.github.com/repos/micurley/factory_boy',
    forks_url: 'https://api.github.com/repos/micurley/factory_boy/forks',
    keys_url: 'https://api.github.com/repos/micurley/factory_boy/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/factory_boy/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/factory_boy/teams',
    hooks_url: 'https://api.github.com/repos/micurley/factory_boy/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/factory_boy/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/factory_boy/events',
    assignees_url:
      'https://api.github.com/repos/micurley/factory_boy/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/factory_boy/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/factory_boy/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/factory_boy/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/factory_boy/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/factory_boy/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/factory_boy/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/factory_boy/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/factory_boy/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/factory_boy/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/factory_boy/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/factory_boy/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/factory_boy/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/factory_boy/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/factory_boy/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/factory_boy/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/factory_boy/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/factory_boy/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/factory_boy/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/factory_boy/merges',
    archive_url:
      'https://api.github.com/repos/micurley/factory_boy/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/factory_boy/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/factory_boy/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/factory_boy/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/factory_boy/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/factory_boy/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/factory_boy/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/factory_boy/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/factory_boy/deployments',
    created_at: '2013-05-15T17:46:02Z',
    updated_at: '2013-07-03T15:57:26Z',
    pushed_at: '2013-05-15T22:59:52Z',
    git_url: 'git://github.com/micurley/factory_boy.git',
    ssh_url: 'git@github.com:micurley/factory_boy.git',
    clone_url: 'https://github.com/micurley/factory_boy.git',
    svn_url: 'https://github.com/micurley/factory_boy',
    homepage: '',
    size: 357,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 22620898,
    name: 'funcparserlib',
    full_name: 'micurley/funcparserlib',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/funcparserlib',
    description:
      'Recursive descent parsing library for Python based on functional combinators',
    fork: true,
    url: 'https://api.github.com/repos/micurley/funcparserlib',
    forks_url: 'https://api.github.com/repos/micurley/funcparserlib/forks',
    keys_url:
      'https://api.github.com/repos/micurley/funcparserlib/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/funcparserlib/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/funcparserlib/teams',
    hooks_url: 'https://api.github.com/repos/micurley/funcparserlib/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/funcparserlib/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/funcparserlib/events',
    assignees_url:
      'https://api.github.com/repos/micurley/funcparserlib/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/funcparserlib/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/funcparserlib/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/funcparserlib/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/funcparserlib/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/funcparserlib/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/funcparserlib/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/funcparserlib/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/funcparserlib/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/funcparserlib/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/funcparserlib/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/funcparserlib/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/funcparserlib/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/funcparserlib/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/funcparserlib/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/funcparserlib/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/funcparserlib/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/funcparserlib/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/funcparserlib/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/funcparserlib/merges',
    archive_url:
      'https://api.github.com/repos/micurley/funcparserlib/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/funcparserlib/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/funcparserlib/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/funcparserlib/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/funcparserlib/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/funcparserlib/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/funcparserlib/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/funcparserlib/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/funcparserlib/deployments',
    created_at: '2014-08-04T21:38:19Z',
    updated_at: '2014-05-27T12:20:43Z',
    pushed_at: '2012-02-09T00:34:23Z',
    git_url: 'git://github.com/micurley/funcparserlib.git',
    ssh_url: 'git@github.com:micurley/funcparserlib.git',
    clone_url: 'https://github.com/micurley/funcparserlib.git',
    svn_url: 'https://github.com/micurley/funcparserlib',
    homepage: 'http://code.google.com/p/funcparserlib/',
    size: 956,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 89505761,
    name: 'haralyzer',
    full_name: 'micurley/haralyzer',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/haralyzer',
    description: 'A Framework For Using HAR Files To Analyze Web Pages',
    fork: true,
    url: 'https://api.github.com/repos/micurley/haralyzer',
    forks_url: 'https://api.github.com/repos/micurley/haralyzer/forks',
    keys_url: 'https://api.github.com/repos/micurley/haralyzer/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/haralyzer/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/haralyzer/teams',
    hooks_url: 'https://api.github.com/repos/micurley/haralyzer/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/haralyzer/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/haralyzer/events',
    assignees_url:
      'https://api.github.com/repos/micurley/haralyzer/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/haralyzer/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/haralyzer/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/haralyzer/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/haralyzer/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/haralyzer/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/haralyzer/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/haralyzer/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/haralyzer/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/haralyzer/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/haralyzer/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/haralyzer/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/haralyzer/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/haralyzer/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/haralyzer/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/haralyzer/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/haralyzer/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/haralyzer/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/haralyzer/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/haralyzer/merges',
    archive_url:
      'https://api.github.com/repos/micurley/haralyzer/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/haralyzer/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/haralyzer/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/haralyzer/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/haralyzer/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/haralyzer/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/haralyzer/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/haralyzer/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/haralyzer/deployments',
    created_at: '2017-04-26T16:55:02Z',
    updated_at: '2017-04-26T16:55:04Z',
    pushed_at: '2017-01-04T02:03:44Z',
    git_url: 'git://github.com/micurley/haralyzer.git',
    ssh_url: 'git@github.com:micurley/haralyzer.git',
    clone_url: 'https://github.com/micurley/haralyzer.git',
    svn_url: 'https://github.com/micurley/haralyzer',
    homepage: null,
    size: 172,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
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
  },
  {
    id: 107799833,
    name: 'heroku-django-template',
    full_name: 'micurley/heroku-django-template',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/heroku-django-template',
    description:
      'A Django 1.11 base template featuring all recommended best practices for deployment on Heroku and local development. ',
    fork: true,
    url: 'https://api.github.com/repos/micurley/heroku-django-template',
    forks_url:
      'https://api.github.com/repos/micurley/heroku-django-template/forks',
    keys_url:
      'https://api.github.com/repos/micurley/heroku-django-template/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/heroku-django-template/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/micurley/heroku-django-template/teams',
    hooks_url:
      'https://api.github.com/repos/micurley/heroku-django-template/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/heroku-django-template/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/micurley/heroku-django-template/events',
    assignees_url:
      'https://api.github.com/repos/micurley/heroku-django-template/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/heroku-django-template/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/micurley/heroku-django-template/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/heroku-django-template/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/heroku-django-template/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/heroku-django-template/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/heroku-django-template/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/heroku-django-template/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/heroku-django-template/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/heroku-django-template/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/heroku-django-template/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/heroku-django-template/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/heroku-django-template/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/heroku-django-template/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/heroku-django-template/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/heroku-django-template/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/heroku-django-template/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/heroku-django-template/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/heroku-django-template/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/micurley/heroku-django-template/merges',
    archive_url:
      'https://api.github.com/repos/micurley/heroku-django-template/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/heroku-django-template/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/heroku-django-template/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/heroku-django-template/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/heroku-django-template/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/heroku-django-template/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/heroku-django-template/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/heroku-django-template/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/heroku-django-template/deployments',
    created_at: '2017-10-21T17:14:36Z',
    updated_at: '2017-10-21T17:14:38Z',
    pushed_at: '2017-10-19T12:09:44Z',
    git_url: 'git://github.com/micurley/heroku-django-template.git',
    ssh_url: 'git@github.com:micurley/heroku-django-template.git',
    clone_url: 'https://github.com/micurley/heroku-django-template.git',
    svn_url: 'https://github.com/micurley/heroku-django-template',
    homepage: 'https://www.heroku.com/python',
    size: 51,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
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
  },
  {
    id: 14572048,
    name: 'honcho',
    full_name: 'micurley/honcho',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/honcho',
    description:
      'Honcho: a python clone of Foreman. For managing Procfile-based applications.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/honcho',
    forks_url: 'https://api.github.com/repos/micurley/honcho/forks',
    keys_url: 'https://api.github.com/repos/micurley/honcho/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/honcho/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/honcho/teams',
    hooks_url: 'https://api.github.com/repos/micurley/honcho/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/honcho/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/honcho/events',
    assignees_url:
      'https://api.github.com/repos/micurley/honcho/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/honcho/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/honcho/tags',
    blobs_url: 'https://api.github.com/repos/micurley/honcho/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/micurley/honcho/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/micurley/honcho/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micurley/honcho/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/micurley/honcho/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/honcho/languages',
    stargazers_url: 'https://api.github.com/repos/micurley/honcho/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/honcho/contributors',
    subscribers_url: 'https://api.github.com/repos/micurley/honcho/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/honcho/subscription',
    commits_url: 'https://api.github.com/repos/micurley/honcho/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/honcho/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/honcho/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/honcho/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/honcho/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/honcho/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/honcho/merges',
    archive_url:
      'https://api.github.com/repos/micurley/honcho/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/honcho/downloads',
    issues_url: 'https://api.github.com/repos/micurley/honcho/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/honcho/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/honcho/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/honcho/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/honcho/labels{/name}',
    releases_url: 'https://api.github.com/repos/micurley/honcho/releases{/id}',
    deployments_url: 'https://api.github.com/repos/micurley/honcho/deployments',
    created_at: '2013-11-20T23:15:09Z',
    updated_at: '2013-11-21T21:19:24Z',
    pushed_at: '2013-11-21T21:19:19Z',
    git_url: 'git://github.com/micurley/honcho.git',
    ssh_url: 'git@github.com:micurley/honcho.git',
    clone_url: 'https://github.com/micurley/honcho.git',
    svn_url: 'https://github.com/micurley/honcho',
    homepage: 'http://pypi.python.org/pypi/honcho',
    size: 167,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 31073871,
    name: 'jekyll-import',
    full_name: 'micurley/jekyll-import',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/jekyll-import',
    description:
      'The Jekyll import command for importing from various blogs to Jekyll format.',
    fork: true,
    url: 'https://api.github.com/repos/micurley/jekyll-import',
    forks_url: 'https://api.github.com/repos/micurley/jekyll-import/forks',
    keys_url:
      'https://api.github.com/repos/micurley/jekyll-import/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/jekyll-import/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/jekyll-import/teams',
    hooks_url: 'https://api.github.com/repos/micurley/jekyll-import/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/jekyll-import/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/jekyll-import/events',
    assignees_url:
      'https://api.github.com/repos/micurley/jekyll-import/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/jekyll-import/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/jekyll-import/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/jekyll-import/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/jekyll-import/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/jekyll-import/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/jekyll-import/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/jekyll-import/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/jekyll-import/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/jekyll-import/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/jekyll-import/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/jekyll-import/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/jekyll-import/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/jekyll-import/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/jekyll-import/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/jekyll-import/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/jekyll-import/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/jekyll-import/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/jekyll-import/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/jekyll-import/merges',
    archive_url:
      'https://api.github.com/repos/micurley/jekyll-import/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/jekyll-import/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/jekyll-import/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/jekyll-import/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/jekyll-import/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/jekyll-import/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/jekyll-import/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/jekyll-import/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/jekyll-import/deployments',
    created_at: '2015-02-20T16:38:27Z',
    updated_at: '2015-02-21T21:52:35Z',
    pushed_at: '2015-02-21T21:52:35Z',
    git_url: 'git://github.com/micurley/jekyll-import.git',
    ssh_url: 'git@github.com:micurley/jekyll-import.git',
    clone_url: 'https://github.com/micurley/jekyll-import.git',
    svn_url: 'https://github.com/micurley/jekyll-import',
    homepage: 'http://import.jekyllrb.com',
    size: 901,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Ruby',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 31392383,
    name: 'jekyllbot',
    full_name: 'micurley/jekyllbot',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/jekyllbot',
    description:
      'Listens for GitHub post-recieve service hooks messages, runs jekyll, and pushes the results back to GitHub. ',
    fork: true,
    url: 'https://api.github.com/repos/micurley/jekyllbot',
    forks_url: 'https://api.github.com/repos/micurley/jekyllbot/forks',
    keys_url: 'https://api.github.com/repos/micurley/jekyllbot/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/jekyllbot/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/jekyllbot/teams',
    hooks_url: 'https://api.github.com/repos/micurley/jekyllbot/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/jekyllbot/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/jekyllbot/events',
    assignees_url:
      'https://api.github.com/repos/micurley/jekyllbot/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/jekyllbot/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/jekyllbot/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/jekyllbot/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/jekyllbot/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/jekyllbot/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/jekyllbot/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/jekyllbot/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/jekyllbot/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/jekyllbot/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/jekyllbot/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/jekyllbot/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/jekyllbot/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/jekyllbot/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/jekyllbot/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/jekyllbot/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/jekyllbot/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/jekyllbot/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/jekyllbot/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/jekyllbot/merges',
    archive_url:
      'https://api.github.com/repos/micurley/jekyllbot/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/jekyllbot/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/jekyllbot/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/jekyllbot/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/jekyllbot/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/jekyllbot/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/jekyllbot/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/jekyllbot/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/jekyllbot/deployments',
    created_at: '2015-02-26T22:33:17Z',
    updated_at: '2015-03-01T22:32:12Z',
    pushed_at: '2015-03-01T22:32:12Z',
    git_url: 'git://github.com/micurley/jekyllbot.git',
    ssh_url: 'git@github.com:micurley/jekyllbot.git',
    clone_url: 'https://github.com/micurley/jekyllbot.git',
    svn_url: 'https://github.com/micurley/jekyllbot',
    homepage: null,
    size: 180,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Ruby',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 23493514,
    name: 'markdown-editor',
    full_name: 'micurley/markdown-editor',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/markdown-editor',
    description: 'Live (Github-flavored) Markdown Editor',
    fork: true,
    url: 'https://api.github.com/repos/micurley/markdown-editor',
    forks_url: 'https://api.github.com/repos/micurley/markdown-editor/forks',
    keys_url:
      'https://api.github.com/repos/micurley/markdown-editor/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/markdown-editor/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/markdown-editor/teams',
    hooks_url: 'https://api.github.com/repos/micurley/markdown-editor/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/markdown-editor/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/markdown-editor/events',
    assignees_url:
      'https://api.github.com/repos/micurley/markdown-editor/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/markdown-editor/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/markdown-editor/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/markdown-editor/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/markdown-editor/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/markdown-editor/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/markdown-editor/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/markdown-editor/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/markdown-editor/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/markdown-editor/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/markdown-editor/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/markdown-editor/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/markdown-editor/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/markdown-editor/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/markdown-editor/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/markdown-editor/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/markdown-editor/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/markdown-editor/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/markdown-editor/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/markdown-editor/merges',
    archive_url:
      'https://api.github.com/repos/micurley/markdown-editor/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/markdown-editor/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/markdown-editor/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/markdown-editor/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/markdown-editor/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/markdown-editor/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/markdown-editor/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/markdown-editor/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/markdown-editor/deployments',
    created_at: '2014-08-30T14:37:45Z',
    updated_at: '2014-08-30T14:04:23Z',
    pushed_at: '2014-02-20T21:34:13Z',
    git_url: 'git://github.com/micurley/markdown-editor.git',
    ssh_url: 'git@github.com:micurley/markdown-editor.git',
    clone_url: 'https://github.com/micurley/markdown-editor.git',
    svn_url: 'https://github.com/micurley/markdown-editor',
    homepage: 'http://jbt.github.com/markdown-editor',
    size: 422,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
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
    default_branch: 'gh-pages',
  },
  {
    id: 12543481,
    name: 'nginx-buildpack',
    full_name: 'micurley/nginx-buildpack',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/nginx-buildpack',
    description: 'Run NGINX in front of your app server on Heroku',
    fork: true,
    url: 'https://api.github.com/repos/micurley/nginx-buildpack',
    forks_url: 'https://api.github.com/repos/micurley/nginx-buildpack/forks',
    keys_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/nginx-buildpack/teams',
    hooks_url: 'https://api.github.com/repos/micurley/nginx-buildpack/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/nginx-buildpack/events',
    assignees_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/nginx-buildpack/tags',
    blobs_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/languages',
    stargazers_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/subscription',
    commits_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/nginx-buildpack/merges',
    archive_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/downloads',
    issues_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/labels{/name}',
    releases_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/nginx-buildpack/deployments',
    created_at: '2013-09-02T15:41:31Z',
    updated_at: '2013-09-03T03:16:10Z',
    pushed_at: '2013-09-03T03:16:10Z',
    git_url: 'git://github.com/micurley/nginx-buildpack.git',
    ssh_url: 'git@github.com:micurley/nginx-buildpack.git',
    clone_url: 'https://github.com/micurley/nginx-buildpack.git',
    svn_url: 'https://github.com/micurley/nginx-buildpack',
    homepage: '',
    size: 124,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Shell',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
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
  },
  {
    id: 31604901,
    name: 'prn',
    full_name: 'micurley/prn',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/prn',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/micurley/prn',
    forks_url: 'https://api.github.com/repos/micurley/prn/forks',
    keys_url: 'https://api.github.com/repos/micurley/prn/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/prn/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/prn/teams',
    hooks_url: 'https://api.github.com/repos/micurley/prn/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/prn/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/prn/events',
    assignees_url: 'https://api.github.com/repos/micurley/prn/assignees{/user}',
    branches_url: 'https://api.github.com/repos/micurley/prn/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/prn/tags',
    blobs_url: 'https://api.github.com/repos/micurley/prn/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/micurley/prn/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/micurley/prn/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micurley/prn/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/micurley/prn/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/prn/languages',
    stargazers_url: 'https://api.github.com/repos/micurley/prn/stargazers',
    contributors_url: 'https://api.github.com/repos/micurley/prn/contributors',
    subscribers_url: 'https://api.github.com/repos/micurley/prn/subscribers',
    subscription_url: 'https://api.github.com/repos/micurley/prn/subscription',
    commits_url: 'https://api.github.com/repos/micurley/prn/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/prn/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/micurley/prn/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/prn/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/micurley/prn/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/prn/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/prn/merges',
    archive_url:
      'https://api.github.com/repos/micurley/prn/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/prn/downloads',
    issues_url: 'https://api.github.com/repos/micurley/prn/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/prn/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/prn/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/prn/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/prn/labels{/name}',
    releases_url: 'https://api.github.com/repos/micurley/prn/releases{/id}',
    deployments_url: 'https://api.github.com/repos/micurley/prn/deployments',
    created_at: '2015-03-03T15:17:21Z',
    updated_at: '2015-05-08T17:46:31Z',
    pushed_at: '2015-09-14T13:16:14Z',
    git_url: 'git://github.com/micurley/prn.git',
    ssh_url: 'git@github.com:micurley/prn.git',
    clone_url: 'https://github.com/micurley/prn.git',
    svn_url: 'https://github.com/micurley/prn',
    homepage: null,
    size: 429988,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'gh-pages',
  },
  {
    id: 109617988,
    name: 'Vataxia',
    full_name: 'micurley/Vataxia',
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
      starred_url:
        'https://api.github.com/users/micurley/starred{/owner}{/repo}',
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
    html_url: 'https://github.com/micurley/Vataxia',
    description:
      'Open source social network built with Django and Django REST framework',
    fork: true,
    url: 'https://api.github.com/repos/micurley/Vataxia',
    forks_url: 'https://api.github.com/repos/micurley/Vataxia/forks',
    keys_url: 'https://api.github.com/repos/micurley/Vataxia/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/micurley/Vataxia/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micurley/Vataxia/teams',
    hooks_url: 'https://api.github.com/repos/micurley/Vataxia/hooks',
    issue_events_url:
      'https://api.github.com/repos/micurley/Vataxia/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micurley/Vataxia/events',
    assignees_url:
      'https://api.github.com/repos/micurley/Vataxia/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/micurley/Vataxia/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micurley/Vataxia/tags',
    blobs_url: 'https://api.github.com/repos/micurley/Vataxia/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/micurley/Vataxia/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/micurley/Vataxia/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micurley/Vataxia/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/micurley/Vataxia/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micurley/Vataxia/languages',
    stargazers_url: 'https://api.github.com/repos/micurley/Vataxia/stargazers',
    contributors_url:
      'https://api.github.com/repos/micurley/Vataxia/contributors',
    subscribers_url:
      'https://api.github.com/repos/micurley/Vataxia/subscribers',
    subscription_url:
      'https://api.github.com/repos/micurley/Vataxia/subscription',
    commits_url: 'https://api.github.com/repos/micurley/Vataxia/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/micurley/Vataxia/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/micurley/Vataxia/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/micurley/Vataxia/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/micurley/Vataxia/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/micurley/Vataxia/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micurley/Vataxia/merges',
    archive_url:
      'https://api.github.com/repos/micurley/Vataxia/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micurley/Vataxia/downloads',
    issues_url: 'https://api.github.com/repos/micurley/Vataxia/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micurley/Vataxia/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/micurley/Vataxia/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/micurley/Vataxia/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micurley/Vataxia/labels{/name}',
    releases_url: 'https://api.github.com/repos/micurley/Vataxia/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/micurley/Vataxia/deployments',
    created_at: '2017-11-05T21:29:47Z',
    updated_at: '2017-11-05T21:29:49Z',
    pushed_at: '2017-11-05T21:34:16Z',
    git_url: 'git://github.com/micurley/Vataxia.git',
    ssh_url: 'git@github.com:micurley/Vataxia.git',
    clone_url: 'https://github.com/micurley/Vataxia.git',
    svn_url: 'https://github.com/micurley/Vataxia',
    homepage: 'http://vataxia.net/',
    size: 2827,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
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
  },
];

class App extends Component {
  state = {
    search_term: null,
    user: null,
    repos: null,
  };

  componentDidCatch = err => {
    console.log('componentDidCatch err: ', err);
  };

  updateSearchTerm = search_term => {
    this.setState({search_term});
  };

  render = () => {
    let state = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Search onChange={this.updateSearchTerm} is_set={state.search_term} />
        </div>

        <div className="Github Users">
          <GithubUser
            user={dummy_user}
            onClick={() => console.log('clicked githubuser: ')}
          />
        </div>

        <div className="Github Repos">
          <h2>Github Repos</h2>
        </div>
      </div>
    );
  };
}

export default App;
