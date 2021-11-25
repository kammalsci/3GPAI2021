class PrzyciskNaSlajder {
    constructor(x, y, kolor, tresc, link) {
        this.x=x;
        this.y=y;
        this.kolor=kolor;
        this.tresc=tresc;
        this.link=link;
    }
}

class TekstNaSlajder {
    constructor(x, y, wielkosc, kolor, tresc, link) {
        this.x=x;
        this.y=y;
        this.kolor=kolor;
        this.wielkosc=wielkosc;
        this.tresc=tresc;
        this.link=link;
    }
}

function generujSlajd(tlo, przycisk, tekst, link) {
    var wynikowyKodHTML="";
    wynikowyKodHTML+="<div>";
        wynikowyKodHTML+="<img src='" + tlo + "' alt='" + tekst.tresc + "'>";
        wynikowyKodHTML+="<a href='" +przycisk.link+ "' style='";
        wynikowyKodHTML+="background:"+ przycisk.kolor +";";
        wynikowyKodHTML+="left:"+ przycisk.x +";";
        wynikowyKodHTML+="top:"+ przycisk.y +";";
        wynikowyKodHTML+="'>";
            wynikowyKodHTML+=przycisk.tresc;   
        wynikowyKodHTML+="</a>";

        wynikowyKodHTML+="<a href='" +tekst.link+ "' style='";
        wynikowyKodHTML+="color:"+ tekst.kolor +";";
        wynikowyKodHTML+="font-size:"+ tekst.wielkosc +";";
        wynikowyKodHTML+="left:"+ tekst.x +";";
        wynikowyKodHTML+="top:"+ tekst.y +";";
        wynikowyKodHTML+="'>";
            wynikowyKodHTML+=tekst.tresc;   
        wynikowyKodHTML+="</a>";


    wynikowyKodHTML+="</div>";
    return wynikowyKodHTML;
}

var nowyPrzycisk = new PrzyciskNaSlajder("70%","30%","#DD3333", "Naciśnij", "http://www.wp.pl");
var nowyTekst = new TekstNaSlajder("10%","80%","2rem","#DD3333", "Super tekst linku", "http://www.wp.pl");

var slajder=document.getElementById("slajder");

slajder.innerHTML+=generujSlajd("img/slajder/s1.jpg", nowyPrzycisk, nowyTekst, "http://www.google.pl");
slajder.innerHTML+=generujSlajd("1.jpg", nowyPrzycisk, nowyTekst, "http://www.google.pl");