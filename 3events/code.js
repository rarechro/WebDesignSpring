


// parsing lists
function addTooList() {
  var list = document.getElementById("list");
  var item = document.getElementById("addName");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item.value));
  list.appendChild(li);
  item.value = "";
}


// using a random event to choose a winner
function chooseRandom() {
  var list = document.getElementById("list");
  var items = list.getElementsByTagName("li");
  var random = Math.floor(Math.random() * items.length);
  console.log(random);
  var winner = items[random].innerHTML;
 console.log(winner);


  document.getElementById("winner").innerHTML = winner;
  colorfulWinnerText();
}


// clearing the list
function clearList() {
  document.getElementById("list").innerHTML = "";
  document.getElementById("winner").innerHTML = "";
}
// changing the color of the winner text
async function colorfulWinnerText() {
  var winner = document.getElementById("winner");
  var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  var random = Math.floor(Math.random() * colors.length);
  winner.style.color = colors[random];
  
}