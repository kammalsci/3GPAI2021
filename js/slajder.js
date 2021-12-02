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
var tablicaPrzyciskow=[];
var tablicaTekstow=[];
var tablicaSlajdow=[];
var numerSlajdu=0;


tablicaPrzyciskow.push(new PrzyciskNaSlajder("80%", "30%", "lightblue", "Darmowe kotki", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whiskas.pl%2Fporadnik%2Fzachowanie%2Fnaturalne-instynkty-twojego-kotka&psig=AOvVaw3Ra4uTCt1iZYEGCh5Z4aGZ&ust=1637917964013000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCNj1h4WWs_QCFQAAAAAdAAAAABAG"));
tablicaTekstow.push(new TekstNaSlajder("20%", "10%", "2rem", "lightblue", "Darmowe kotki", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whiskas.pl%2Fporadnik%2Fzachowanie%2Fnaturalne-instynkty-twojego-kotka&psig=AOvVaw3Ra4uTCt1iZYEGCh5Z4aGZ&ust=1637917964013000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCNj1h4WWs_QCFQAAAAAdAAAAABAG"));
tablicaSlajdow.push(generujSlajd("https://s3-eu-west-1.amazonaws.com/w3.cdn.gpd/pl.whiskas.267/large_naturalne-instynkty-twojego-kotka-637154514761628123.jpg", tablicaPrzyciskow[numerSlajdu], tablicaTekstow[numerSlajdu], "https://google.com"));
numerSlajdu++;

tablicaPrzyciskow.push(new PrzyciskNaSlajder("80%", "30%", "lightblue", "Darmowe kotki", "https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg"));
tablicaTekstow.push(new TekstNaSlajder("20%", "10%", "2rem", "lightblue", "Darmowe kotki", "https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg"));
tablicaSlajdow.push(generujSlajd("https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg", tablicaPrzyciskow[numerSlajdu], tablicaTekstow[numerSlajdu], "https://google.com"));
numerSlajdu++;

tablicaPrzyciskow.push(new PrzyciskNaSlajder("70%","30%","#DD3333", "Naciśnij", "http://www.wp.pl"));
tablicaTekstow.push(new TekstNaSlajder("10%","80%","2rem","#DD3333", "Super tekst linku", "http://www.wp.pl"));
tablicaSlajdow.push(generujSlajd("img/slajder/s1.jpg", tablicaPrzyciskow[numerSlajdu], tablicaTekstow[numerSlajdu], "http://www.google.pl"))
numerSlajdu++;

generujSlajderZeSlajdow();


function generujSlajderZeSlajdow() {
    var slajder=document.getElementById("slajderPudelko");
    for (var i=0; i<tablicaSlajdow.length; i++) {
        slajder.innerHTML+=tablicaSlajdow[i];
    }

}

