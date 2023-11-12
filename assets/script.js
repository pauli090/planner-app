// Display the current day at the top of the calender when a user opens the planner.
var currentdayEl = dayjs().format('dddd DD MMMM');
$("#currentDay").text(currentdayEl);

// Present timeblocks for standard business hours when the user scrolls down.
var hourEl = document.querySelector(".hour");
var now = dayjs().hour();

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
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

// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
})

// Persist events between refreshes of a page
for(var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
}