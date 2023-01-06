// Change object key name

const keyChanger = (obj, oldkey, newkey) => {
  obj[newkey] = obj[oldkey];
  delete obj[oldkey];
  return obj;
};