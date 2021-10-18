const next = document.querySelector(".next");
const tanya = document.querySelector("#tanya");
const prev = document.querySelector(".prev");
const john = document.querySelector("#john");

next.onclick = function () {
  if (tanya.style.opacity === "1") {
    tanya.style.opacity = "0";
    john.style.opacity = "1";
  } else {
    tanya.style.opacity = "1";
    john.style.opacity = "0";
  }
};

prev.onclick = function () {
  if (tanya.style.opacity === "1") {
    tanya.style.opacity = "0";
    john.style.opacity = "1";
  } else {
    tanya.style.opacity = "1";
    john.style.opacity = "0";
  }
};
