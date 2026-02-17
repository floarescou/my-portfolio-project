// плавная прокрутка к нужной секции
const navBtns = document.getElementsByClassName("nav__item");

const sections = [
    document.getElementById("about"),
    document.getElementById("skills"),
    document.getElementById("portfolio")
];

for (let i = 0; i < sections.length; i++) {
    navBtns[i].addEventListener('click', function (event) {
        sections[i].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })
}

// .. плавная прокрутка к нужной секции


