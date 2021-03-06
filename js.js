console.log("konsolra írunk");
document.write("Hello section");
document.getElementById("a").value="halihó"; //átírja az a helyett a value mögötti szövegre
var valtozo = document.GetElementById("a").value;
var valtozoA = document.GetElementById("a").value;
var valtozoB = document.GetElementById("b").value;
document.write("<p>első változó"+valtozoA+"</p>");
document.write("<p>Második változó: "+valtozoB+"</p>");
document.write("<p>A két szám összege: "+valtozoB+"</p>");

var szoveg="";
//var sv=0;
//for (var i =1;i <101;i++) {
//    szoveg+=i+", ";
//    sv++;
//    if (sv===10) //a típusát és az értékét is összehasonlítja
//    {
//        szoveg+="<br>";
//        sv=0;
//    }
//}
for (var i =1;i <101;i++) {
    szoveg+=i+", ";
    sv++;
    if (i%10 ===0) //a típusát és az értékét is összehasonlítja
    {
        szoveg+="<br>";
    }
    }    
document.write("<p>"+szoveg+"</p>");

kiir(); //igy hasznájuk a függvényt
function kiir(){
    for (var i =1;i <101;i++) {
        szoveg+=i+", ";
        if (i%10 ===0) //a típusát és az értékét is összehasonlítja
    {
            szoveg+="<br>";
    }
}    
document.write("<p>"+szoveg+"</p>");
    
}