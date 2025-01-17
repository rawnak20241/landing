function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Initialize variables
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 because class box1 is already rotated 90 degrees initially. minus 40 per item to position the arrow in the middle.
  // Each item has a 12.5% chance of winning except for the bike which has about a 4% chance of winning.
  // Items like iPad and Samsung Tab will never win.
  let MagicRoaster = shuffle([1890, 2250, 2610]);
  let JblSpeaker = shuffle([1570, 1930, 2290]);
  let LunchBox = shuffle([1770, 2130, 2490]);
  let Sanken = shuffle([1750, 2110, 2470]);
  let Electrolux = shuffle([1630, 1990, 2350]);

  // Randomize
  let Hasil = shuffle([
    MagicRoaster[0],
    JblSpeaker[0],
    LunchBox[0],
    Sanken[0],
    Electrolux[0],
  ]);

  // Get the selected item value
  if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Magic Roaster";
  if (JblSpeaker.includes(Hasil[0])) SelectedItem = "JBL Speaker";
  if (LunchBox.includes(Hasil[0])) SelectedItem = "Lunch Box Lock&Lock";
  if (Sanken.includes(Hasil[0])) SelectedItem = "Air Cooler Sanken";
  if (Electrolux.includes(Hasil[0])) SelectedItem = "Electrolux Blender";

  // Process
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Show Alert
  setTimeout(function () {
    applause.play();
    swal(
        "Congratulations",
        "You Won The " + SelectedItem + ".",
        "success"
    );
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
