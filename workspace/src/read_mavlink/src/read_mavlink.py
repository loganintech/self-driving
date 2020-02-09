#!/usr/bin/python3

import rospy
from mavlink_msgs.msg import ManualControl

def callback(mc):
    rospy.loginfo("[%s] - Data: %s" % (rospy.get_caller_id(), str(mc)))

def listener():
    rospy.init_node('read_mavlink', anonmyous=True)
    sub = rospy.Subscriber('mavros_control/control', ManualControl, callback)

    rospy.spin()


if __name__ == '__main__':
    listener()
