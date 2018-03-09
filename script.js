var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function toggleDone() {
	list.forEach(function(element) {
		element.addEventListener("click", function(){
			element.classList.toggle("done");
		});
	});
}

toggleDone();

var button = document.getElementsByClassName("delete");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
  }, false);
}