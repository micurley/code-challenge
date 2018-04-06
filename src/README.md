# GDP DesignCircle React Frontend

React repository for GDP Design Circle project

This repository contains the react-based frontend for the gdp designcircle site.

This is a functional repo covering user registration, login, approval, and networking. Content integration is limited to user profiles.

## Local Development

Locally this app uses the webpack hot reload server.

```bash
ln -s dotenv/common .env
npm install
```

Once the app is started the site is located @ http://localhost:3000/

To access the site

```bash
username: admin@globaldesignpost.com
password: password
```

**This should be changed before deploying to production**

## Deploy to Heroku

heroku create gdp-designcircle-react --buildpack https://github.com/mars/create-react-app-buildpack.git
heroku config:set NODE_PATH=src/:src/js
heroku config:set REACT_APP_GOOGLE_ANALYTICS_ID=UA-108442270-1
heroku config:set API_URL=https://<API Location>/v1
heroku config:set API_DOC_URL=https://<API Location>/swagger/v1

git push heroku master #Assuming you are using the master branch
