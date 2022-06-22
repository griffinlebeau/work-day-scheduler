var timeAudit = moment().set();
var nineAM = $(".nine-row");
var tenAM = $(".ten-row");
var elevenAM = $(".eleven-row");
var twelvePM = $(".twelve-row");
var onePM = $(".one-row");
var twoPM = $(".two-row");
var threePM = $(".three-row");
var fourPM = $(".four-row");
var fivePM = $(".five-row");

var events = {}

var printEvents = function(events){
    nineAM.text(events["nineAM"]);
    tenAM.text(events["tenAM"]);
    elevenAM.text(events["elevenAM"]);
    twelvePM.text(events["twelvePM"]);
    onePM.text(events["onePM"]);
    twoPM.text(events["twoPM"]);
    threePM.text(events["threePM"]);
    fourPM.text(events["fourPM"]);
    fivePM.text(events["fivePM"])
}

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
}

var loadEvents = function(events) {
    events = JSON.parse(localStorage.getItem("events"));
    if (!events) {
        events = {
            nineAM: "",
            tenAM: "",
            elevenAM: "",
            twelvePM: "",
            onePM: "",
            twoPM: "",
            threePM: "",
            fourPM: "",
            fivePM: "",
        }
    }
    else {
        printEvents(events);
    }
}

$(document).ready(function(){
    if (events){
        loadEvents(events);
    }
})

console.log(events)


$(".row").on("click", "p", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .addClass("new-text")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".row").on("blur", "textarea", function(){
    var hour = $(this)
        .closest(".row-hour")
        .attr("id");
    console.log(hour);
    var text = $(this).val().trim();
    var newP = $("<p>");
    newP.text(text);
    $(this).replaceWith(newP);
    events[hour] = text;
    saveEvents();
})

var currentHour = moment().format('hh a')
var currentTime = moment().format('dddd MMMM Do YYYY');
var jumbotronTime = $(".jumbotronTime");
jumbotronTime.text(currentTime);

var auditTime = function () {
    for (var i = 0; i < events.length; i++) {
        if (events[i].hour.isBefore(timeAudit)) {
            $(".row")
                .addClass(".past")
                .removeClass(".future .present");
        }
        else if (events[i].hour.isAfter(timeAudit)) {
            $(".row")
                .addClass(".future")
                .removeClass(".past .present");
        }
        else {
            $(".row")
                .addClass(".present")
                .removeClass(".past .future");
        }
    }
}

setInterval(auditTime, 100000);

