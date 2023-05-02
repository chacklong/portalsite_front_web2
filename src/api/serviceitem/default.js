import request from "@/api/request";

export function getServiceItem(params) {
  return request({
    url: "/serviceitems",
    method: "get",
    params,
  });
}
// export function getJobsDetail(id) {
//   return request({
//     url: `/jobs/${id}`,
//     method: "get",
//   });
// }
