#include <ros/ros.h>
#include <tf/transform_broadcaster.h>

int main(int argc, char** argv){
	ros::init(argc, argv, "rplidar_tf");
	ros::NodeHandle n;

	ros::Rate r(100);

	//This is the object that will send the transform from the parent node [base_link] 
	//to the child node [base_laser]
	tf::TransformBroadcaster b;

	while (n.ok()){
		b.sendTransform(
			tf::StampedTransform(
				tf::Transform(tf::Quaternion(0, 0, 0, 1), tf::Vector3(0, 0, .08)),
				ros::Time::now(), "base_link", "laser_frame"));
		r.sleep();
	}
}

