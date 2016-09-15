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
// "h" - hole in the earth, you die


class AdventureGame {
	constructor() {
		//setup variables
		this.adventureText = [];
		this.position = [10,10];
		this.command = null;
		this.gold = 0;
		this.gotKey = false;
		this.health = 100;

		this.generateMap();
		this.getElements();
		this.assignListeners();
		this.introduction();
		this.displayText();
	}

	generateMap() {
		this.map = [
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".","l","l",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","k",".",".","w"],
			["w",".",".",".","g100",".",".",".",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".","h",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".","h","h",".",".",".",".",".","w"],
			["w",".",".","l","l","l","l","l",".",".",".",".",".","h","h",".",".",".",".","w"],
			["w",".",".","l","l","l","l","l",".",".",".",".",".",".","h",".",".",".",".","w"],
			["w",".",".",".",".",".","l","l",".",".",".",".",".",".","h",".",".",".",".","w"],
			["w",".",".","l","l",".","l","l",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".","l","l","c","l","l",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".","l","l","l","l","l",".",".",".",".",".","g4",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","i","i","i","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","i",".",".","w"],
			["w",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","d",".","g1000","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
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

		this.displayText();
		this.clearCommand();
	}

	doCommand() {
		switch (this.command) {
			case "n":
				this.movePlayer([0,-1]);
				break;
			case "e":
				this.movePlayer([1,0]);
				break;
			case "s":
				this.movePlayer([0,1]);
				break;
			case "w":
				this.movePlayer([-1, 0]);
				break;
			default: 
				console.log("unknown command");
				break;
		}
	}

	movePlayer(direction) {
		var attemptMove = this.map[this.position[1] + direction[1]][this.position[0] + direction[0]];
		if (attemptMove != "w" && attemptMove != "i" && attemptMove != "d") {
			this.position[0] += direction[0];
			this.position[1] += direction[1];
			this.addText("You walk to the next destination");
			//check what we've stood on
			switch (this.map[this.position[1]][this.position[0]].charAt(0)) {
				case "g":
					var goldAm = this.map[this.position[1]][this.position[0]];
					goldAm = goldAm.substring(1);
					this.gold += parseInt(goldAm);
					this.addText("You found " + goldAm + " pieces of GOLD!!! You now have " + this.gold + " pieces of shiny, shiny gold!");
					this.map[this.position[1]][this.position[0]] = ".";
					break;
				case "k":
					this.gotKey = true;
					this.map[this.position[1]][this.position[0]] = ".";
					this.addText("You find a key. What could this do?");
					break;
			}

		} else {
			if (attemptMove == "d" && !this.gotKey) {
				this.addText("The door is locked shut! How can I open it?");
			} else if (attemptMove == "d" && this.gotKey) {
				this.position[0] += direction[0];
				this.position[1] += direction[1];
				this.addText("You use your shiny key to open the door");
			} else {
				this.addText("You can't move that way, it's a wall!");
			}
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
		//text line
		var buildAString = "";
		for (var i = this.adventureText.length - 1; i >= 0; i--) {
			buildAString += this.adventureText[i] + "\n";
			//buildAString += "\n";
		}
		this.textOutput.innerText = buildAString;

		//map text
		this.minimap.innerText = this.displayMap();
	}

	displayMap() {
		var buildAMap = "";
		for (var y = -3; y <= 3; y++) {
			for (var x = -3; x <= 3; x++) {
				if (x == 0 && y == 0)
					buildAMap += "X";
				else {
					if (typeof this.map[this.position[1] + y][this.position[0] + x] == 'undefined')
						buildAMap += "w";
					else
						buildAMap += this.map[this.position[1] + y][this.position[0] + x].charAt(0);
				}
			}
			buildAMap += "\n";
		}
		return buildAMap;
	}

}
