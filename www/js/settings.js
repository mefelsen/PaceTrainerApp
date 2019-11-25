 /**  [Member of settings.js]
  * Get the user input to change the language
  */
function getSelectValue()
{
    var langvalue = document.getElementById('langs').value;
    if(langvalue == "1")
    {
        document.getElementById('settop').innerHTML = "Settings";
        document.getElementById('lang').innerHTML = "Language:";
        document.getElementById('prof').innerHTML = "Profile";
        document.getElementById('workprof').innerHTML = "Workout Profiles";
        document.getElementById('settings').innerHTML = "Settings";
        document.getElementById('workprof2').innerHTML = "Workout Profiles";
        document.getElementById('settings2').innerHTML = "Settings";
        document.getElementById('home').innerHTML = "Home Page";
        document.getElementById('home2').innerHTML = "Home Page";
        document.getElementById('workouts').innerHTML = "Select Workout Name";
        //document.getElementById('back1').innerHTML = "Go Back";
        document.getElementById('storewk').innerHTML = "Store Workout";
        document.getElementById('deletewk').innerHTML = "Delete All Workouts";
        document.getElementById('back2').innerHTML = "Go Back";
        document.getElementById('start').innerHTML = "Start";
        document.getElementById('stop').innerHTML = "Stop";
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
        document.getElementById('connectButton').innerHTML = "Connect";
    }
    else if(langvalue == "2")
    {
        document.getElementById('settop').innerHTML = "Ajustes";
        document.getElementById('lang').innerHTML = "Idioma:";
        document.getElementById('prof').innerHTML = "Perfil";
        document.getElementById('workprof').innerHTML = "Perfil";
        document.getElementById('settings').innerHTML = "Ajustes";
        document.getElementById('workprof2').innerHTML = "Perfil";
        document.getElementById('settings2').innerHTML = "Ajustes";
        document.getElementById('home').innerHTML = "Pagina Principal";
        document.getElementById('home2').innerHTML = "Pagina Principal";
        document.getElementById('workouts').innerHTML = "Elija Nombre del Ejercicio";
        //document.getElementById('back1').innerHTML = "Regresar";
        document.getElementById('storewk').innerHTML = "Guardar Ejercicio";
        document.getElementById('deletewk').innerHTML = "Borrar Todos Los Ejercicios";
        document.getElementById('back2').innerHTML = "Regresar";
        document.getElementById('start').innerHTML = "Comenzar";
        document.getElementById('stop').innerHTML = "Parar";
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
        document.getElementById('connectButton').innerHTML = "Conectar";
    }
}


/**  [Member of settings.js]
 * Toggle the dropDown menu
 */
function dropDown()
{
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("myDropdown3").classList.toggle("show");
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

/**  [Member of settings.js]
 * Swipe to next page
 */
function navnext( next ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", next, {
        transition: "slide"
    });
}
/**  [Member of settings.js]
 * Swipe to previous page
 */
function navprev( prev ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", prev, {
        transition: "slide",
        reverse: true
    });
}

$( document ).one( "pagecreate", "#main", function() {
    // Handler for navigating to the next page
    // Navigate to the next page on swipeleft
    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Get the filename of the next page. We stored that in the data-next
        // attribute in the original markup.
        var next = $( this ).jqmData( "next" );
        if ( next ) {
            navnext( next );
        }
    });
    // The same for the navigating to the previous page
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        var prev = $( this ).jqmData( "prev" );
        if (prev) {
            navprev( prev );
        }
    });
});
