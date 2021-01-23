// Wrap Document.ready
$(document).ready(function() {
    console.log("Document is Ready");

    // Define Global Variables
    var todayDate = dayjs().format("dddd, MMMM D");
        console.log("Current date returned with dayjs call " + todayDate);
    
    var currentTime = dayjs().format("h:mm A"); //Not using this, just playing with dayjs on time.
        console.log("Current time returned with dayjs call " + currentTime);

    var currentHour = dayjs().hour();
        console.log("Current hour returned with dayjs call " + currentHour);

    var scheduleEntry;
    
    // Define Script Logic

        // When page loads....

            // Get current date (that i got above via api call to dayjs) and display in jumbotron...
            $ ("#currentDay").text(todayDate);

            // Assign color coding to time blocks based on if its a time in the past, present, or future...

                // Loop through all elemenets with timeBlock class using jQuery each method...
                $(".timeBlock").each(function(){

                // Check the data-hour attribute of the element...
                var elemenetDataHour = $(this).attr("data-hour");

                    // First, compare each data-hour attribute to the variable I defined with dayjs for currentHour to set time block colors...

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

                    // Then, use the data-hour attribute value to check localStorage for existance of a key (indicating a saved schedule item exists already for that line)...
                    var retrievedScheduleEvent = localStorage.getItem(elemenetDataHour);

                        // If a key exists, take the value associated for that key and populate the rows input element with the saved string...

                            // If Sometthing exists in local storage...
                            if (retrievedScheduleEvent!= null) {

                                // Set the text of the input element for this row equal to the retrievedScheduleEvent by traversing DOM...
                                $(this).siblings().find("input").val(retrievedScheduleEvent);
                            }

                            // If nothing exists, populate empty string in the input (to support the clear schedule button functionality below)
                            else {
                                $(this).siblings().find("input").val("");
                            }
                })

        // When a user types an entry and hits the schedule button...
        $(".allScheduleButtons").click(function() { 

            // Traverse the DOM to find the input line on the same row as this schedule button, and populate the entered text to that input elemement...
            scheduleEntry = $(this).parent().parent().siblings().children().val();
                console.log("User Event Scheduled = " + "'" + scheduleEntry + "'");

            // The, store it to local storage with a key unique to that input elemenet (e.x save the text for the 11 AM row for 11 AM)
            
                // Traverse the dom to get the data hour attribute of the overall row and then set it as the key for local storage..
                var localKey = $(this).parents("form").siblings().attr("data-hour");
                    console.log("local key generated for this schedule item is " + localKey);

                // Store the value for this input with the local key using javascript localstore method...
                localStorage.setItem(localKey, scheduleEntry);
        })

        // When a user hits the Clear Schedule Button...
        $("#clearScheduleButton").click(function() {
            console.log ("Clear Schedule Button Press Detected");

            // Clear the local storage out
            localStorage.clear();

            // Refresh the page (based on code for refresh page, this will set emptry strings to all inputs with no local storage)...
            location.reload();
        })

})
