/*segédfüggvények*/
function ID (nev){
    //document.getElementById("uzenet")
    return document.getElementById(nev);
}
var osszeg=0;




function beker() {
    var szamolGomb = ID("szamol");
    var valtA = Number(document.getElementById("a").value);
    var valtB = Number(document.getElementById("b").value);
    osszeg = valtA + valtB;
    console.log("bekér lefut");
    if(isNaN(osszeg) || document.getElementById("a").value==="" || document.getElementById("b").value==="") {
        //gomb betűszíne legyen halvány és tilte tagbe írjuk ki hogy "..."
        ID("szamol").style.color="lightgray";
        ID("szamol").title="Számokat adj meg!";
    } else {
        ID("szamol").style.color = "black";
        ID("szamol").title = "Kattints!";
        szamolGomb.addEventListener("click",szamol,false);
                
    }
    ID("a").addEventListener("input", beker, false);
    ID("b").addEventListener("input", beker, false);
}
function szamol() {
    ID("szoveg").innerHTML += "<span style='color:red' >" + osszeg + "</span>";
}



function szamolFormaz () {
    document.getElementById("szamol").style.color="red";
    document.getElementById("szamol").style.border="1px solid blue";
}
function szamolFormazLevesz () {
    document.getElementById("szamol").style.color="initial";
}
function inputFormazas() {
    ID("a").classList.add("bevitelimezo");
}
function inputFormazasLe() {
    ID("a").classList.remove("bevitelimezo");
}

function init() {
    beker();
    //var szamolGomb = ID("szamol");
    ID("uzenet").innerHTML = "Hello világ!";
    //szamolGomb.addEventListener("mouseover", szamolFormaz, false);
    //szamolGomb.addEventListener("mouseout", szamolFormazLevesz, false);
    //szamolGomb.addEventListener("focusin", inputFormazas, false);
    //szamolGomb.addEventListener("focusout", inputFormazasLe, false);

}
window.addEventListener("load", init, false);
//hozzárendelünk egy eseménytg az ablakbetöltéshez