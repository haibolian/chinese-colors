import request from "../utils/request"

export function getColors() {
  return request({
    url: 'colors.json'
  })
}