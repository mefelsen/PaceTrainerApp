/** [Member of main.js]
* Calls functions on startup of page
*/
window.onload = function()
{
  populateDistances();
  populateWorkouts();
}

/** [Member of main.js]
* Retrieves workouts from local storage and adds them back to workout drop down
*/
function populateWorkouts()
{
  let workout_container = document.getElementById("user_exercise");
  for(let i = 0; i < localStorage.length; i++)
  {
    let item = localStorage.getItem(localStorage.key(i));
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(item));
    option.value = localStorage.getItem(item);
    workout_container.appendChild(option);
  }
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


/** [Member of main.js]
* Stores the workout to be retrieved later
*/
function store()
{
  let str = "";
  let workout_container = document.getElementById("user_exercise");
  let workout_name = document.getElementById("workout_name").value;
  if(validateInput() && workout_name != "")
  {
    str = construct();
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(document.getElementById("workout_name").value));
    option.value = str;
    workout_container.appendChild(option);
    localStorage.setItem(document.getElementById("workout_name").value, option.value);
    alert("Workout Saved as " + document.getElementById("workout_name").value);
  }
  else
  {
    alert("Please correctly fill in all the values!");
  }
}




/** [Member of main.js]
* Deletes all workouts in dropdown and storage
*/
function deleteWorkouts()
{
    let container = document.getElementById("user_exercise");
    while(container.length > 0)
    {
     container.removeChild(container.options[0]);
    }
    localStorage.clear();
    let option = document.createElement("option");
    container.appendChild(option);
    alert("All workouts deleted.");
}

/* [Member of main.js]
* Test Suite - Verifies all functionality
*
function TestSuite()
{
    let valid_str = validateInput() ? "Passed" : "Failed";
    console.log("Test: Are All Inputs Valid? " + valid_str);

    let constr_str = construct();
    let res = constr_str.length == 29 ? "Passed" : "Failed";
    console.log("Test: Is the output to be sent via Bluetooth valid? " + res);

    //More tests will need to be added
}
 */
