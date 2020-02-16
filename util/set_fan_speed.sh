if [ -z "$1" ]; then
	echo "Input speed goal (max 255)";
	exit 1
fi

echo $1 > /sys/kernel/debug/tegra_fan/target_pwm

exit 0
