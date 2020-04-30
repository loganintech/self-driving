# RC Car - Group 42

Hopefully this document will provide a point of reference for the different aspects of our project. The bulk of the work takes place in the `workspace` directory, the top-level directory for [our catkin workspace](http://wiki.ros.org/catkin/).

_Disclaimer_: Unless you have a Nvidia Jetson flashed with a Jetpack image from the Nvidia Developer Program AND a pixhawk, zed camera, and an rplidar a3, there is no chance you'll be able to build this locally. However, we have provided a way you can SSH into our device to look around. We've also created a disk image so that if you accidentally break something, there's no harm done. That said, please try not to edit / move / delete / reformat anything. Thanks! **Logan will provide credentials for the user at the beginning of the code review.**

Furthermore, if you want to see the desktop (which shows you rviz, and all the systems working together), then you need to download and install the `Remmina` VNC viewer. It will let you tunnel into the VNC connection through an SSH connection which is required because it's the only way we can tunnel the VNC server's data out to the world. We'd use something like TeamViewer, but the hardware is an ARM chip and they don't have builds for that. Otherwise, Logan will happily share his connection through Zoom so you can see the desktop as you interact. 

## Workspace

This is where the majority of work is done. For the review, you'll want to read the configs in `not_a_car_2dnav`. `nav_base` is mostly cloned code, but there's some parameters in `costmap_2d`, `global_planner`, `move_base`, and `base_local_planner` that were changed.

### not_a_car_2dnav

Within this folder is the `liftoff.launch` file which does most of the configuration for the sensors and "back end" of the robot. It starts up the RPLidar, the Zed Odometry Camera, the node which converts the Zed's pointclouds to laserscans, our SLAM gmapping tech, the transformation base for the rplidar, the transformation base for the zed, the static transforms for our nodes, and the connection to the pixhawk via mavros.

### tf_base

This folder contains code that we wrote before we found out about a pre-built package about static transforms. It's helpful, though, to review, because it may give you a good insight into how transforms are defined. We have three CPP files, each of which handle an individual transform broadcaster. I recommend reviewing `tf_zed.cpp`. That will show you how we create a transform broadcaster, set the rate at which it publishes, and show how the quaternion rotations and vector offsets work together to creat a stamped transform. Since we don't have any moving parts in our robot (aside from the wheels), we are able to use static transforms (which can be viewed at the bottom of `liftoff.launch`) which is verified by the magic numbers put in the quaternions and vector3s. If we wanted, they could easily be variables with complicated logic that references where they are at the particular point, where they're moving from and to, etc.

### nav_base
This floder set up a 2D navigation stack that takes in information from odometry, sensor streams. It also includes basic navigation stack configuration.

#### costmap_2d

#### global_planner

#### move_base
Before using move_base, we set up some parameters: running cost, robot radius, distance to the target position, and speed of robot movement. These parameters are in the following configuration files in the src floder
       • base_local_planner_params.yaml
       • costmap_common_params.yaml
       • global_costmap_params.yaml
       • local_costmap_params.yaml
Within this floder, "move_base.launch" starts up those yaml files and move_base will try to make the mobile robot move to the set target point through global and local path planning.

#### base_local_planner
The base_local_planner package uses map data to search for multiple paths to the target through an algorithm, uses some evaluation criteria (whether it will collide with obstacles, time required, etc.) to select the best path, and calculates the required real-time speed and angle. The performance of path planning strategies in traditional navigation is poor. So we used teb_local_planner instead.

### manual_control

This is the folder that contains our `control.py` script. This is a small script that lets us control the vehicle from the command line. Essentially, it loops over standard in looking for input and converts the input into RC signals that are sent to the pixhawk. Then the pixhawk does its duty to move the wheels. It's worth reviewing the `OverrideRCIn` message [which can be found on the wiki](http://wiki.ros.org/mavros#mavros.2FPlugins.rc_io). We also have some documentation on these channels in the documentation folder.

## Documentation

Here is where we keep notes about some things. These documents change as we change our implementation. For example, the mavros document used to be quite a bit longer before we opted to go another route. The other doc should help if you're interested in running the platform locally.

## Util

In the util folder we keep any non-specific scripts. Right now, we just have one that makes a kernel call to change the fan speed. However, this has been deprecated as the new Nvidia platform image automatically adjusts fan speed according to device temperature. Also in this folder is an excerpt of our `.bashrc` which contains some aliases for starting the bot and our remote work sessions.

## Temp

This is where we keep a script that could be deleted, but is nice to have archived. We used this script to install the geographlib databases as described in the first start document.

## Docs

The source code to our LaTeX documents including our progress report, requirements doc, and more.
