
// You should enter a year and then this function give a answer if its a leap year or not ... 

function leapYear() {
var year = prompt(" which year you want to check : ");
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0){
            return " this year is leap ." ;
            }
        else return "Not leap ." ;
        }
    else return " this year is leap ." ;
    }
else return "Not leap ." ;
}

// saeed hassan vakil //