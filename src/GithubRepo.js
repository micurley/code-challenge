import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import bytes from 'bytes';

import './GithubRepo.css';

// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const GithubRepo = ({repo}) => {
  let {
    name,
    full_name,
    description,
    html_url,
    stargazers_count,
    forks_count,
    open_issues_count,
    size,
    created_at,
  } = repo;

  return (
    <div className="GithubRepo wrapper">
      <div className="container">
        <h3 className="details">
          <a href={html_url} target="github">
            {name}
          </a>
          <br />
          <span>
            {bytes(size, {thousandsSeparator: ',', decimalPlaces: 0})}
          </span>
        </h3>
        <div className="description">{description}</div>

        <ul className="statistics">
          <li>stars: {stargazers_count}</li>
          <li>forks: {forks_count}</li>
          <li>open issues: {open_issues_count}</li>
        </ul>
      </div>
    </div>
  );
};

GithubRepo.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fork: PropTypes.bool,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      pushed_at: PropTypes.string.isRequired,
      git_url: PropTypes.string.isRequired,
      ssh_url: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      watchers_count: PropTypes.number.isRequired,
      language: PropTypes.string,
      has_issues: PropTypes.bool,
      forks_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      forks: PropTypes.number.isRequired,
      open_issues: PropTypes.number.isRequired,
    }),
  ),
};

export default GithubRepo;
