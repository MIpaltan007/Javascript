console.clear()

var currentDay = 'Thu'

if(currentDay === 'Mon') {
	console.log('Timings: 10:00-06:00')
} else if(currentDay === 'Tue') {
	console.log('Timings: 09:00-05:00')
} else if(currentDay === 'Wed') {
	console.log('Timings: 09:30-05:30')
} else if(currentDay === 'Thu') {
	console.log('Timings: 10:15-06:15')
} else if(currentDay === 'Fri') {
	console.log('Timings: 09:05-05:05')
} else if(currentDay === 'Sat') {
	console.log('Timings: 09:00-05:00')
} else if(currentDay === 'Sun') {
	console.log('Timings: 09:00-01:00')
}

switch(currentDay) {
	case 'Mon':
	  console.log('Timings: 10:00-06:00')
	  break;
	case 'Tue':
	  console.log('Timings: 09:00-05:00')
		break;
	case 'Wed':
	console.log('Timings: 09:30-05:30')
		break;
	case 'Thu':
	console.log('Timings: 10:15-06:15')
		break;
	case 'Fri':
	console.log('Timings: 09:05-05:05')
		break;
	case 'Sat':
	console.log('Timings: 09:00-05:00')
		break;
	case 'Sun':
	console.log('Timings: 09:00-01:00')
		break;
	default:
	console.log('Timings: 09:00-01:00')
}

/* Write a program to print the number of days in a month using a switch case. Change the value of monthNumber and check if your code works fine.*/

var m = 3;
switch(m){
    case 1:
        console.log("Months:January")
        console.log("Days:31")
        break;
    case 2:
        console.log("Months:February")
        console.log("Days:28 or Days:29")
        break;
    case 3:
        console.log("Months:March")
        console.log("Days:31")
        break;
    case 4:
        console.log("Months:April")
        console.log("Days:30")
        break;
    case 5:
        console.log("Months:May")
        console.log("Days:31")
        break;
    case 6:
        console.log("Months:June")
        console.log("Days:30")
        break;
    case 7:
        console.log("Months:July")
        console.log("Days:31")
        break;
    case 8:
        console.log("Months:August")
        console.log("Days:31")
        break;
    case 9:
        console.log("Months:September")
        console.log("Days:30")
        break;
    case 10:
        console.log("Months:October")
        console.log("Days:31")
        break;
    case 11:
        console.log("Months:November")
        console.log("Days:30")
        break;
    case 12:
        console.log("Months:December")
        console.log("Days:31")
        break;
    default:
        console.log("Invalid Month")
}

/* Write a program to check vowel or consonant using switch case. */
var e='d'
switch(e){
    case 'a': 
    case 'e': 
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("Vowel")
        break;
    default:
        console.log("Consonant")
    
}

/* Write a program to check even or odd number using switch case */
var n=14
var r=n%2

switch(r){
    case 0:
        console.log("Even")
        break;
    case 1:
        console.log("Odd")
        break;
    default:
        console.log("Not a number")
}