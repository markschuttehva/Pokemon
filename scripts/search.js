/* search */
let page = document.querySelector(".visually-hidden"); // searchonderdeel
let zoeken = document.querySelector(".search"); //button searching page
let close = document.querySelector(".close"); //button x voor sluiten page

zoeken.addEventListener('click', function() {
	console.log("open");
	page.classList.remove("visually-hidden");
	page.classList.add("searchpage");
});

close.addEventListener('click', function() {
	console.log("close");
	page.classList.remove("searchpage");
	page.classList.add("visually-hidden");
});