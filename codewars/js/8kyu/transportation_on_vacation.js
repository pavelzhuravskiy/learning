function rentalCarCost (d) {
  let total
  if (d < 1) {
    return 'Error'
  } else if (d < 3) {
    return total = 40 * d
  } else if (d < 7) {
    return total = (40 * d) - 20
  } else {
    return total = (40 * d) - 50
  }

}