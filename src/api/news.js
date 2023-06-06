import request from "@/api/request";

export function getNewsList(params) {
  return request({
    url: "/news",
    method: "get",
    params,
  });
}
export function getNewsDetail(id) {
  return request({
    url: `/news/${id}`,
    method: "get",
  });
}
export function getNewsDefault() {
  return request({
    url: `/news?populate=image`,
    method: "get",
  });
}
