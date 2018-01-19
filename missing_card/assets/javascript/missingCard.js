var suitsArray = [
	{
		suitName: 'hearts',
		suitValue: 0,
	},
	{
		suitName: 'diamonds',
		suitValue: 1,
	},
	{
		suitName: 'spades',
		suitValue: 2,
	},
	{
		suitName: 'clovers',
		suitValue: 3,
	}
];

var cardsArray = [];
var hearts = [];
var diamonds = [];
var spades = [];
var clovers = [];

function execute() {
	var removeThisCard = {
		suit: 'hearts',
		value: 1,
	};

	createDeckOfCards(removeThisCard);

	separateIntoSuits();

	// check which suit array does not have 13 cards
	var incompleteSuit = getIncompleteSuit();

	// TODO
	// sort the suit array that does not have 13 cards

	// find the missing card and display
	var missingCard = findMissingCard(incompleteSuit);

	console.log('Missing card:  ' + missingCard.value + ' of ' + missingCard.suit);

	//displaySuitArraysToConsole();
}

function displaySuitArraysToConsole() {
	console.log(hearts);
	console.log(spades);
	console.log(diamonds);
	console.log(clovers);

	return;
}

function createDeckOfCards(cardToRemove) {
	for(var i=0; i<suitsArray.length; i++) {
		var suit = suitsArray[i];
		
		for(var j=1; j<=13; j++) {
			// Check if a card should not be populated
			if(cardToRemove.suit === suit.suitName && cardToRemove.value === j) {
				continue;
			} else {
				if(j === 11){
					cardsArray.push({suit: suit.suitName, value: j, alternateValue: 'J'});
				} else if(j === 12) {
					cardsArray.push({suit: suit.suitName, value: j, alternateValue: 'Q'});
				} else if(j === 13) {
					cardsArray.push({suit: suit.suitName, value: j, alternateValue: 'K'});
				} else {
					cardsArray.push({suit: suit.suitName, value: j, alternateValue: j});
				}
			}
		}
	}

	return;
}

function separateIntoSuits() {
	for(var i=0; i<cardsArray.length; i++) {
		var card = cardsArray[i];

		getSuitArray(card.suit).push(card);
	}

	return;
}

function getSuitArray(suitName) {
	var returnValue;

	//console.log(suitName);

	switch(suitName) {
		case 'hearts':
			returnValue = hearts;
			break;
		case 'spades':
			returnValue = spades;
			break;
		case 'diamonds':
			returnValue = diamonds;
			break;
		case 'clovers':
			returnValue = clovers;
			break;
		default:
			console.log('Unhandled suit name encountered ' + suitName);
	}

	return returnValue;
}

function getIncompleteSuit() {
	var returnThis;

	if(hearts.length != 13) {
		returnThis = hearts;
	} else if(diamonds.length != 13) {
		returnThis = diamonds; 
	} else if(spades.length != 13) {
		returnThis = spades;
	} else if(clovers.length != 13) {
		returnThis = clovers;
	} else {
		console.log('Unable to find an incomplete suit set!');
	}

	return returnThis;
}


function findMissingCard(suitArray) {
	var returnThis;

	//console.log(suitArray);

	var i;
	var suit;

	for(i=0; i < suitArray.length; i++) {
		//console.log(i, suitArray[i], i+1);

		suit = suitArray[i].suit;

		if(suitArray[i].value != i + 1) {
			// This is the missing card!
			returnThis = {
				suit: suit,
				value: i+1,
			};

			return returnThis;
		} else {
			continue;
		}
	}

	// Handle cases when the last card is missing
	// If execution reaches here that means we have looped through 
	// all array elements
	if( (i+1) === 13){
		returnThis = {
			suit: suit,
			value: i+1,
		};
	}
	

	return returnThis;
}

function sortSuit(suitArray) {
	// Using BubbleSort for now
	for(var i=0; i<suitArray.length - 1; i++) {
		for(var j=0; j<suitArray.length - 1; j++) {
			var currentSuitObj = suitArray[j];
			var nextSuitObj = suitArray[j + 1];

			if(currentSuitObj.value > nextSuitObj.value) {
				swap(suitArray, j, j+1);
			}
		}
	}

	return;
}

function swap(array, leftPos, rightPos) {
	var temp = array[leftPos];
	array[leftPos] = rightPos;
	array[rightPos] = temp;

	return;
}