$(document).ready(function() {

    //Check Off item on list
    $("ul").on("click", "li",function(){
        $(this).toggleClass("checkedOff");
    });

    //Delete item
    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

    //Add item with 'enter' keypress
    $("input[type='text']").keypress(function(event){
        if(event.which === 13) {
            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>");            
        }
    });

    //Toggle view/edit mode
    $("#toggle-form").click(function(){
        $("input[type='text']").fadeToggle();
    });

});