var today = new Date();
var day = today.getDay();
var daylist = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

var monthlist = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

var month = today.getMonth();
var date = today.getDate();
var dayName = today.getDay();
var year = today.getFullYear();
var boolFormat = false;

var dateOutput = document.getElementById('date');
var dayNameOutput = document.getElementById('day');
var hoursOutput = document.getElementById('hours');
var minutesOutput = document.getElementById('minutes');
var secondsOutput = document.getElementById('seconds');
var prepand;

function formatTime() {

    

    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    if (boolFormat == false) {

        prepand = hour >= 12 ? ' PM ' : ' AM ';
        hour = hour >= 12 ? hour - 12 : hour;
        if (hour === 0 && prepand === ' PM ') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = ' Noon';
            } else {
                hour = 12;
                prepand = ' PM';
            }
        }
        if (hour === 0 && prepand === ' AM ') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = ' Midnight';
            } else {
                hour = 12;
                prepand = ' AM';
            }
        }

        dateOutput.textContent = monthlist[month] + ' ' + date + ' ' + year;
        dayNameOutput.textContent = daylist[dayName];
        hoursOutput.textContent = hour;
        minutesOutput.textContent = minute;
        secondsOutput.textContent = second + ' ' + prepand;
        
        


    } 
    else 
    {
        dateOutput.textContent = monthlist[month] + ' ' + date + ' ' + year;
        dayNameOutput.textContent = daylist[dayName];
        hoursOutput.textContent = hour;
        minutesOutput.textContent = minute;

    }
    
}


setInterval(formatTime, 1000);




