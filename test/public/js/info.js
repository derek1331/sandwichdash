




$(".submit").on("click", function (event) {
    // event.preventDefault();
    sessionStorage.setItem('orderid', Math.random());
    sessionStorage.setItem('name', $("#fullname").val().trim());

    var newInfo = {
        orderid: sessionStorage.getItem('orderid'),
        name: $("#fullname").val().trim(),
        streetaddress: $("#streetaddress").val().trim(),
        suite_apartment: $("#streetaddress").val().trim(),
        city: $("#streetaddress").val().trim(),
        state: $("#streetaddress").val().trim(),
        zip: $("#streetaddress").val().trim(),

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
    // )
});
