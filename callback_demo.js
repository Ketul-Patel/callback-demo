// where we define the function
function mainFunction(callback, callback2) {
	console.log("Begin Main Function")
	var returned_val = callback();
	console.log("back in the main function about to pass the rando to callback2");
	callback2(returned_val);
	console.log("done!!!!");
}

// where I am calling the function
mainFunction(first, second);


function first() {
	console.log("in the first callback making a random number");
	return Math.floor(Math.random()*10+1);
}

function second(rando) {
	console.log("This is from the second callback", rando);
}
// Main Function should take 2 callbacks
// The first should pass back a random number
// The second should console.log that random number


