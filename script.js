var button = document.getElementById('buttonadd');
var input = document.getElementById('textinput');
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
};

function addListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("delete"));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("mouseenter", function() {
		li.appendChild(btn);
	});
	li.addEventListener("mouseleave", function() {
		li.removeChild(btn);
	});
	btn.addEventListener("click",clearItem)
};

function crossOut(event) {
event.target.classList.toggle("done");
};

function clearItem(event) {
	event.target.parentNode.hidden = true;
};

function addListAfterClick() {
	if (inputLength() > 0) {
		addListElement();
	}
};

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		addListElement();
	}
};


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

ul.addEventListener("click", crossOut);


