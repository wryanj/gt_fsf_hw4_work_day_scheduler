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

    // Add Event Handlers
    

    // Define Script Logic

        // When page loads get current date and time and display in jumbotron...
        $ ("#currentDay").text(todayDate);

        // Then assign color coding to time blocks based on current date and time...

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

                
        // Store schedule entries locally upon click of the Schedule button for that time block

})
