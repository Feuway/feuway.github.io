var link = document.querySelector(".search h2");
var form = document.querySelector(".search-hotel");
var arrival = form.querySelector("[name=date-arrival]");
var check_out = form.querySelector("[name=check-out]");
var storage = localStorage.getItem("arrival");

link.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("search-hotel-open");
	arrival.focus();

	if (storage) {
		arrival.value = storage;
		check_out.focus();
	} else {
		arrival.focus();
	}
})

form.addEventListener("submit", function(event) {
	if (!arrival.value || !check_out.value) {
		event.preventDefault();
	} else {
		localStorage.setItem("arrival", arrival.value);
	}
})

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (form.classList.contains("search-hotel-open")) {
			form.classList.remove("search-hotel-open");
		}
	}
})