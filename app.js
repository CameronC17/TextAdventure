console.reset = function () {
  return process.stdout.write('\033c');
}

class AdventureGame {
	constructor() {
		console.reset();
	}
}



var game = new AdventureGame();



//console.log("\[\033[47m\]");
//console.log("\033[31m this will be red \033[91m and this will be normal");




