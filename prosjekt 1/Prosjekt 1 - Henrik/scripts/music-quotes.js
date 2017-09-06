
// List of quotes.
var quotes = [
	"One good thing about music, when it hits you, you feel no pain.",
	"Where words fail, music speaks",
	"Music can change the world because it can change people.",
	"Music is the universal language of mankind.",
	"Music is a safe kind of high"
	];

var artists = [
	"Bob Marley",
	"Hans Christian Andersen",
	"Bono",
	"Henry Wadsworth Longfellow",
	"Jimmi Hendrix"
];

// Generating a random number
var index = Math.floor(Math.random()*quotes.length);

// Selecting quote and artist
var quote = quotes[index];
var artist = artists[index];

// Putting the quote and artist into the HTML
document.getElementById("quote").innerHTML = quote;
document.getElementById("artist").innerHTML = artist;