//
//⚛️ React : Mini-lib pour effectuer plus simplement des requêtes asyncrhones

//


import config from "../config.json";

async function fetchFromAPI(method, path, auth = false, headers = {}, body) {
  try {
    let options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
    }

    if (auth) {
      options.headers.Authorization =
        "Bearer " + localStorage.getItem(config.tokenLocalsotrageName);
    }

    const response = await fetch(config.apiURL + path, options);

    const data = await response.json();

    return { response, data, error: null };
  } catch (e) {
    return { response: null, data: null, error: e };
  }
}

export default {
  get: (path, auth, headers) => fetchFromAPI("GET", path, auth, headers),
  post: (path, auth, headers, body) =>
    fetchFromAPI("POST", path, auth, headers, body),
  put: (path, auth, headers, body) =>
    fetchFromAPI("PUT", path, auth, headers, body),
  delete: (path, auth, headers, body) =>
    fetchFromAPI("DELETE", path, auth, headers, body),
};