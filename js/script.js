let navs = document.querySelectorAll(".nav");
let lists = document.querySelectorAll("nav ul li");
let logo = document.querySelector("nav .logo");
let bt1 = document.querySelector("nav .btns button");
let bt2 = document.querySelector("nav .btns button:last-child");
window.addEventListener("scroll", () => {
  if (scrollY > 90) {
    navs.forEach((nav) => {
      nav.classList.add("sticky");
    });
    bt1.classList.add("login");
    bt2.classList.add("reg");
  } else {
    navs.forEach((nav) => {
      nav.classList.remove("sticky");
    });
    // logo.style.color= "#233A95";
    bt1.classList.remove("login");
    bt2.classList.remove("reg");
  }
});

// let show = document.querySelector(".show");
// let hide = document.querySelector(".hide");
let menu = document.querySelector(".side-menu");

function show() {
  menu.classList.add("show");
}

function hide() {
  menu.classList.remove("show");
}
function helps() {
  let help = document.querySelector(".shop1 .left");
  help.classList.toggle("helps");
}
function helps2() {
  let help2 = document.querySelector(".shop2 .left");
  help2.classList.toggle("helps");
}

// Quantity Function
let quns = document.querySelectorAll(".qun");
// let qunss = document.querySelectorAll(".quns");
let addBtn = document.querySelectorAll(".addBtn");
let subBtn = document.querySelectorAll(".subBtn");

// qunss.forEach((qun) => {
//   qun.addEventListener("input", resizeInput);
//   resizeInput.call(qun);
// });

// function resizeInput() {
//   this.style.width = this.value.length + "ch";
// }


addBtn.forEach((adds, index) => {
  adds.addEventListener("click", () => {
    quns[index].value = parseInt(quns[index].value) + 1;
  });
});

subBtn.forEach((subs, index) => {
  subs.addEventListener("click", () => {
    if (quns[index].value > 1) {
      quns[index].value = parseInt(quns[index].value) - 1;
    }
  });
});

