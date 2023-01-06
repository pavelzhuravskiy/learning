function grabDoll(dolls) {
  const bag = [];
  for (const doll of dolls) {
    if (doll === "Hello Kitty" || doll === "Barbie doll") {
      bag.push(doll);
    } else continue;
    if (bag.length === 3) break;
  }
  return bag;
}