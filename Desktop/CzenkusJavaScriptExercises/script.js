// Exercise One-----------------------------Exercise One

var num = prompt("ENTER A NUMBER");
total = 0;
for (i=1; i<=num; i++) {
  total += i;
}
console.log(total);

//Exercise One----------------------------------Exercise One



//Exercise Two-----------------------------Exercise Two

var play = prompt("Do you want to play?");
var wordArr = [];

do {
wordArr.push(prompt("Enter a word."));
play2 = prompt("Do you want to play again");
}
while (play2 != 'no');
console.log(wordArr.toString());

//Exercise Two----------------------------------Exercise Two



// Exercise Three----------------------------Exercise Three

var print = prompt("Would you like to print your name?");
var name = prompt("What is your name?");
var hello = 'Hello, my name is '
var message = '';

while ( print2 !== 'no') {
  var print2 = prompt('Would you like to print this again?');
  message += '!';

console.log(hello + name + message);
}

//Exercise Three-----------------------------Exercise Three



//Exercise Four--------------------------Exercise Four

var timeOfDay = prompt('What time of day is it?');
var mealType = ['Breakfast', 'Lunch', 'Dinner'];
var foodSug = ['eggs and toast', 'a salad', 'chicken and rice'];

switch (timeOfDay) {
  case 'Morning':
    console.log('Since it is ' + timeOfDay + ', you should be eating ' + mealType[0] + '. We suggest ' + foodSug[0] + '.');
    break;
  case 'Noon':
    console.log('Since it is ' + timeOfDay + ', you should be eating ' + mealType[1] + '. We suggest ' + foodSug[1] + '.');;
    break;
  case 'Evening':
    console.log('Since it is ' + timeOfDay + ', you should be eating ' + mealType[2] + '. We suggest ' + foodSug[2] + '.');;
    break;
  default:
    console.log('Invalid time of day');
    break;
}
//Exercise Four-------------------------------------------Exercise Four
