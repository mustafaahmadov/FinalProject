$(document).ready(function() {
    $(".slick").hover(function() {
        $(this).children(".opacity-div").toggleClass("d-block");
        $(this).children(".opacity-div").children('button').toggleClass('animated fadeInUp');
    });
})
$(document).ready(function() {
    $("#btn-add").click(function() {
        Swal.fire({
            title: 'Success',
            text: 'is added to cart!',
            type: 'error',
            confirmButtonText: 'Cool'
        })
    })
})