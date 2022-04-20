# Critical Mass - FrontEnd Take Home Assignment

Hello! This is my submission for the frontend developer take home assignment (Retail_InStore_Developer_Exercise)

I used Vanilla JS, as well as HTML and CSS as per the instructions pdf. There were a few choices I made and extra things I added that I wanted to point out:

1.  I only own a PC so I wasn't able to test it for Safari, however I think it should be fine. The only thing I'm unsure of is the fetch call that may have something funky ala a CORS exception. I was testing it using a basic http-server on Chrome, but please let me know if there's any issues!

2.  Rather than just looking at the JSON file and hardcoding in the locations, I wanted to make it more dynamic so you could add, remove or change the cities being displayed in the nav. I used the fetch() api with the url of the json file (files/navigation.json), then dynamically created the DOM elements in the response. 

3. I decided to use divs rather than a nav element with anchor tags since it isn't actually navigating anywhere and it made more sense to me this way. Now that I'm looking at the hover colour of the tabs in the video though, I'm think it was meant to be a nav tag haha.

4. There was the small note about resizing so I added something that would keep the slider in the correct postion when resizing (while the nav would still be a horizontal line). It would need a completely different styling for a smaller screen, but there wasn't any indication on what you'd want there so I just left it.

For the bonus section:

1. To do the times in each city, I added the respective time zone to each array element in the json (which is included in this repo). There wasn't a ton of direction there so I figured it would be cleaner in this small project than trying to do a bunch of api calls that require keys to get a time zone for a city.

2. Finally, I would usually used a library (properly licensed of course) for something like the clock but since we were meant to steer away from them I used https://www.foolishdeveloper.com/2021/07/simple-analog-clock-html-css-javascript.html as a reference for all the math that was required for the rotations. 

I'm including this video to show it working on my machine - I also added a little night colour shift based on the time because I thought it would be fun :)  

https://user-images.githubusercontent.com/30347791/164328841-39d0705b-e2c9-4eac-93a2-b1853f29ac60.mp4

