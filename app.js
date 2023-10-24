
function Dice(){ 
	let roll1 = Math.floor((Math.random() * 6)+1);
	let roll2 = Math.floor((Math.random() * 6)+1);


	console.log("Dice one is: " + roll1);
	console.log("Dice two is: " + roll2);	
	console.log("You rolled a: " + (roll1 + roll2));
}

Dice();