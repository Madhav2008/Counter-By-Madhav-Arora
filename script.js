let count = document.querySelector(".zero");
let add = document.querySelector(".i");
let minus = document.querySelector(".d");
let reset = document.querySelector(".r");
let main = 0;

add.addEventListener("click", function() {
    main++;
    count.textContent = main;
    count.style.color = "green";
})

minus.addEventListener("click", function() {
    main--;
    count.textContent = main;
    count.style.color = "red";
})

reset.addEventListener("click", function() {
    main = 0;
    count.textContent = main;
    count.style.color = "#122834";
})