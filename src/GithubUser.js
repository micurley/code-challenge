import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import moment from 'moment-timezone';

import './GithubUser.css';

const GithubUser = ({user, onClick}) => {
  let {
    avatar_url,
    login,
    name,
    location,
    email,
    followers,
    following,
    public_repos,
    public_gists,
    created_at,
  } = user;

  return (
    <div className="GithubUser wrapper" onClick={onClick}>
      <div className="container">
        <div className="avatar">
          <img src={avatar_url} title={name} />
        </div>

        <h1>
          <div className="name">{name}</div>
          <div className="login">{login}</div>
        </h1>

        <div className="rule" />
        {/* not worried about this for now
        <ul className="location">
          <li>
            <FontAwesome name="map-marker" size="1x" />
            {location}
          </li>
          <li>
            <FontAwesome name="envelope-o" size="1x" />
            {email}
          </li>
        </ul>
        <div className="rule" />
        */}
        <ul className="statistics">
          <li>followers: {followers}</li>
          <li>following: {following}</li>
          <li>repos: {public_repos}</li>
        </ul>
      </div>
    </div>
  );
};

GithubUser.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    hireable: PropTypes.boolean,
    bio: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    public_gists: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
};

export default GithubUser;
