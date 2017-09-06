var quotes = [
	"Mountain biking: the underrated and drug-free antidepressant",
	"A bad day on a mountain bike always beats a good day in the office",
	"Downhill mountain biking: more addictive than crack, and twice as expensive!",
	"There is nothing, absolutely nothing, quite so worthwile as simply messing around on bicycles.",
	"Get a bicycle. You will not regret it, if you live.",
	"I want to ride my bicycle, i want to ride my bike."
	];

var persons = [
	"betterride.net",
	"Mike Brcic",
	"Pinkbike.com",
	"Tom Kunich",
	"Mark Twain",
	"Queen"
	];

var index = Math.floor(Math.random()*quotes.length);

var quote = quotes[index];
var person = persons[index];


document.getElementById("quote").innerHTML = quote;
document.getElementById("person").innerHTML = person;