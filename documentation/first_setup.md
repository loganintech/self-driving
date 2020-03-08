# Setup Packages

### Ros

```bash
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
$ curl -sSL 'http://keyserver.ubuntu.com/pks/lookup?op=get&search=0xC1CF6E31E6BADE8868B172B4F42ED6FBAB17C654' | sudo apt-key add -
$ sudo apt update
$ sudo apt install ros-melodic-desktop-full
$ sudo rosdep init
$ rosdep update

$ echo "source /opt/ros/melodic/setup.bash >> ~/.bashrc"
$ echo "source /home/nvidia/Dev/workspace/devel/setup.bash >> ~/.bashrc"

$ sudo apt install python-rosinstall python-rosinstall-generator python-wstool build-essential
```


### Build Deps
```bash
sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras

cd catkin_workspace/src
git clone https://github.com/mavlink/mavros
git clone https://github.com/ros/geometry2
git clone https://github.com/robopeak/rplidar_ros
git clone https://github.com/ros-perception/slam_gmapping
git clone https://github.com/ros-perception/openslam_gmapping

# Zed 
git clone https://github.com/stereolabs/zed-ros-wrapper.git
wget https://stereolabs.sfo2.cdn.digitaloceanspaces.com/zedsdk/3.0/ZED_SDK_Tegra_JP43_v3.0.3.run
sudo chmod +x ZED[tab]
./ZED[tab]
git clone https://github.com/stereolabs/zed-ros-wrapper

# Python 3 Support
sudo apt-get install python3-rospkg
```

