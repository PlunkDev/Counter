let licznik = 0;

const wrt = document.querySelector("#wartosc");
const przyciski = document.querySelectorAll(".przycisk");
const liczba = document.getElementById("value");

przyciski.forEach(function(btn){
    btn.addEventListener("click", function(e){

        const opis = e.currentTarget.classList;

        if (opis.contains("increase")){
            console.log("zwiekszanie");
            licznik++;
            liczba.innerHTML = licznik;
        }
        if (opis.contains("decrease")){
            console.log("zmniejszanie");
            licznik--;
            liczba.innerHTML = licznik;
        }
        if (opis.contains("reset")){
            console.log("reset");
            licznik = 0;
            liczba.innerHTML = licznik;
        }
        if (licznik==0){
            liczba.style.color = "black";
        }
        if (licznik<0){
            liczba.style.color = "red";
        }
        if (licznik>0){
            liczba.style.color = "green";
        }
    });
});