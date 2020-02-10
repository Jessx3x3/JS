$(document).ready(function(){
    $("img").click(function(){
        $(this).hide();
    })
    $("#btn_restore").click(function(){
        $("img").show();
    })
})