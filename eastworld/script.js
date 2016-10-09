console.log("Welcome to Legends of the Hidden Symbol: 2016's hottest Choose-Your-Adventure game, as voted by kids EVERYWHERE! What's your name?")

var name = prompt("Enter name here");
var path1;

console.log("Hello " + name + "! " + "Nice to meet you!")

var firstpath = prompt("Enter choice here");

console.log("Thanks for playing. " + "Select a symbolic path. Enter ',,,,', '!!!!', or '++++'");

if (firstpath===',,,,') {
  console.log(firstpath + "! " + "Your journey takes you beneath, as you will have to swim through the Sea, of Commas. Godspeed.");
} else if (firstpath==='!!!!') {
  console.log("You have chosen to the climb the treacherous Exclamation Point!. Good Luck.");
}
else if (firstpath==='++++') {
  console.log("You have selected the Plus+Garden. Proceed.");
} else {
  console.log("INVALID SELECTION");
}
