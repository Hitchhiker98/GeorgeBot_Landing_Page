function imgSlider(arg) {
  document.querySelector(".product").src = arg;
}

function changeCircleColor(color, shadow) {
  document.querySelector(".path").style.fill = color;
  document.querySelector(".sci").style.backgroundColor = color;
  document.querySelector(".form_submit").style.backgroundColor = color;
  document.querySelector(".name").style.textShadow = `0px 5px 0px ${shadow}`;
}

function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
