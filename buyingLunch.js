
// This function will choose a random person to pay for lunch , isnt good ?? :)

function whosPaying(names) {
    var numberOfPeople = names.length ;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today ! "; 
}

// saeed hassan vakil //