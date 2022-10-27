const btn = document.querySelector("#btn");

function openWindow() {
	const myWindow = window.open("", "", "width=200", "height=100");
	setTimeout(() => {
		myWindow.close()}, 3000);
};

btn.addEventListener("click", openWindow);


