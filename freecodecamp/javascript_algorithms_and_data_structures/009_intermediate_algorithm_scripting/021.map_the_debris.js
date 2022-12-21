// Change object key name
const keyChanger = (obj, oldkey, newkey) => {
  obj[newkey] = obj[oldkey]
  delete obj[oldkey]
  return obj
}

function orbitalPeriod (arr) {
  const earthRadius = 6367.4447
  const GM = 398600.4418
  return arr.map(e => {
    e['avgAlt'] = Math.round(Math.sqrt(Math.pow(earthRadius + e['avgAlt'], 3) / GM) * 2 * Math.PI)
    keyChanger(e, 'avgAlt', 'orbitalPeriod')
    return e
  })
}

// console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]))
console.log(orbitalPeriod([{ name: 'iss', avgAlt: 413.6 }, {
  name: 'hubble',
  avgAlt: 556.7
}, { name: 'moon', avgAlt: 378632.553 }]))