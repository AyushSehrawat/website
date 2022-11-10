const doc = document;
const left = doc.getElementById('left-side');
const right = doc.getElementById('right-side');

const handleOnMove = (e) => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
};

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);

const menuOpen = doc.getElementById("menu");
const menuClose = doc.getElementById("close");
const overlay = doc.getElementById("mobileview");

menuOpen.addEventListener("click", () => {

    overlay.style.width = "100%";
});

menuClose.addEventListener("click", () => {
    overlay.style.width = "0%";
});

let index = 0,
    interval = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3))
}
