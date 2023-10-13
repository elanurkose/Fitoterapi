let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelector('input[type="text"]').oninput = () => {};

AOS.init({
  duration: 400,
  delay: 200,
});
