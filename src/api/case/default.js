import request from "@/api/request";

export function getCaseList(params) {
  return request({
    url: "/cases",
    method: "get",
    params,
  });
}
export function getCaseDefault() {
  return request({
    url: `/cases?populate=image`,
    method: "get",
  });
}
