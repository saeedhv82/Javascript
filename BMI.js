// Bmi 
var weight = prompt(" Enter your weight : "); // (kg)
var height = prompt(" Enter your height : "); // (m)

function bmiCalculator ( weight , height ) {
    var bmi = weight / Math.pow(height , 2);
    return Math.round(bmi) ;
}

var bmi = bmiCalculator( weight , height ) ;
console.log(bmi);

// Saeed