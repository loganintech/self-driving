// Generated by gencpp from file mavros_msgs/ParamPullResponse.msg
// DO NOT EDIT!


#ifndef MAVROS_MSGS_MESSAGE_PARAMPULLRESPONSE_H
#define MAVROS_MSGS_MESSAGE_PARAMPULLRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace mavros_msgs
{
template <class ContainerAllocator>
struct ParamPullResponse_
{
  typedef ParamPullResponse_<ContainerAllocator> Type;

  ParamPullResponse_()
    : success(false)
    , param_received(0)  {
    }
  ParamPullResponse_(const ContainerAllocator& _alloc)
    : success(false)
    , param_received(0)  {
  (void)_alloc;
    }



   typedef uint8_t _success_type;
  _success_type success;

   typedef uint32_t _param_received_type;
  _param_received_type param_received;





  typedef boost::shared_ptr< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> const> ConstPtr;

}; // struct ParamPullResponse_

typedef ::mavros_msgs::ParamPullResponse_<std::allocator<void> > ParamPullResponse;

typedef boost::shared_ptr< ::mavros_msgs::ParamPullResponse > ParamPullResponsePtr;
typedef boost::shared_ptr< ::mavros_msgs::ParamPullResponse const> ParamPullResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::mavros_msgs::ParamPullResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace mavros_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'geographic_msgs': ['/opt/ros/melodic/share/geographic_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/melodic/share/std_msgs/cmake/../msg'], 'sensor_msgs': ['/opt/ros/melodic/share/sensor_msgs/cmake/../msg'], 'mavros_msgs': ['/home/nvidia/Dev/workspace/src/mavros/mavros_msgs/msg'], 'geometry_msgs': ['/opt/ros/melodic/share/geometry_msgs/cmake/../msg'], 'uuid_msgs': ['/opt/ros/melodic/share/uuid_msgs/cmake/../msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "5601e883220b149a3209512e966299f0";
  }

  static const char* value(const ::mavros_msgs::ParamPullResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x5601e883220b149aULL;
  static const uint64_t static_value2 = 0x3209512e966299f0ULL;
};

template<class ContainerAllocator>
struct DataType< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "mavros_msgs/ParamPullResponse";
  }

  static const char* value(const ::mavros_msgs::ParamPullResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bool success\n"
"uint32 param_received\n"
"\n"
;
  }

  static const char* value(const ::mavros_msgs::ParamPullResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.success);
      stream.next(m.param_received);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ParamPullResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::mavros_msgs::ParamPullResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::mavros_msgs::ParamPullResponse_<ContainerAllocator>& v)
  {
    s << indent << "success: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.success);
    s << indent << "param_received: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.param_received);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MAVROS_MSGS_MESSAGE_PARAMPULLRESPONSE_H
