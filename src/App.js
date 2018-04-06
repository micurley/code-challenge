import React, {Component} from 'react';
import {debounce} from 'lodash/debounce';
import {omit} from 'lodash/omit';
import api from './api';

import Search from './Search';
import GithubUser from './GithubUser';
import GithubRepo from './GithubRepo';
import './App.css';

class App extends Component {
  state = {
    search_term: null,
    users: [],
    user_not_found: false,
    repos: [],
    repos_not_found: false,
  };

  searchUsers = async term => {
    try {
      let users = await api.users(term);
      this.setState(
        {users, user_not_found: false, repos_not_found: false},
        () => {
          this.state.users.length === 1 &&
            this.searchRepos(this.state.users[0].login);
        },
      );
    } catch (err) {
      this.setState({users: [], user_not_found: true, repos_not_found: false});
    }
  };

  searchRepos = async term => {
    let repos = await api.repos(term);
    try {
      if (repos.length === 0) throw new Error('no repos for this user');
      this.setState({repos, repos_not_found: false});
    } catch (err) {
      this.setState({repos: [], repos_not_found: true});
    }
  };

  componentDidCatch = err => {
    console.log('componentDidCatch err: ', err);
  };

  updateSearchTerm = search_term => {
    if (search_term) {
      this.setState({search_term}, () =>
        this.searchUsers(this.state.search_term),
      );
    } else {
      this.setState({search_term: null, users: [], repos: []});
    }
  };

  render = () => {
    let state = this.state;

    return (
      <div className="App">
        <div className="App-intro">
          <Search onChange={this.updateSearchTerm} is_set={state.search_term} />
        </div>
        {state.user_not_found && <h2>No User found by that name</h2>}
        {state.repos_not_found && <h2>No Repos found for this user</h2>}
        <div className="Github container">
          <div className="Github Users">
            {state.users.map(user => {
              return <GithubUser user={user} />;
            })}
          </div>

          <div className="Github Repos">
            {state.repos.map(repo => {
              return <GithubRepo repo={repo} />;
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default App;
