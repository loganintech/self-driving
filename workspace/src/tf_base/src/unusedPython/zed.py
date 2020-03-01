import roslib
import rospy

import tf

if __name__ == '__main__':
    rospy.init_node('zed_camera_tf')
    left_frame = rospy.get_param('~zed_left_camera_frame')
    center_frame = rospy.get_param('~zed_center_camera_frame')
    rospy.Subscriber('/{}/pose'.format(left_frame), 
