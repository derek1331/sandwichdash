var clock;

$(document).ready(function() {

    var deadlineHour = 11, offset = 0;

    // Grab the current date
    var currentDate = new Date();

    if(currentDate.getHours() >= deadlineHour) {
        offset = 1;
    }

    var futureDate = new Date(
        currentDate.getFullYear(), 
        currentDate.getMonth(), 
        currentDate.getDate() + offset, 
        deadlineHour
    );

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        
            countdown: true
        
    });

    clock.face.on('stop', function() {
        // add 24 hours worth of seconds to the clock face
        clock.setFaceValue(24 * 60 * 60);
        clock.start();
    });
});