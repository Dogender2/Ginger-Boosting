window.addEventListener("scroll", function(){
    //Komunikat
    var games = document.querySelector("#gry");
    games.classList.toggle("show", window.scrollY > 10);
    
    //Valorant
    var Valorant = document.querySelector("#Valorant");
    Valorant.classList.toggle("show", window.scrollY > 10);
})