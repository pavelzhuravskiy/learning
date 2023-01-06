function truthCheck(collection, pre) {
  let counter = 0;
  for (const element of collection) {
    if (element[pre]) {
      counter++;
    }
  }
  return counter === collection.length;
}

console.log(
  truthCheck(
    [
      {
        name: "Quincy",
        role: "Founder",
        isBot: false,
      },
      { name: "Naomi", role: "", isBot: false },
      {
        name: "Camperbot",
        role: "Bot",
        isBot: true,
      },
    ],
    "name"
  )
);