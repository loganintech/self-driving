# RC Car - Group 42

Hopefully this document will provide a point of reference for the different aspects of our project. The bulk of the work takes place in the `workspace` directory, the top-level directory for [our catkin workspace](http://wiki.ros.org/catkin/).

_Disclaimer_: Unless you have a Nvidia Jetson flashed with a Jetpack image from the Nvidia Developer Program AND a pixhawk, zed camera, and an rplidar a3, there is no chance you'll be able to build this locally. However, we have provided a way you can SSH into our device to look around. We've also created a disk image so that if you accidentally break something, there's no harm done. That said, please try not to edit / move / delete / reformat anything. Thanks! **Logan will provide credentials for the user at the beginning of the code review.**

Furthermore, if you want to see the desktop (which shows you rviz, and all the systems working together), then you need to download and install the `Remmina` VNC viewer. It will let you tunnel into the VNC connection through an SSH connection which is required because it's the only way we can tunnel the VNC server's data out to the world. We'd use something like TeamViewer, but the hardware is an ARM chip and they don't have builds for that. Otherwise, Logan will happily share his connection through Zoom so you can see the desktop as you interact. 

## Workspace

This is where the majority of work is done. For the review, you'll want to read the configs in `not_a_car_2dnav`. `nav_base` is mostly cloned code, but there's some parameters in `costmap_2d`, `global_planner`, `move_base`, and `base_local_planner` that were changed.

### not_a_car_2dnav

Within this folder is the `liftoff.launch` file which does most of the configuration for the sensors and "back end" of the robot. It starts up the RPLidar, the Zed Odometry Camera, the node which converts the Zed's pointclouds to laserscans, our SLAM gmapping tech, the transformation base for the rplidar, the transformation base for the zed, the static transforms for our nodes, and the connection to the pixhawk via mavros.

### nav_base

#### costmap_2d

#### global_planner

#### move_base

#### base_local_planner

### Manual Control

This is the folder that contains our `control.py` script. This is a small script that lets us control the vehicle from the command line. Essentially, it loops over standard in looking for input and converts the input into RC signals that are sent to the pixhawk. Then the pixhawk does its duty to move the wheels. It's worth reviewing the `OverrideRCIn` message [which can be found on the wiki](http://wiki.ros.org/mavros#mavros.2FPlugins.rc_io). We also have some documentation on these channels in the documentation folder.

## Documentation

Here is where we keep notes about some things. These documents change as we change our implementation. For example, the mavros document used to be quite a bit longer before we opted to go another route. The other doc should help if you're interested in running the platform locally.

## Util

In the util folder we keep any non-specific scripts. Right now, we just have one that makes a kernel call to change the fan speed. However, this has been deprecated as the new Nvidia platform image automatically adjusts fan speed according to device temperature. Also in this folder is an excerpt of our `.bashrc` which contains some aliases for starting the bot and our remote work sessions.

## Temp

This is where we keep a script that could be deleted, but is nice to have archived. We used this script to install the geographlib databases as described in the first start document.

## Docs

The source code to our LaTeX documents including our progress report, requirements doc, and more.
