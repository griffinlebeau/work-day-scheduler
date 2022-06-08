$(".row").on("click", "p", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control ")
        .val(text);
    $(this).replaceWith(textInput);
});

$(".row").on("blur", "textarea", function(){
    var text = $(this)
        .val()
        .trim();
    var textEvent = $("<p>")
        .text(text);
    $(this).replaceWith(textEvent);  
})
