// Wrap Document.ready
$(document).ready(function() {
    console.log("Document is Ready");

    // Define Global Variables
    var todayDate = dayjs().format("dddd, MMMM D");
        console.log("Current date returned with dayjs call " + todayDate);
    
    var currentTime = dayjs().format("h:mm A");
        console.log("Current time returned with dayjs call " + currentTime);

    var currentHour = dayjs().hour();
        console.log("Current hour returned with dayjs call " + currentHour);

    var scheduleEntry;

    // Add Event Handlers
    

    // Define Script Logic

        // When page loads....
            // Get current date and time and display in jumbotron...
            $ ("#currentDay").text(todayDate);

            // Assign color coding to time blocks...

                //Loop through all elemenets with timeBlock class using jQuery each method...
                $(".timeBlock").each(function(){

                // Check the data-hour attribute of the element...
                var elemenetDataHour = $(this).attr("data-hour");
                    console.log("data-hour attribute retrieved for elemenet on this increment = " + elemenetDataHour);

                // Compare it to the variable I defined with dayjs for currentHour

                    // If the elements time is before the current time, indicate its a past item
                    if (elemenetDataHour < currentHour) {
                        $(this).addClass ("pastColor");
                    }

                    // If the elemenets time is in the current time hour, indicate its a current item
                    if (elemenetDataHour == currentHour) {
                        $(this).addClass ("presentColor");
                    }

                    // If the elemenets time is ahead of the current hour, indicate it's a future hour
                    if (elemenetDataHour > currentHour) {
                        $(this).addClass ("futureColor");
                    }
                })

                // Populate input fields with the stored local content

   
        // When a user types an entry and hits the schedule button...
        $(".scheduleButton").click(function() { 
            console.log("detected schedule button click");
            console.log ("Event 1 Value is" + $("#event1").val());

            // Capture text inputted to the button's sibling input element...(HOW TO TRAVERSE DOM UP TWO OVER THEN DOWN FOR THIS?)
            scheduleEntry = $(this).parentsUntil(".buttonGrandParent").siblings(".buttonGrandParentSibling").children().val();
                console.log("Schedule Event Captured For Local Storage = " + scheduleEntry);

            // Store it to local storage with a key unique to that input...



        })



})
