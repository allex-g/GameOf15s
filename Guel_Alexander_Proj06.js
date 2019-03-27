document.getElementById('game').onclick = scramble;

var blankLocationID;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

function scramble(){

    var tileIds = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44]; 
    var tileNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];

    tileNumbers = shuffle(tileNumbers);
    for (var i = 0; i < 16; i++) {
        if (tileNumbers[i] == ''){
            blankLocationID = tileIds[i];
        }

        document.getElementById(tileIds[i]).innerHTML = tileNumbers[i];
    }
}

function check(tagId){
    var ClickedNumberElem = document.getElementById(tagId);

    // If you want to find the ID of the one directly above the blank then subtract 10
    // Above blank ID
    var aboveBlankID = Number(blankLocationID)-10;
    // below blankLocationID spot
    var belowBlankID = Number(blankLocationID)+10;
    
    // left of blankLocationID spot
    var leftOfBlankID = Number(blankLocationID)-1;
    // right of blankLocationID spot
    var rightOfBlankID = Number(blankLocationID)+1;

    // If youre clicking on a blank cell
    if (ClickedNumberElem.innerHTML == ''){
        return false; // since nothing should happen you return false
    }

    if (ClickedNumberElem.id == aboveBlankID){
        swap(ClickedNumberElem, blankLocationID);
    }

    if (ClickedNumberElem.id == belowBlankID){
        swap(ClickedNumberElem, blankLocationID);
    }

    if (ClickedNumberElem.id == leftOfBlankID){
        swap(ClickedNumberElem, blankLocationID);
    }

    if (ClickedNumberElem.id == rightOfBlankID){
        swap(ClickedNumberElem, blankLocationID);
    }
}

function swap(ClickedNumberElem, blankLocation){
    // Save the number that was clicked on to a temporary variable (use innerHTML)
    var tempVar = ClickedNumberElem.innerHTML;
    // Cell that was clicked is the new blank cell
    ClickedNumberElem.innerHTML = '';
    // The blank cell is replaced by the number that you clicked on
    document.getElementById(blankLocation).innerHTML = tempVar;
    // Since the clickedNumber and the blank are swapping places you need to update the blankLocation
    blankLocationID = Number(ClickedNumberElem.id);
}