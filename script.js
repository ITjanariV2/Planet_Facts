// Navigation underline
const header = document.getElementById("menu");
const buttons = document.getElementsByClassName("selectable");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", underline);
    function underline() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    };
}

// Navigation bar observer
const menu = document.querySelector(".menu")

const menuColor = document.querySelector(".nav-list");

const scrollWatcher = document.createElement("div");
scrollWatcher.classList.add("padding");
scrollWatcher.setAttribute("watcher", "");
menu.after(scrollWatcher);

const options = {
    threshold: 0
}

const navigationObserver = new IntersectionObserver(entries => {   
    menu.classList.toggle("add", !entries[0].isIntersecting);
    menuColor.classList.toggle("inverse", !entries[0].isIntersecting)
}, options)

navigationObserver.observe(scrollWatcher);

// lisab class 'hidden'
const parent = document.querySelectorAll(".fact");

for (let x = 0; x < parent.length; x++) {
    parent[x].children[0].classList.add("hidden")
    parent[x].children[1].classList.add("hidden")
    parent[x].children[2].classList.add("hidden")
    parent[x].children[3].classList.add("hidden")
}

//fade in facts
const textSections = document.querySelectorAll(".hidden");

const textSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
       if (!entry.isIntersecting) return;
       else {
        entry.target.classList.add("appear");
        textSectionObserver.unobserve(entry.target);
       }
    })
})

textSections.forEach(section => {
    textSectionObserver.observe(section);
})

// menu icon
const menuIcon = document.querySelector(".cont");

function random() {
  document.querySelector(".oneBar").classList.toggle("add")
  document.querySelector(".twoBar").classList.toggle("add")
  document.querySelector(".threeBar").classList.toggle("add")
}

// nav phone
menuIcon.addEventListener("click", NavPhone);

function NavPhone() {
    document.querySelector(".nav-list").classList.toggle("showMenu");
}

// jumping arrow
const arrow = document.querySelector(".arrowContainer");
const section2 = document.querySelector(".one");
arrow.addEventListener("click", ArrowClick);

function ArrowClick() {
    section2.scrollIntoView({behavior:'smooth'});
}