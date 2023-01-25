const uniqueInOrder = (iterable) => {
  const result = []
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
      continue
    }
    result.push(iterable[i])
  }
  return result
};