const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return 	"Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }

  // Only change code above this line
}

golfScore(5, 4);

//"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
// doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
// veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
// ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
// consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
// Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
// adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
// dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
// nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
// ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
// voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
// eum fugiat quo voluptas nulla pariatur?"