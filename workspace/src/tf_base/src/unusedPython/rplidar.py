#!/usr/bin/python

import roslib
import rospy

import tf

if __name__ == '__main__':
    rospy.init_node('rplidar_transform')
    rospy.get_param('~rplidar_scan')

