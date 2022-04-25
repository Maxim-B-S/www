/*Calculates the kWh and the price for the kWh for the old windows*/
function kalkGammel() {
    breddeGammel = document.getElementById("bredde").value;
    hoydeGammel = document.getElementById("hoyde").value;
    arealGammel = breddeGammel * hoydeGammel
    antallGammel = document.getElementById("antall").value;
    uverdiGammel = document.getElementById("uverdi").value;
    uteTempGammel = document.getElementById("uteTemp").value;
    inneTempGammel = document.getElementById("inneTemp").value;
    differanseGammel = inneTempGammel - uteTempGammel
    dagerGammel = document.getElementById("dager").value * 24;
    prisGammel = document.getElementById("pris").value;
    document.getElementById("resultwattgammel").innerHTML = arealGammel * uverdiGammel * differanseGammel * antallGammel * 24 / 1000 + " kWh";
    document.getElementById("resultprisgammel").innerHTML = (arealGammel * uverdiGammel * differanseGammel * antallGammel * 24 / 1000) * prisGammel + " Kr";
    document.getElementById("resultdagergammel").innerHTML = (arealGammel * uverdiGammel * differanseGammel * antallGammel * 24 / 1000) * prisGammel * dagerGammel + " Kr på: " + document.getElementById("dager").value + " dager";
}

/*Calculates the kWh and the price for the kWh for the new windows*/
function kalkNy() {
    breddeNy = document.getElementById("breddeNy").value;
    hoydeNy = document.getElementById("hoydeNy").value;
    arealNy = hoydeNy * breddeNy
    antallNy = document.getElementById("antallNy").value;
    uverdiNy = document.getElementById("uverdiNy").value;
    uteTempNy = document.getElementById("uteTempNy").value;
    inneTempNy = document.getElementById("inneTempNy").value;
    differanseNy = inneTempNy - uteTempNy
    dagerNy = document.getElementById("dagerNy").value * 24;
    prisNy = document.getElementById("prisNy").value;
    document.getElementById("resultprisny").innerHTML = arealNy * uverdiNy * differanseNy * antallNy * 24 / 1000 + " kWh";
    document.getElementById("resultwattny").innerHTML = (arealNy * uverdiNy * differanseNy * antallNy * 24 / 1000) * prisNy + " Kr";
    document.getElementById("resultdagerny").innerHTML = (arealNy * uverdiNy * differanseNy * antallNy * 24 / 1000) * prisNy * dagerNy + " Kr på: " + document.getElementById("dagerNy").value + " dager";
}