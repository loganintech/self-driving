# Running the Bot

A few things to ensure first:
* The ZED camera must be plugged into a USB 3 port
* The RPLidar must be spinning. Occasionally it doesn't start spinning when the bot starts.
* The Pixhawk must be plugged in, `chmod 666`'d, and armed (which sometimes happens automatically)
* The Pixhawk MUST have a satellite connection. If it doesn, everything will seem like it's working but simply won't move.

Then, all you have to do is:
* Start `roscore`
* Type `run` 
  * This is just a bash alias for `roslaunch not_a_car_2dnav liftoff.launch`


