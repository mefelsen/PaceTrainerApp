/** [Member of main.js]
* Calls functions on startup of page
*/
window.onload = function() {
  populateDistances();
}

/** [Member of main.js]
* Automatically populates distances for the distance drop down
*/
function populateDistances()
{
  let distance_menu = document.getElementById("distance");

  for(let i = 25; i <= 1650; i = i + 25)
  {
    let item = document.createElement("option");
    let i_string = i.toString();
    item.text = i_string;
    item.value = i_string;
    distance_menu.add(item);
  }
}
