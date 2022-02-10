import { request } from "./request";

export const getPublicGistsApi = (page = 1) => {
  return request.get(`/gists/public?page=${page}`);
};

// @TODO searchGistsByNameApi
// name = "bogdanq" (брать из инпута)
// => /users/${name}/gists`
