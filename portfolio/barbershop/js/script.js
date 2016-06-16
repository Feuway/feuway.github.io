var link = document.querySelector(".login");
var show = document.querySelector(".modal-content");
var close = show.querySelector(".modal-content-close");
var form = show.querySelector("form");
var login = show.querySelector("[name=login]");
var password = show.querySelector("[name=password]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(event) {
	event.preventDefault();
	show.classList.toggle("modal-content-open");
	if (storage) {
		login.value = storage;
		password.focus();
	} else login.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	show.classList.remove("modal-content-open");
	show.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		show.classList.remove("modal-error");
		show.offsetWidth = show.offsetWidth;
		show.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (show.classList.contains("modal-content-open")) {
			show.classList.remove("modal-content-open");
			show.classList.remove("modal-error");
		}
	}
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-map-open");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-map-open");
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-map-open")) {
			mapPopup.classList.remove("modal-content-map-open");
		}
	}
})