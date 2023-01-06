function confirmEnding(str, target) {
  let sliced = str.split("").slice(-target.length, str.length).join("");
  return sliced === target;
}

console.log(confirmEnding("Congratulation", "on"));