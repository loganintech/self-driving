import rospy
from mavros_msgs.msg import OverrideRCIn
import tty
import sys
import termios
import threading
import time
import queue
import select
from random import random

dest_node = "/mavros/rc/override"

def main():
    print("Starting manual control")
    print("Press WASD to move, hold ESC to exit")

    pub = rospy.Publisher(dest_node, OverrideRCIn, queue_size = 1) # Queue size one because we always want the most recent data

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

    msg = OverrideRCIn()
#    msg.header.frame_id = "manual_control_frame"
#    msg.header.seq = frame_id
    #now = rospy.get_rostime()
#    msg.header.stamp.secs = now.secs
#    msg.header.stamp.nsecs = now.nsecs
    #msg.rssi = 0

    msg.channels = [1500, 1500, 1100, 1500, 1100, 1100, 1900, 1900]

    if char == 'w':
        msg.channels[1] = 1525

    if char == 's':
        msg.channels[1] = 1475

    if char == 'a':
        msg.channels[0] = 1100

    if char == 'd':
        msg.channels[0] = 1900

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
