// Variable storing total 
var total = 0;

// When clicking on submit button
$(".submit").on("click", function (event) {
    // Prevents submit if total = 0
    if (total == 0) {
        event.preventDefault();
    } else {
        // Readies total data for AJAX 
        var customerTotal = {
            orderid: sessionStorage.getItem('orderid'),
            total: total

        }

        // Post total data using AJAX
        $.ajax("/api/total", {
            type: "POST",
            data: customerTotal
        }).then(
            function () {
                console.log(customerTotal)
            }
        )
    }
});

//When clicking on add-to-order sandwich button
$(".addSandwich").on("click", function (event) {
    event.preventDefault();

    // Readies sandwich data for AJAX 
    var newSandwich = {
        orderid: sessionStorage.getItem('orderid'),
        type: $(".type:checked").map(function () { return this.value; }).get().join(","),
        bread: $(".bread:checked").map(function () { return this.value; }).get().join(","),
        cheese: $(".cheese:checked").map(function () { return this.value; }).get().join(","),
        veggies: $(".veggies:checked").map(function () { return this.value; }).get().join(","),
        condiments: $(".condiments:checked").map(function () { return this.value; }).get().join(","),
    }

    // Post sandwich data using AJAX
    $.ajax("/api/sandwiches", {
        type: "POST",
        data: newSandwich
    }).then(
        function () {
            // Appends sandwich data to document
            if (newSandwich) {
                $("#order-to-table").append($('<tr><td class="order-font">' + newSandwich.type + '</td><td class="order-font">' + '$5.00' + '</td></tr>'));
                total = total + 5;
                $("#total").text('Total: $' + total + '.00');
                console.log(total);

            }
        }
    )
});

// When clicking on add-to-order side button
$(".addSides").on("click", function (event) {
    event.preventDefault();

    // Readies side data for AJAX
    var newSides = {
        orderid: sessionStorage.getItem('orderid'),
        sides: $(".sides:checked").map(function () { return this.value; }).get().join(","),
    }

    // Posts side data using AJAX
    $.ajax("/api/sides", {
        type: "POST",
        data: newSides
    }).then(
        function () {
            // Appends side data to document
            if (newSides) {
                $("#order-to-table").append($('<tr><td class="order-font">' + newSides.sides + '</td><td class="order-font">' + '$1.00' + '</td></tr>'));
                total = total + 1;
                $("#total").text('Total: $' + total + '.00');
                console.log(total);

            }
        }
    )
});

// When clicking on add-to-order drink button
$(".addDrinks").on("click", function (event) {
    event.preventDefault();

    // Readies drink data for AJAX
    var newDrinks = {
        orderid: sessionStorage.getItem('orderid'),
        drinks: $(".drinks:checked").map(function () { return this.value; }).get().join(",")
    }

    // Posts side data using AJAX
    $.ajax("/api/drinks", {
        type: "POST",
        data: newDrinks
    }).then(
        function () {
            // Appends drink data to document
            if (newDrinks) {
                $("#order-to-table").append($('<tr><td class="order-font">' + newDrinks.drinks + '</td><td class="order-font">' + '$1.00' + '</td></tr>'));
                total = total + 1;
                $("#total").text('Total: $' + total + '.00');
                console.log(total);
            }
        }
    )
})

