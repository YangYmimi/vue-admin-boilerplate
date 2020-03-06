import moment from 'moment'

// Get ZoneTime Timestamp
export function getZoneTime () {
  return moment((moment().format('X') - 28800) * 1000).format('YYYY-MM-DD HH:mm:ss')
}

// Get Current Date
export function getCurDate () {
  return moment().format('YYYY-MM-DD')
}

