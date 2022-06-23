var timeAudit = moment().format("HH")
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

var timeNine = moment("09", "HH").format("HH");
var timeTen = moment("10", "HH").format("HH");
var timeEleven = moment("11", "HH").format("HH");
var timeTwelve = moment("12", "HH").format("HH");
var timeOne = moment("13", "HH").format("HH");
var timeTwo = moment("14", "HH").format("HH");
var timeThree = moment("15", "HH").format("HH");
var timeFour = moment("16", "HH").format("HH");
var timeFive = moment("17", "HH").format("HH");

var auditNine = function () {
        if (timeNine < timeAudit) {
            $("#nineAM").addClass("past").removeClass("future present");
        }
        else if (timeNine > timeAudit) {
            $("#nineAM").addClass("future").removeClass("past present");
        }
        else {
            $("#nineAM").addClass("present").removeClass("past future");
        }
    }

var auditTen = function () {
        if (timeTen < timeAudit) {
            $("#tenAM").addClass("past").removeClass("future present");
        }
        else if (timeTen > timeAudit) {
            $("#tenAM").addClass("future").removeClass("past present");
        }
        else {
            $("#tenAM").addClass("present").removeClass("past future");
        }
    }
    
var auditEleven = function () {
        if (timeEleven < timeAudit) {
            $("#elevenAM").addClass("past").removeClass("future present");
        }
        else if (timeEleven > timeAudit) {
            $("#elevenAM").addClass("future").removeClass("past present");
        }
        else {
            $("#elevenAM").addClass("present").removeClass("past future");
        }
    }

var auditTwelve = function () {
        if (timeTwelve < timeAudit) {
            $("#twelvePM").addClass("past").removeClass("future present");
        }
        else if (timeTwelve > timeAudit) {
            $("#twelvePM").addClass("future").removeClass("past present");
        }
        else {
            $("#twelvePM").addClass("present").removeClass("past future");
        }
    }

var auditOne = function () {
        if (timeOne < timeAudit) {
            $("#onePM").addClass("past").removeClass("future present");
        }
        else if (timeOne > timeAudit) {
            $("#onePM").addClass("future").removeClass("past present");
        }
        else {
            $("#onePM").addClass("present").removeClass("past future");
        }
    }

var auditTwo = function () {
        if (timeTwo < timeAudit) {
            $("#twoPM").addClass("past").removeClass("future present");
        }
        else if (timeTwo > timeAudit) {
            $("#twoPM").addClass("future").removeClass("past present");
        }
        else {
            $("#twoPM").addClass("present").removeClass("past future");
        }
    }

var auditThree = function () {
        if (timeThree < timeAudit) {
            $("#threePM").addClass("past").removeClass("future present");
        }
        else if (timeThree > timeAudit) {
            $("#threePM").addClass("future").removeClass("past present");
        }
        else {
            $("#threePM").addClass("present").removeClass("past future");
        }
    }

var auditFour = function () {
        if (timeFour < timeAudit) {
            $("#fourPM").addClass("past").removeClass("future present");
        }
        else if (timeFour > timeAudit) {
            $("#fourPM").addClass("future").removeClass("past present");
        }
        else {
            $("#fourPM").addClass("present").removeClass("past future");
        }
    }

var auditFive = function () {
        if (timeFive < timeAudit) {
            $("fivePM").addClass("past").removeClass("future present");
        }
        else if (timeFive > timeAudit) {
            $("#fivePM").addClass("future").removeClass("past present");
        }
        else {
            $("#fivePM").addClass("present").removeClass("past future");
        }
    }


var finalAudit = function() {
    auditNine();
    auditTen();
    auditEleven();
    auditTwelve();
    auditOne();
    auditTwo();
    auditThree();
    auditFour();
    auditFive()
}

setInterval(finalAudit, 1000);


