# runEveryMinute

Runs a JavaScript callback with setInterval, at the top of every minute, with no drift. 

### No drift scheduling in JS

A well-known JavaScript <a href="https://www.google.com/search?q=javascript+drift+setinterval">problem</a>, solved.

Some functions in servers and browser software need to run periodiically, say once a minute. If you code it in a straightforward way you get drift. The scheduling in JS is imperfect, and always errs on the side of running the code later than you requested, so after a few days it's running at 3 seconds into the minute, then 22 seconds, and so on. It becomes kind of a random number. I prefer everyMinute code to run at the top of the minute, always. And that's what this function does. 

It's simple, even brute force. It wakes up every second and sees if it's the top of the minute. If so it runs the callback. It has a backup plan, if it's been more than a minute since you ran the callback, it runs it now, and starts again at minute 0.

I tried more mathematical solutions, but they didn't work as well as this method. :-)

