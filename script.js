const left = document.getElementById('left-side');
const parentSlider = document.getElementById("parentSlider");

parentSlider.addEventListener("mousemove", e => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
});

parentSlider.addEventListener("touchmove", e => {
    const p = e.touches[0].clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;
});

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
    langtabget.classList.add("grid");
    toolstabget.classList.add("hidden");
    framestabget.classList.add("hidden");
});

toolstab.addEventListener("click", () => {
    langtabget.classList.add("hidden");
    toolstabget.classList.remove("hidden");
    toolstabget.classList.add("grid");
    framestabget.classList.add("hidden");
});

framestab.addEventListener("click", () => {
    langtabget.classList.add("hidden");
    toolstabget.classList.add("hidden");
    framestabget.classList.remove("hidden");
    framestabget.classList.add("grid");
});


window.addEventListener('load', function () {
    setTimeout(function () {console.log("Hi")}, 1000);
    left.style.transition = "width 1s";
    left.style.width = "57.5%";
    setTimeout(function () {left.style.transition = "none"}, 1000);
});

const redirectdiscord = document.getElementById("social-discord");
const redirectgithub = document.getElementById("social-github");
const redirectreddit = document.getElementById("social-reddit");
const redirectyoutube = document.getElementById("social-youtube");

redirectdiscord.addEventListener("click", () => {
    alert("Send me request on Mini#5183 :)")
});

redirectgithub.addEventListener("click", () => {
    window.open("https://github.com/AyushSehrawat", "_blank");
});

redirectreddit.addEventListener("click", () => {
    window.open("https://www.reddit.com/u/Mini_Py", "_blank");
});

redirectyoutube.addEventListener("click", () => {
    window.open("https://www.youtube.com/@mini5183", "_blank");
});