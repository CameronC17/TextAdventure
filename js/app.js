window.addEventListener("load", function() {
	var game = new AdventureGame();
});
//map keys
// " " - blank
// "d"- door
// "k"- key
// "i"- inner wall
// "g100"- = 100 gold
// "l"- lava (you dead)
// "w"- unstoppable wall
// "c" - chest


class AdventureGame {
	constructor() {
		//setup variables
		this.adventureText = [];
		this.position = [10,10];
		this.command = null;

		this.generateMap();
		this.getElements();
		this.assignListeners();
		this.introduction();
		this.displayText();
	}

	generateMap() {
		this.map = [
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","k"," "," ","w"],
			["w"," "," "," ","g100"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","l","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","l","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," ","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l"," ","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","c","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","l","l","l"," "," "," "," "," ","g4"," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i","i","i","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," ",""," "," "," ","d"," ","g1000","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]
		];
	}

	getElements() {
		this.button = document.getElementById("submit");
		this.textOutput = document.getElementById("textOutput");
		this.minimap = document.getElementById("minimap");
		this.commandBox = document.getElementById("userChoice");
	}

	assignListeners() {
		this.button.addEventListener("click", function(event) {
			event.preventDefault();
			this.gameLogic();
		}.bind(this));
	}

	gameLogic() {
		this.getCommand();
		if (this.command != null) {
			this.doCommand();
		}

		this.clearCommand();
	}

	doCommand() {
		switch (this.command) {
			case "n":
				this.movePlayer([1,0]);
				break;
			case "e":
				this.movePlayer([0,1]);
				break;
			case "s":
				this.movePlayer([-1,0]);
				break;
			case "w":
				this.movePlayer([0,-1]);
				break;
			default: 
				console.log("unknown command");
				break;
		}
	}

	movePlayer(direction) {

		console.log(this.map[this.position[1] + direction[1]][this.position[0] + direction[0]]);
		var attemptMove = this.map[this.position[1] + direction[1],this.position[0] + direction[0]];
		if (attemptMove != "w") {
			this.position[0] += direction[0];
			this.position[1] += direction[1];
			this.addText("You walk to the next destination");
		} else {
			this.addText("You can't move that way, it's a wall!");
		}
	}

	getCommand() {
		this.command = this.commandBox.value;
	}

	clearCommand() {
		this.commandBox.value = "";
	}

	introduction() {
		this.addText("You awake from a slumber in the middle of the woods.");
	}

	addText(text) {
		this.adventureText.push(text);
	}

	displayText() {
		//this.textOutput.innerText = "WEVE GOT TEXT\nhelo";
		var buildAString = "";
		for (var i = this.adventureText.length - 1; i >= 0; i--) {
			buildAString += this.adventureText[i] + "\n";
			//buildAString += "\n";
		}
		this.textOutput.innerText = buildAString;
	}
}
