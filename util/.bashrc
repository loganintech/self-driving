export PATH=/usr/local/cuda-10.0/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-10.0/lib64:$LD_LIBRARY_PATH

# Source some ROS setup
source /opt/ros/melodic/setup.bash
source /home/nvidia/Dev/workspace/devel/setup.bash

# A few aliases to make our lives easier
alias rtunssh="ssh -R 35452:localhost:22 $1"
alias rvinossh="ssh -R 5900:localhost:5900 $1"
alias rosrc="cd /home/nvidia/Dev/workspace/src"

# A few aliases that let us start the bot quickly
alias move="roslaunch move_base move_base.launch"
alias run="roslaunch not_a_car_2dnav liftoff.launch"
