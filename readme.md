# runEveryMinute

A reusable routine that runs a routine at the top of a minute with no drift. 

### A well-known JavaScript problem, solved

The goal is to reduce drift in my everyMinute functions. This is how I do it. 

Every second we check if it's time for us to run the everyMinute script, if so we do. 

It still isn't accurate, but it does eliminate drift. 

It always is within a second or at most two from the top of the minute, and then it gets back on track with the next call. 

Drift is gone. Accuracy is still mediocre. 

My brute force method worked, and it's actually quite elegant. I'm going to install it in daveutils, so it'll be available to all my apps. There already is a routine there called runEveryMinute, and this will just replace it. 

