import dayjs from "dayjs"

// Get ZoneTime Timestamp
export function getZoneTime() {
  return dayjs((dayjs().format("X") - 28800) * 1000).format("YYYY-MM-DD HH:mm:ss")
}

// Get Current Date
export function getCurDate() {
  return dayjs().format("YYYY-MM-DD")
}
