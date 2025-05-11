export const BASEURL = "http://localhost:8080/";

export function callApi(reqmethod, url, data, responseHandler) {
  var option;
  if (reqmethod === "GET" || reqmethod === "DELETE")
    option = { method: reqmethod, headers: { "Content-Type": "application/json" } };
  else
    option = {
      method: reqmethod,
      headers: { "Content-Type": "application/json" },
      body: data,
    };

  fetch(url, option)
    .then((response) => {
      if (!response.ok) throw new Error(response.status + " " + response.statusText);
      return response.text();
    })
    .then((data) => responseHandler(data))
    .catch((error) => alert(error));
}

// Session Management using sessionStorage
export const setSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const getSession = (key) => {
  return sessionStorage.getItem(key);
};

export const clearSession = (key) => {
  sessionStorage.removeItem(key);
};
