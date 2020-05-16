import rospy
from geometry_msgs.msg import Twist

def cmd_callback(data):
    global pub

    data.angular.z = -data.angular.z
    pub.publish(data)

if __name__ == '__main__':
    try:
        rospy.init_node("twist_inverter")
        twist_cmd_topic = rospy.get_param("~twist_cmd_topic", "/cmd_vel_flipped")
        output_topic = rospy.get_param("~output_topic", "/mavros/setpoint_velocity/cmd_vel_unstamped")
        
        rospy.Subscriber(twist_cmd_topic, Twist, cmd_callback, queue_size=1)
        pub = rospy.Publisher(output_topic, Twist, queue_size=1)
        rospy.spin()
    except rospy.ROSInterruptException:
        pass
