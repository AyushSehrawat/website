const left = document.getElementById('left-side');
const right = document.getElementById('right-side');

const handleOnMove = (e) => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
};

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);

const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("close");
const overlay = document.getElementById("mobileview");

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


const langtab = document.getElementById("skills-tabs-1");
const toolstab = document.getElementById("skills-tabs-2");
const framestab = document.getElementById("skills-tabs-3");
const langtabget = document.getElementById("languages-div");
const toolstabget = document.getElementById("tools-div");
const framestabget = document.getElementById("frameworks-div");

langtab.addEventListener("click", () => {
    langtabget.classList.remove("hidden");
    toolstabget.classList.add("hidden");
    framestabget.classList.add("hidden");
});

framestab.addEventListener("click", () => {
    langtabget.classList.add("hidden");
    toolstabget.classList.add("hidden");
    framestabget.classList.remove("hidden");
});

toolstab.addEventListener("click", () => {
    langtabget.classList.add("hidden");
    toolstabget.classList.remove("hidden");
    framestabget.classList.add("hidden");
});


