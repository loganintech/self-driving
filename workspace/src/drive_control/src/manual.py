#!/usr/bin/python

import rospy
from mavros_msgs.msg import ManualControl
from std_msgs.msg import Header

def run():
    pub = rospy.Publisher('manual_control/send', ManualControl, queue_size=1) # If we give it a new direction, we want to use that immediately (so queue of 1)
    rospy.init_node('drive_control')
    rate = rospy.Rate(10) # 10hz
    while not rospy.is_shutdown():
        print("What") 

if __name__ == '__main__':
    try: 
        run()
    except rospy.ROSInterruptException:
        pass

