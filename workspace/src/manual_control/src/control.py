import rospy
from mavros_msgs.msg import ManualControl
import tty
import sys
import termios

dest_node = "/mavros/manual_control/send"


def main():
    print("Starting manual control")
    print("Press WASD to move, anything else to exit")

    pub = rospy.Publisher(dest_node, ManualControl, queue_size = 1) # Queue size one because we always want the most recent data

    rospy.init_node('manual_control_keyboard')
    rate = rospy.Rate(10) # 10 hz

    frame_id = 0

    while not rospy.is_shutdown():
        ch = read_key()
        if ch in ['w', 'a', 's', 'd']:
            ctrl = get_control(ch, frame_id)
            frame_id += 1
            pub.publish(ctrl)
            rospy.loginfo(ctrl)
        else:
            exit(1)

        rate.sleep()


def get_control(char, frame_id):

    debugging = False

    multiplier = 0.5
    msg = ManualControl()
    msg.header.frame_id = f'Manual Control: {frame_id}'
    msg.header.seq = frame_id
    now = rospy.get_rostime()
    msg.header.stamp.secs = now.secs
    msg.header.stamp.nsecs = now.nsecs

    print(rospy.get_time())

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

    msg.r = 0 # No roll on car
    msg.z = 0 # No up or down on car
    return msg

def read_key():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return ch


if __name__ == "__main__":
    main()
