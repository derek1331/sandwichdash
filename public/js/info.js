$(".submit").on("click", function (event) {
    var stop = $("#fullname").val().trim();
    var stop1 = $("#room").val().trim();
    
    if (stop == "") {
            event.preventDefault();

    } else  if (stop1 == "") {event.preventDefault();
    } else {

    sessionStorage.setItem('orderid', Math.random());
    sessionStorage.setItem('name', $("#fullname").val().trim());

    var newInfo = {
        orderid: sessionStorage.getItem('orderid'),
        name: $("#fullname").val().trim(),
        building: $("#streetaddress").val().trim(),


    };

    // console.log(newInfo)
    $.ajax("/api/info", {
        type: "POST",

        data: newInfo
    }).then(
        function () {
            console.log(newInfo);
        }
    )  


    // console.log(sessionStorage.getItem('fullname'));
    // console.log(sessionStorage.getItem('streetaddress'));
    console.log(sessionStorage.getItem('orderid'));
    
    

    // $.ajax("/api/orders", {
    //     type: "POST",
    //     data: newOrder
    // }).then(
    //     function () {
    //         console.log(newOrder);
    //     }
    }// )
});
