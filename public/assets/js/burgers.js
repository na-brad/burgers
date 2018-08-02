$(function(){
    $(".devour").on("click", function(){
        var id = $(this).attr("data-id");

        $.ajax({
            type: "PUT",
            url:"/burgers/" + id,
        }).then(function(){
            location.reload();
        });
    });

    $("#addBurger").on("click", function(){
        var newBurger = $("#newBurger").val().trim();
        var burgerobject = {
            newBurger: newBurger
        }

        $.ajax({
            type:"POST",
            url:"/burgers",
            data: burgerobject
        }).then(function(){
            location.reload();
        })
    })

})