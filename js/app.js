window.addEventListener("load", function() {
	var game = new AdventureGame();
});

class AdventureGame {
	constructor() {
		this.getElements();
		this.assignListeners();
		this.introduction();
	}

	getElements() {
		this.button = document.getElementById("submit");
		this.textOutput = document.getElementById("textOutput");
		this.minimap = document.getElementById("minimap");
	}

	assignListeners() {
		this.button.addEventListener("click", function(event) {
			console.log(event);
		});

		this.textOutput.addEventListener("click", function(event) {
			console.log(event);
		});

		this.minimap.addEventListener("click", function(event) {
			console.log(event);
		});
	}

	introduction() {
		console.log("Welcome to the Text Adventure!");
	}	
}

