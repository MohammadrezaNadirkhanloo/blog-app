import http from "./httpService";

export async function createCommentApi(data: object, options: object) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllComments(options = {}) {
  return http.get(`/comment/list`, options).then(({ data }) => data.data);
}
