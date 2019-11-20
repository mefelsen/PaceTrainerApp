/** [Member of main.js]
* Calls functions on startup of page
*/
window.onload = function()
{
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

/** [Member of main.js]
* Called when start button is pressed
*/
function start()
{
  let str = construct();
  console.log(validateInput());
  if(validateInput())
  {

  }
  console.log(str);
}

/** [Member of main.js]
* Constructs a string which will be sent serially via bluetooth to
* the microcontroller
*/
function construct()
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

  //console.log(command_str.length)
  return command_str;
}

/** [Member of main.js]
* Checks that all inputs are filled out and are in a valid format
* @post returns true if valid, false if invalid
*/
function validateInput()
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