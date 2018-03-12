export function saveUser(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
};

export function getUser() {
  if (localStorage.getItem('user') && Object.keys(localStorage.getItem('user')).length) {
    return JSON.parse(localStorage.getItem('user'));
  }
    return null
}

export function logoutUser() {
  localStorage.clear();
  window.location = '/HNClient'
}

export function saveUserToken(token) {
  localStorage.setItem('token', token);
}

export function getUserToken() {
  return localStorage.getItem('token');
}
