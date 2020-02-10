
function creandoDiv(){
    for(var i=0; i<5; i++){

    }
}

$(document).ready(function(){
    
    $(".part_1").click(function(){
        $(this).css("background-image", "url(recursos/cat0.png)");
    })
    $(".part_2").click(function(){
        $(this).css("background-image", "url(recursos/cat1.png)");
    })
    $(".part_3").click(function(){
        $(this).css("background-image", "url(recursos/cat2.png)");
    })
    $(".part_4").click(function(){
        $(this).css("background-image", "url(recursos/cat3.png)");
    })
    $(".part_5").click(function(){
        $(this).css("background-image", "url(recursos/cat4.png)");
    })

})