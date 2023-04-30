import request from "@/api/request";

export function getJobsList(params) {
  return request({
    url: "/jobs",
    method: "get",
    params,
  });
}
export function getJobsDetail(id) {
  return request({
    url: `/jobs/${id}`,
    method: "get",
  });
}
