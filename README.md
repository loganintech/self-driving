# RC Car - Group 42

Hopefully this document will provide a point of reference for the different aspects of our project. The bulk of the work takes place in the `workspace` directory, the top-level directory for [our catkin workspace](http://wiki.ros.org/catkin/).

## Workspace

This is where the majority of work is done. For the review, you'll want to read the configs in `not_a_car_2dnav`. `nav_base` is mostly cloned code, but there's some parameters in `costmap_2d`, `global_planner`, `move_base`, and `base_local_planner` that were changed.

## Documentation

Here is where we keep notes about some things. These documents change as we change our implementation. For example, the mavros document used to be quite a bit longer before we opted to go another route. The other doc should help if you're interested in running the platform locally.

## Util

In the util folder we keep any non-specific scripts. Right now, we just have one that makes a kernel call to change the fan speed. However, this has been deprecated as the new Nvidia platform image automatically adjusts fan speed according to device temperature.

## Temp

This is where we keep a script that could be deleted, but is nice to have archived. We used this script to install the geographlib databases as described in the first start document.

## Docs

The source code to our LaTeX documents including our progress report, requirements doc, and more.
