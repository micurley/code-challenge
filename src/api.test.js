import api from './api';

describe('API smoke test', () => {
  test('retrieves users', () => {
    console.log('Here');
    return api.users('micurley').then(users => {
      console.log('users: ', users);
    });
    // let users = api.users('micurley');
  });

  test('retrieves repos', () => {
    let repos = api.repos('micurley');
    expect(repos).toBeTruthy();
  });
});
