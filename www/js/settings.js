function getSelectValue()
{
    var langvalue = document.getElementById('langs').value;
    if(langvalue == "1")
    {
        document.getElementById('settings').innerHTML = "Settings";
        document.getElementById('settop').innerHTML = "Settings";
        document.getElementById('lang').innerHTML = "Language:";
        document.getElementById('back').innerHTML = "Go Back";
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
        document.getElementById('lang').innerHTML = "Idioma:";
        document.getElementById('back').innerHTML = "Regresar";
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
