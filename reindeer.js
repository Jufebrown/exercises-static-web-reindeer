// color array
const colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

// reindeer array
const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// sets div as a variable
const hohohoElement = document.querySelector("#coloredReindeer");

// loops over reindeer array and adds them to DOM with corresponding color
for (let i = 0; i < reindeer.length; i++) {
	const newParagraph = document.createElement("p");
	newParagraph.innerText=colors[i] + " " + reindeer[i];
	hohohoElement.appendChild(newParagraph);
}
