import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import axios from 'axios';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT_PROD = 'https://www.snowaddict.net/api';
const API_ROOT_DEV = 'http://127.0.0.1:8000/api'
const API_ROOT = process.env.NODE_ENV === 'production' ? API_ROOT_PROD : API_ROOT_DEV
// console.log("process.env.NODE_ENV = " + process.env.NODE_ENV)
// console.log("API_ROOT = " + API_ROOT)


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
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  postwithfile: (url, body) =>
    axios.post(`${API_ROOT}${url}`, body, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `token ${token}`
      }
    })
  .then(responseBody)
        .catch(err => console.log(err))

};


const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Subscribe = {
  add: (email) =>
    requests.post('/subscribe', { email } )
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed/'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`),
  byGear: (gear,page) =>
    requests.get(`/profiles/?gear=${encode(gear)}&${limit(10, page)}`),
  all: page =>
    requests.get(`/profiles?${limit(10, page)}`),
};

const People = {
  byGear: (gear,page) =>
    requests.get(`/people/?gear=${encode(gear)}&${limit(10, page)}`),
  all: page =>
    requests.get(`/people?${limit(10, page)}`),
  get: name =>
    requests.get(`/people?name=${name}`),
  retrieve: () =>
    requests.get(`/people`),    
  follow: name =>
    requests.post(`/people?name=${name}/follow`),
  unfollow: name =>
    requests.del(`/people?name=${name}/unfollow`),    

  create: formdata =>
    requests.postwithfile('/people',  formdata )
};


const Gears = {
  all: gear =>
    requests.get(`/gears?${limit(8, gear)}`),
  byPerson: (person, page) =>
    requests.get(`/gears?owned_by=${encode(person)}&${limit(5, page)}`),
  byCategory: (category, page) =>
    requests.get(`/gears?category=${encode(category)}&${limit(8, page)}`),
  get: slug =>
    requests.get(`/gears/${slug}`)
};



const Categories = {
  all: categories => requests.get('/gear/category/')
};

const Brands = {
  all: brands => requests.get('/gear/brand/')
};

export default {
  Articles,
  Auth,
  Subscribe,
  Comments,
  Profile,
  Tags,
  Gears,
  People,
  Categories,
  Brands,
  setToken: _token => { token = _token; }
};
