//on show
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Congrats ' + sessionStorage.getItem('name'))
    modal.find('.modal-body').text("Your order has been recieved and you will recieve a conformation text shortly")
  })

// on hide
$('#exampleModal').on('hidden.bs.modal', function (event) {
    window.location.href = "/";

})

$(".submit").on("click", function (event) {
    // event.preventDefault();

    console.log($(".payment:checked").map(function () { return this.value; }).get().join(","));

    // var newOrder = {
    //     bread: $(".bread:checked").val().trim(),
    //     meat: $(".meat:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     cheese: $(".cheese:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     veggies: $(".veggies:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     condiments: $(".condiments:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     chips: $(".chips:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     drinks: $(".drinks:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),

    // };
    // $.ajax("/api/orders", function (req, res) {
    //     // Here we add an "include" property to our options in our findAll query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Post
    //     db.Info.findOne({
    //         where: {orderid: sessionStorage.getItem('orderid')},
    //         attributes: ['name']
    //     }).then(function (attributes) {
    //       console.log(attributes);
    //     })
    //   });

});
