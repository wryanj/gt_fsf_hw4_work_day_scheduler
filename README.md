# gt_fsf_hw5_work_day_scheduler
This is the fifth assignment related to the gt full stack course I took, with goal being to mature some starter code and build a work day scheduler using jQuery.

## Table of Contents

1.  [Deployed Application](#Deployed-Applicatoin)
2.  [Motivation](#Motivation)
3.  [Description](#Description)
4.  [Credits](#Credits)

## Deployed Application
[https://wryanj.github.io/gt_fsf_hw5_work_day_scheduler/]

## Motivation
I did this to progress my knowledge on jQuery, and also learned about some time and date APIs such as day.js.

## Description
This assignment provided some starter code, but I chose not to use it very heavily. I did not use any of the original CSS, I instead made my own styling using bootsrap 4.5 and took the link to the starter CSS out:  

![image](https://user-images.githubusercontent.com/72420733/104962098-b836b100-59a5-11eb-8684-ddbfccf2eea3.png)

This satisfies the homework acceptance criteria, but I did not style it exactly like the example provided.  I left the schedule input fields always white for readability, and instead color coded the time blocks to the left of each line rather than changing background color of the schedule entry line. For color coding time blocks, rather than use red green and grey, I used grey for past, green for current, and a blue for future since red indicates past due a lot of times in real world applications. 

In addition I added a clear schedule button that clears local storage and re-sets values of the schedule inputs to a blank string:

![image](https://user-images.githubusercontent.com/72420733/104962211-f207b780-59a5-11eb-85ea-7ae353f3d584.png)

For displaying the date, I used dayjs instead of monument since most items I read said monument is winding down. In addition to getting a date to display at the top of the page, I defined a variable that gets the current hour from dayjs and then I compare that with some data-hour attributes I gave each html schedule item row to determine the color of the time blocks on a given day, relative to the current day:

![image](https://user-images.githubusercontent.com/72420733/104961811-11eaab80-59a5-11eb-8841-2dc5b9ab911e.png)

Using jQuery was much shorter than doing just vanilla javascript. I was able to get a fast grasp on why one would want to use such a framework, since it cut down on a lot of code lines compared to doing it without jQuery. I also didnt have to define variables for elements I wanted to get using javascript, since I can instead just get them by using $(selector) with jQuery. This was much less time consuming than the previous assignment for this reason. 


## Credits
I utilized some stack, w3 schools, mozilla, jQuery documentation and class notes to completed this work. The approach I took was all my own logic. 
