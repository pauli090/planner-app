// Display the current day at the top of the calender when a user opens the planner.
var currentdayEl = dayjs().format('dddd DD MMMM');
$("#currentDay").text(currentdayEl);

var hourEl = document.querySelector(".hour");

// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
//for every hour in the rows change description column to different colour acording current time
var now = dayjs().hour();

$(".time-block").each(function() {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlock < now) {
        $(this).addClass("past");
    } else if (timeBlock === now) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})

$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
})

for(var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
}

// function colorCodeblock() {
    
//     $(".description").addClass("present");
        
//     }

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page