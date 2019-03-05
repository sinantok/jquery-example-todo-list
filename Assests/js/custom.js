$("ul").on("click","li",function(){

    $(this).toggleClass("tamamlanmıs");
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13)
    {
        var txt = $(this).val 
        if(txt !== "")
        {
            $("ul").append("<li><span><i class='fas fa-window-close'> </i></span>" +" "+ $(this).val() + "</li>");
            $(this).val("");
        }
    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});