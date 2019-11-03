function getSelectValue()
{
    var langvalue = document.getElementById('langs').value;
    if(langvalue == "1")
    {
        document.getElementById('settings').innerHTML = "Settings";
        document.getElementById('settop').innerHTML = "Settings";
        document.getElementById('lang').innerHTML = "Language:";
        document.getElementById('back').innerHTML = "Go Back";
    }
    else if(langvalue == "2")
    {
        document.getElementById('settings').innerHTML = "Ajustes";
        document.getElementById('settop').innerHTML = "Ajustes";
        document.getElementById('lang').innerHTML = "Idioma:";
        document.getElementById('back').innerHTML = "Regresar";
    }
}
