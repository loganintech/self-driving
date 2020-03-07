#include <ros/ros.h>
#include <tf/transform_broadcaster.h>

int main(int argc, char** argv){
	ros::init(argc, argv, "zed_tf");
	ros::NodeHandle n;

	ros::Rate r(100);

	//This is the object that will send the transform from the parent node [base_link] 
	//to the child node [base_laser]
	tf::TransformBroadcaster left;
	tf::TransformBroadcaster center;

	while (n.ok()){
		left.sendTransform(
			tf::StampedTransform(
				tf::Transform(tf::Quaternion(0, 0, -0.707, 1), tf::Vector3(-0.05, 0.15, 0.08)),
				ros::Time::now(), "base_link", "zed_left_camera_frame"));
		center.sendTransform(
			tf::StampedTransform(
				tf::Transform(tf::Quaternion(0, 0, -0.707, 1), tf::Vector3(0, 0.15, 0.08)),
				ros::Time::now(), "base_link", "zed_camera_center"));
		r.sleep();
	}
}

