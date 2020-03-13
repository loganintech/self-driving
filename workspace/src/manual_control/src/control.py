import rospy
from mavros_msgs.msg import ManualControl
import tty
import sys
import termios
import threading
import time
import queue
import select
from random import random

dest_node = "/mavros/manual_control/send"

def main():
    print("Starting manual control")
    print("Press WASD to move, hold ESC to exit")

    pub = rospy.Publisher(dest_node, ManualControl, queue_size = 1) # Queue size one because we always want the most recent data

    rospy.init_node('manual_control_keyboard')
    rate = rospy.Rate(10) # 10 hz

    frame_id = 0

    while not rospy.is_shutdown():
        ch = read_key()
        if ord(ch) == 27: # If it's the escape key
            exit(1)
        ctrl = get_control(ch, frame_id)
        frame_id += 1
        pub.publish(ctrl)
        rospy.loginfo(ctrl)

        rate.sleep()


def get_control(char, frame_id):

    debugging = False

    multiplier = 0.5
    msg = ManualControl()
    msg.header.frame_id = "manual_control_frame"
    msg.header.seq = frame_id
    now = rospy.get_rostime()
    msg.header.stamp.secs = now.secs
    msg.header.stamp.nsecs = now.nsecs

    if debugging:
        msg.x = multiplier
        msg.y = multiplier
        msg.z = multiplier
        msg.r = multiplier

    if char == 'w':
        msg.x = multiplier * 1

    if char == 's':
        msg.x = multiplier * -1

    if char == 'a':
        msg.y = multiplier * -1

    if char == 'd':
        msg.y = multiplier * 1

    if debugging:
        msg.r = random() % 1 # No roll on car
        msg.z = random() % 1 # No up or down on car
    else:
        msg.r = 0.0
        msg.z = 0.0
    return msg

def read_key():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
    except ValueError:
        exit(1)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return ch


if __name__ == "__main__":
    main()
