const number = busStops => {
  return busStops
    .map(busStop => busStop[0] - busStop[1])
    .reduce((a, b) => a + b)
}