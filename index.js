const bg = document.getElementById("bg");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("logo");
const ct = document.getElementById("center");
const navbar = document.getElementById("navbar");
const heading = document.querySelector(".heading");
const headingstudio = document.querySelectorAll(".subtitle");
const scrolldiv = document.querySelector(".scroll");
// to make center div appear on load
$(document).ready(function () {
  ct.scrollIntoView();
});

// for horizontal scroll

$(document).ready(function () {
  $(".outer-wrapper").mousewheel(function (e, delta) {
    this.scrollLeft -= delta * 100;
    e.preventDefault();
  });

  heading.classList.add("heading-appear");
  // navbar.classList.remove("logo-appear");

  setTimeout(function () {
    // navbar.classList.remove("logo-appear");
    headingstudio.forEach((head) => {
      head.classList.remove("hide");
      head.classList.add("heading-appear");
    });
  }, 1500);

  setTimeout(function () {
    navbar.classList.remove("hide");
    navbar.style.display = "flex";
    navbar.classList.add("heading-appear");
    scrolldiv.classList.remove("hide");
    scrolldiv.style.display = "flex";
    scrolldiv.classList.add("heading-appear");
  }, 3000);
});

$(".outer-wrapper").scroll(function () {
  var scroll = $(".outer-wrapper").scrollLeft();
  if (scroll >= 1900 && scroll <= 3740) {
    logo.classList.remove("logo-appear");
    logo.classList.add("logo-disappear");

    navbar.classList.add("logo-appear");
    navbar.classList.remove("logo-disappear");
  } else {
    logo.classList.remove("logo-disappear");
    logo.classList.add("logo-appear");

    navbar.classList.remove("logo-appear");
    navbar.classList.add("logo-disappear");
  }
});

//off and on lights
function lightson() {
  console.log("lightson");
  overlay.classList.toggle("light-mode");
}

//JS FOR TOOLTIPS

const tip = document.getElementById("tooltip-box-lights");
document.getElementById("lights").addEventListener("mouseover", () => {
  console.log("hovering");
  tip.style.display = "block";
});

tip.addEventListener("mouseover", () => {
  tip.style.display = "block";
});

tip.addEventListener("mouseleave", () => {
  tip.style.display = "none";
});

document.getElementById("lights").addEventListener("mouseleave", () => {
  tip.style.display = "none";
});

function mytooltips(outer, tool) {
  const tip4 = document.getElementById(tool);
  document.getElementById(outer).addEventListener("click", () => {
    tip4.style.display = "block";
  });

  tip4.addEventListener("mouseover", () => {
    tip4.style.display = "block";
  });

  tip4.addEventListener("mouseleave", () => {
    tip4.style.display = "none";
  });

  document.getElementById(outer).addEventListener("mouseleave", () => {
    tip4.style.display = "none";
  });
}
