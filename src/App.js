import React, {Component} from 'react';
import moment from 'moment-timezone';
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
    remaining_requests: null,
    ratelimit_reset: null,
  };

  searchUsers = async term => {
    try {
      let {users, headers} = await api.users(term);
      let remaining_requests = headers['x-ratelimit-remaining'];
      let ratelimit_reset = parseInt(headers['x-ratelimit-reset'], 10) * 1000;
      this.setState(
        {
          headers,
          users,
          user_not_found: false,
          repos_not_found: false,
          ratelimit_reset,
          remaining_requests,
        },
        () => {
          this.state.users.length === 1 &&
            this.searchRepos(this.state.users[0].login);
        },
      );
    } catch (err) {
      this.setState({
        users: [],
        user_not_found: true,
        repos_not_found: false,
      });
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

    let minutes_to_reset = null;
    if (state.ratelimit_reset) {
      minutes_to_reset = moment(state.ratelimit_reset).diff(
        moment(),
        'minutes',
      );
    }

    return (
      <div className="App">
        <div className="App-intro">
          <Search onChange={this.updateSearchTerm} is_set={state.search_term} />
          <br />
          {minutes_to_reset && (
            <div className="api-access">
              Github API Requests Remaining:{' '}
              <strong>{state.remaining_requests}</strong>{' '}
              <span style={{fontStyle: 'initial'}}>|</span> Will Reset in:{' '}
              <strong>
                {moment.duration(minutes_to_reset, 'minutes').humanize()}
              </strong>
            </div>
          )}
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
              return <GithubRepo key={repo.name} repo={repo} />;
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default App;
