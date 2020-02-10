$(document).ready(function(){
    $("img").hide();

    $("#btnAddClass").click(function(){
        $(".addClass").css("color","red");
    })

    $("#btnSlideToggle").click(function(){
        $("img").toggle(function(){
            $(".slideToggle").show("img");
        })
    })

    $("#btnAppend").click(function(){
        $(".append").append("Hola, qué tal. Hoy me levanté muy temprano y sufro eternamente.");
    })
})
