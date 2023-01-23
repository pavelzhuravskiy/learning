function isValidWalk(walk) {
  let northCount = 0;
  let southCount = 0;
  let westCount = 0;
  let eastCount = 0;

  for (let i = 0; i < walk.length; i++) {
    const step = walk[i];
    switch (step) {
      case "n":
        if (southCount > 0) {
          southCount--;
        } else {
          northCount++;
        }
        break;
      case "s":
        if (northCount > 0) {
          northCount--;
        } else {
          southCount++;
        }
        break;
      case "w":
        if (eastCount > 0) {
          eastCount--;
        } else {
          westCount++;
        }
        break;
      case "e":
        if (westCount > 0) {
          westCount--;
        } else {
          eastCount++;
        }
    }
  }
  return (
    northCount === 0 &&
    southCount === 0 &&
    westCount === 0 &&
    eastCount === 0 &&
    walk.length === 10
  );
}