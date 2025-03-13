const card1 = document.querySelector(".box1");
const card2 = document.querySelector(".box2");
const card3 = document.querySelector(".box3");

const sillyToggle = document.querySelector(".silly-mode-toggle");

let selected = card2;

card1.addEventListener("click", () => {
    if (selected != card1) {
        selected.classList.remove("selected");
        selected.innerHTML = "";
    }
    card1.classList.add("selected");
    selected = card1;
    if (card1.classList.contains("serious")) {
        card1.innerHTML = "Fiona has one older brother named Hudson.";
    }
    else {
        card1.innerHTML = "Fiona has one orange cat named Scooby!";
    }
});

card2.addEventListener("click", () => {
    if (selected != card2) {
        selected.classList.remove("selected");
        selected.innerHTML = "";
    }
    card2.classList.add("selected");
    selected = card2;
    if (card2.classList.contains("serious")) {
        card2.innerHTML = "Fiona is serious."
    }
    else {
        card2.innerHTML = "Fiona is awesome!";
    }
});

card3.addEventListener("click", () => {
    if (selected != card3) {
        selected.classList.remove("selected");
        selected.innerHTML = "";
    }
    card3.classList.add("selected");
    selected = card3;
    if (card3.classList.contains("serious")) {
        card3.innerHTML = "Fiona's favorite subject is chemistry.";
    }
    else {
        card3.innerHTML = "Fiona's favorite color is blue!";
    }
});

sillyToggle.addEventListener("click", () => {
    card1.classList.toggle("serious");
    card2.classList.toggle("serious");
    card3.classList.toggle("serious");
    sillyToggle.classList.toggle("shift");
});