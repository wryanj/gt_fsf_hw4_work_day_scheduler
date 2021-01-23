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

                    // Then, use the data-hour attribute value to check localStorage for existance of a key...
                    var retrievedScheduleEvent = localStorage.getItem(elemenetDataHour);
                        console.log ( "local storage item retrieved for this increment = " + retrievedScheduleEvent);

                        // If a key exists, take the value for that key and populate the rows input elemenet with the prior text string stored...

                            // If Sometthing exists in local storage...
                            if (retrievedScheduleEvent!= null) {
                                console.log("Detected that a schedule event exists for the dataHour attribute for this incremenet")

                                // Set the text of the input element for this row equal to the retrievedScheduleEvent by traversing DOM...
                                $(this).siblings().find("input").val(retrievedScheduleEvent);
                                    console.log("Populated the retrived value to the input field for this input")
                            }
                            // If nothing exists, populate empty strings in all inputs (to support the clear schedule)
                            else {
                                $(this).siblings().find("input").val("");
                                console.log("Ensured and empty string exists for this input since no prior values were detected")
                            }
                })

        // When a user types an entry and hits the schedule button...
        $(".allScheduleButtons").click(function() { 
            console.log("detected schedule button click");
            

            // Traverse the DOM from this button to get the value for it's related input elemenet...
            scheduleEntry = $(this).parent().parent().siblings().children().val();
                console.log("User Event Scheduled = " + "'" + scheduleEntry + "'");

            // Store it to local storage with a key unique to that input...
            
                // Traverse the dom to get the data hour attribute of the overall row to set as the key..
                var localKey = $(this).parents("form").siblings().attr("data-hour");
                    console.log("local key generated for this schedule item is " + localKey);

                // Store the value for this input with the local key using javascript localstore method...
                localStorage.setItem(localKey, scheduleEntry);
        })

        // When a user hits the clear Schedule Button...
        $("#clearScheduleButton").click(function() {
            console.log ("Clear Schedule Button Press Detected");

            // Clear the local storage
            localStorage.clear();

            // Refresh the page to re run the code upon page load, including re-setting empty values if no prior one is in local storage...
            location.reload();
        })

})
