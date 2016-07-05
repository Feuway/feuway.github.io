var button = document.querySelector(".main-header__toggle");
var menuright = document.querySelector(".main-nav--right");
var menuleft = document.querySelector(".main-nav--left");

button.addEventListener("click", function(event) {
  event.preventDefault();
  menuright.classList.toggle("main-nav--closed");
  menuleft.classList.toggle("main-nav--closed");
  button.classList.toggle("main-header__toggle--closed");
});

var eventClick = new Event('click');
button.dispatchEvent(eventClick);
