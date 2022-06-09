var nineAm = {
    id: "9",
    events: ""};
var tenAm = {
    id: "10",
    events: ""};
var elevenAm = {
    id: "11",
    events: ""};
var twelvePm = {
    id: "12",
    events: ""};
var onePm = {
    id: "1",
    events: ""};
var twoPm = {
    id: "2",
    events: ""};
var threePm = {
    id: "3",
    events: ""};
var fourPm = {
    id: "4",
    events: ""};
var fivePm = {
    id: "5",
    events: ""};

$(document).ready(function (){
    loadEvents;
    printEvents;
    console.log(hourEvents);
})

//array holding hours and associated event data 
var hourEvents = [
    nineAm, tenAm, elevenAm, twelvePm, 
    onePm, twoPm, threePm, fourPm, fivePm
];

//print loaded events 
var printEvents = function(hourEvents){
    for (var i = 0; i < hourEvents.length; i++) {
        $(".row-p").text(hourEvents[i]);
        var id = hourEvents[i].id
        hourEvents[i].moment().set('hour', id)
    }
}

//save events to local storage
var saveEvents = function() {
    localStorage.setItem("hourEvents", JSON.stringify(hourEvents));
}

//load events from local storage
var loadEvents = function() {
    hourEvents = localStorage.getItem("hourEvents");
    hourEvents = JSON.parse(hourEvents);
    console.log(hourEvents);
}

//display date in jumbotron
var currentHour = moment().format('hh a')
var currentTime = moment().format('dddd MMMM Do YYYY');
var jumbotronTime = $(".jumbotronTime");
jumbotronTime.text(currentTime);

//on click text area change to from p to input element
$(".row").on("click", "p", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control ")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

//on click off element, change from input back to p with new text
$(".row").on("blur", "textarea", function(){
    var text = $(this)
        .val()
        .trim();
    var hour = $(this)
        .closest(".row")
        .attr("id");
    console.log(hour);
    var textEvent = $("<p>")
        .text(text);
    $(this).replaceWith(textEvent);
    saveEvents;
})

var timeNine = moment().set('hour', 9);

//audit blocks
var auditNine = function () {
    if (currentHour.isBefore(timeNine)) {
        $("#nineAm")
            .removeClass(".future .present")
            .addClass(".past");
    }
    else if (currentHour.isAfter(timeNine)) {
        $("#nineAm")
            .removeClass(".past .present")
            .addClass(".future");
    }
    else {
        $("#nineAm")
            .removeClass(".past .future")
            .addClass(".present");
    }
}


