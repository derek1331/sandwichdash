function showRemaining() {
  var endDate = new Date();

  // If after 1100, add a day
  if (endDate.getHours() > 11) {   
    endDate.setDate(endDate.getDate() + 1);
  }
  // Set time to 11am;
  endDate.setHours(11,0,0,0);

  // Get seconds from now to end
  var diff = Math.ceil((endDate - Date.now())/1000);

  // Show time as h:mm:ss
  return ( (diff/3.6e3|0) + ':' +
           ('0'+((diff%3.6e3)/60|0)).slice(-2) + ':' +
           ('0'+(diff%60)).slice(-2)
         );
}
 
// Run every second just after next full second
(function timer() {
  $( ".countDown" ).html(showRemaining());
    var lag = 1020 - (Date.now()%1000)
    setTimeout(timer, lag);
}());
  // create the timestamp here. I use the end of the day here as an examplevar end = moment("11:00:00", "HH:ss:mm");

  // $(document).ready(function () {


  //   var end = moment("11:00:00", "HH:ss:mm");
  //   $(function() {
  //   setInterval(function() {
  //       const timeLeft = moment(end.diff(moment())); // get difference between now and timestamp
  //       const formatted = timeLeft.format('HH:ss:mm'); // make pretty
  //       $( "#counter" ).html(formatted); // or do your jQuery stuff here
  //   }, 1000);
  //   })
  //   // setInterval();
    

  // });

  // function getTimeRemaining(endtime) {
  //   var t = Date.parse(endtime) - Date.parse(new Date());
  //   var seconds = Math.floor((t / 1000) % 60);
  //   var minutes = Math.floor((t / 1000 / 60) % 60);
  //   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   var days = Math.floor(t / (1000 * 60 * 60 * 24));
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds
  //   };
  // }
  
  // function initializeClock(id, endtime) {
  //   var clock = document.getElementById(id);
  //   var daysSpan = clock.querySelector('.days');
  //   var hoursSpan = clock.querySelector('.hours');
  //   var minutesSpan = clock.querySelector('.minutes');
  //   var secondsSpan = clock.querySelector('.seconds');
  
  //   function updateClock() {
  //     var t = getTimeRemaining(endtime);
  
  //     daysSpan.innerHTML = t.days;
  //     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  //     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }
  //   }
  
  //   updateClock();
  //   var timeinterval = setInterval(updateClock, 1000);
  // }
  
  // function getNextSaturday() {
  //    var now = new Date();
  //    var nextSaturday = new Date();
  //    nextSaturday.setDate(now.getDate() + (6 - 1 - now.getDay() + 7) % 7 + 1);
  //    nextSaturday.setHours(11, 0, 0, 0);
  //    return nextSaturday;
  // }
  
  // function convertToEST(date){
  //     estOffset = -5.0
  //     utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  //     return new Date(utc + (3600000 * estOffset));
  // }
  
  // var deadline = getNextSaturday();
  // initializeClock('clockdiv', convertToEST(deadline));


