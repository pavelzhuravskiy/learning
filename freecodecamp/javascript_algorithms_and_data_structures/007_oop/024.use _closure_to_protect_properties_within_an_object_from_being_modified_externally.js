function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

let penguin = new Bird();

console.log(penguin.getWeight());