# Mavros Manual Control

This document is to intended to track the directional controls of the radio to the `manual_control` values in mavros.

## Throttle

Left stick, between 0 and 1
Uses +z

## Left Stick

Moving to left = -R (-1.0)
Moving to right = +R (1.0)

0 in the center

## Right Stick

Moving up = +X (1.0)
Moving down = -X (-1.0)
Moving left = -Y (-1.0)
Moving right = +Y (1.0)

## Thoughts

Since we're using a car and not a drone, we have an entire axis of movement that we won't be using, IE, roll.

We'd like to use the right stick to control the throttle since it will reset back to the zero position. We'd like to use the left stick for turning since it's easier. Ideally, of course, the Jetson would be doing 95% of the movement in general since that's the whole purpose of this project.
