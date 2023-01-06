function steamrollArray(arr) {
  const flat = [].concat(...arr);
  if (flat.some(Array.isArray)) {
    return steamrollArray(flat);
  } else {
    return flat;
  }
}