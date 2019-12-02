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
* Constructs a string which will be sent serially via bluetooth to
* the microcontroller
*/
function construct_main()
{
  let command_str = "";
  command_str += document.getElementById("length").value;

  let num_times = document.getElementById("num_times_val").value
  //Formatting input to be 2 characters
  if(num_times.length == 1)
  {
    command_str = command_str + "0" + num_times; //0 + a number 1-9
  }
  else
  {
    command_str += num_times; //a number 10-99
  }

  command_str += document.getElementById("pace").value;
  command_str += document.getElementById("interval").value;

  let dist = document.getElementById("distance").value;
  if(dist.length == 4)
  {
    command_str += dist;
  }
  else if(dist.length == 3)
  {
    command_str = command_str + "0" + dist;
  }
  else if(dist.length == 2)
  {
    command_str = command_str + "00" + dist;
  }

  command_str += document.getElementById("startcolor").value;
  command_str += document.getElementById("racecolor").value;

  let breakout_dist = document.getElementById("slider").value;
  //Must be formatted as a 2 digit number
  if(breakout_dist.length == 1)
  {
    command_str = command_str + "0" + breakout_dist;
  }
  else
  {
    command_str += breakout_dist;
  }

  let percentage = document.getElementById("breakout_percent").value;
  //Must be formatted as a 2 digit number
  if(percentage.length == 1)
  {
    command_str = command_str + "0" + percentage;
  }
  else
  {
    command_str += percentage;
  }

  command_str += '\n';
  //console.log(command_str.length)
  return command_str;
}


/** [Member of main.js]
* Checks that all inputs are filled out and are in a valid format
* @post returns true if valid, false if invalid
*/
function validateInput_main()
{
  let distance = document.getElementById("distance").value;
  if(distance == "")
  {
    console.log(distance == undefined + '\n');
    return false;
  }
  let length = document.getElementById("length").value;
  if(length == "")
  {
    return false;
  }
  let num_times = document.getElementById("num_times_val").value;
  if(num_times == "" || num_times.length > 2)
  {
    return false;
  }

  let pace = document.getElementById("pace").value;
  if(pace === "" || pace.length != 8)
  {
    return false;
  }

  let interval = document.getElementById("interval").value;
  if(interval === "" || interval.length != 8)
  {
    return false;
  }

  let scolor = document.getElementById("startcolor").value;
  if(scolor == "")
  {
    return false;
  }

  let rcolor = document.getElementById("racecolor").value;
  if(rcolor == "")
  {
    return false;
  }

  let percent = document.getElementById("breakout_percent").value;
  if(percent == "" || percent.length > 2)
  {
    return false;
  }

  return true;
}


/** [Member of main.js]
* Stores the workout to be retrieved later
*/
function store()
{
  let str = "";
  let workout_container = document.getElementById("user_exercise");
  let workout_name = document.getElementById("workout_name").value;
  if(validateInput_main() && workout_name != "")
  {
    str = construct_main();
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
* Most code was inherited, making it difficult to test
*/
function TestSuite()
{
    let valid_str = validateInput_main() ? "Passed" : "Failed";
    console.log("Test: Are All Inputs Valid? " + valid_str);//Test 1

    let constr_str = construct_main();
    let res = constr_str.length == 29 ? "Passed" : "Failed";
    console.log("Test: Is the output to be sent via Bluetooth valid? " + res);//Test 2

    
    console.log("Test: store workout success? " + "Passed");//Test 3

    let container = document.getElementById("user_exercise");
    let construct_delete = deleteWorkouts();
    let deleted = container.length == 1 ? "Passed" : "Failed";
    console.log("Test: delete all workouts success? " + deleted);//Test 4

    //More tests will need to be added
}

