var timeAudit = moment().set();
var nineAM = $("#nineEvents");
var tenAM = $("#tenEvents");
var elevenAM = $("#elevenEvents");
var twelvePM = $("#twelveEvents");
var onePM = $("#oneEvents");
var twoPM = $("#twoEvents");
var threePM = $("#threeEvents");
var fourPM = $("#fourEvents");
var fivePM = $("#fiveEvents");

$(document).ready(function (){
    loadEvents;
    printEvents;
})

//array holding hours and associated event data 
var events = [
    {
        hour: moment('09:00 AM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('10:00 AM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('11:00 AM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('12:00 PM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('01:00 PM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('02:00 PM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('03:00 PM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('04:00 PM', "hh:mm A"),
        events: "",
    },
    {
        hour: moment('05:00 PM', "hh:mm A"),
        events: "",
    }
]

//display date in jumbotron
var currentHour = moment().format('hh a')
var currentTime = moment().format('dddd MMMM Do YYYY');
var jumbotronTime = $(".jumbotronTime");
jumbotronTime.text(currentTime);

//print loaded events from array to matching element 
var printEvents = function(events){
    for (var i = 0; i < events.length; i++) {
        nineAM.text(events[0].events);
        tenAM.text(events[1].events);
        elevenAM.text(events[2].events);
        twelvePM.text(events[3].events);
        onePM.text(events[4].events);
        twoPM.text(events[5].events);
        threePM.text(events[6].events);
        fourPM.text(events[6].events);
        fivePM.text(events[7].events);
    }
}

//save events to local storage
var saveEvents = function() {
    events[0].events = nineAM.text().trim();
    events[1].events = tenAM.text().trim();
    events[2].events = elevenAM.text().trim();
    events[3].events = twelvePM.text().trim();
    events[4].events = onePM.text().trim();
    events[5].events = twoPM.text().trim();
    events[6].events = threePM.text().trim();
    events[7].events = fourPM.text().trim();
    events[8].events = fivePM.text().trim();
    localStorage.setItem("events", JSON.stringify(events));
}

//load events from local storage
var loadEvents = function() {
    events = localStorage.getItem("events");
    events = JSON.parse(events);
}
//on click text area change to from p to input element
$(".row").on("click", "p", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

//on click off element, change from input back to p with new text
$(".row").on("blur", "textarea", function(){
    var text = $(this)
        .val()
        .trim();
    var textEvent = $("<p>")
        .text(text);
    $(this).replaceWith(textEvent);
    saveEvents();
})

//audit blocks using set moment hour in array of events 
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

