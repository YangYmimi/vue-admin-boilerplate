import http from "@/utils/http"

// example
// pls extend next method by yourself
export function login(userInfo) {
  let formData = new FormData()
  formData.append("email", userInfo.email)
  formData.append("password", userInfo.password)
  return http({
    url: "/login",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: formData
  })
}

export function logout() {
  return http({
    url: "/logout",
    method: "post"
  })
}
