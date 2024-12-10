import http from "./httpService";

export async function signupApi(data: object) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function singinApi(data : object) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}