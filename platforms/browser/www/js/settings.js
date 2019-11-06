 /**  [Member of settings.js]
  * Get the user input to change the language
  */
function getSelectValue()
{
    var langvalue = document.getElementById('langs').value;
    if(langvalue == "1")
    {
        document.getElementById('settings').innerHTML = "Settings";
        document.getElementById('settop').innerHTML = "Settings";
        document.getElementById('user_profile').innerHTML = "User Profile";
        document.getElementById('lang').innerHTML = "Language:";
        document.getElementById('prof').innerHTML = "Profile";
        document.getElementById('workout').innerHTML = "Select Workout Name";
        document.getElementById('back1').innerHTML = "Go Back";
        document.getElementById('back2').innerHTML = "Go Back";
        document.getElementById('start').innerHTML = "Start";
        document.getElementById('stop').innerHTML = "Stop";
        document.getElementById('op_x').innerHTML = "Exercise #1";
        document.getElementById('op_y').innerHTML = "Exercise #2";
        document.getElementById('op_z').innerHTML = "Exercise #3";
        document.getElementById('op1').innerHTML = "Red";
        document.getElementById('op2').innerHTML = "Green";
        document.getElementById('op3').innerHTML = "Blue";
        document.getElementById('op4').innerHTML = "Red";
        document.getElementById('op5').innerHTML = "Green";
        document.getElementById('op6').innerHTML = "Blue";
        document.getElementById('pool').innerHTML = "Pool Length";
        document.getElementById('dist').innerHTML = "Distance";
        document.getElementById('startc').innerHTML = "Start Color";
        document.getElementById('racec').innerHTML = "Race Color";
        document.getElementById('interval1').innerHTML = "Interval";
        document.getElementById('pace1').innerHTML = "Pace";
        document.getElementById('num_times1').innerHTML = "# of Times";
    }
    else if(langvalue == "2")
    {
        document.getElementById('settings').innerHTML = "Ajustes";
        document.getElementById('settop').innerHTML = "Ajustes";
        document.getElementById('user_profile').innerHTML = "Perfil";
        document.getElementById('lang').innerHTML = "Idioma:";
        document.getElementById('prof').innerHTML = "Perfil";
        document.getElementById('workout').innerHTML = "Elija Nombre del Ejercicio";
        document.getElementById('back1').innerHTML = "Regresar";
        document.getElementById('back2').innerHTML = "Regresar";
        document.getElementById('start').innerHTML = "Comenzar";
        document.getElementById('stop').innerHTML = "Parar";
        document.getElementById('op_x').innerHTML = "Ejercicio #1";
        document.getElementById('op_y').innerHTML = "Ejercicio #2";
        document.getElementById('op_z').innerHTML = "Ejercicio #3";
        document.getElementById('op1').innerHTML = "Rojo";
        document.getElementById('op2').innerHTML = "Verde";
        document.getElementById('op3').innerHTML = "Azul";
        document.getElementById('op4').innerHTML = "Rojo";
        document.getElementById('op5').innerHTML = "Verde";
        document.getElementById('op6').innerHTML = "Azul";
        document.getElementById('pool').innerHTML = "Longitud de la Piscina";
        document.getElementById('dist').innerHTML = "Distancia";
        document.getElementById('startc').innerHTML = "Color de Inicio";
        document.getElementById('racec').innerHTML = "Color de Carrera";
        document.getElementById('interval1').innerHTML = "Intervalo";
        document.getElementById('pace1').innerHTML = "Ritmo";
        document.getElementById('num_times1').innerHTML = "# de Repeticiones";
    }
}


/**  [Member of settings.js]
 * Toggle the dropDown menu
 */
function dropDown()
{
  document.getElementById("myDropdown").classList.toggle("show");
}

/**  [Member of settings.js]
 * Filter the dropDown menu
 */
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
