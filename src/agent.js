import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://linkifyserver.herokuapp.com';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/register', { user: { username, email, password } })
};


const Links = {
  mylinks: () =>

    requests.get(`/mylinks`),
  mytree: () =>
    requests.get(`/mytree`),
  addLink: (name, link) => requests.post('addlink', { name: name, link: link }),

  shorten: (main_url) =>
    requests.get(`/shorten?main_url=${encode(main_url)}`),
  shortenonce: (main_url) =>
    requests.post('/shortenonce', { main_url }),


};



export default {
  Links,
  Auth,
  setToken: _token => { token = _token; }
};
