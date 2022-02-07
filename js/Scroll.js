window.addEventListener("scroll", function(){
    var info = document.querySelector("#in1");
    var games = document.querySelector("#gry");
    info.classList.toggle("show", window.scrollY > 10);
    games.classList.toggle("show", window.scrollY > 10);
})