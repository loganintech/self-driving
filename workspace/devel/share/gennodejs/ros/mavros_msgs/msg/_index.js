
"use strict";

let RTCM = require('./RTCM.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let VehicleInfo = require('./VehicleInfo.js');
let WaypointReached = require('./WaypointReached.js');
let ActuatorControl = require('./ActuatorControl.js');
let HilControls = require('./HilControls.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let DebugValue = require('./DebugValue.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let ParamValue = require('./ParamValue.js');
let BatteryStatus = require('./BatteryStatus.js');
let StatusText = require('./StatusText.js');
let HilSensor = require('./HilSensor.js');
let State = require('./State.js');
let HomePosition = require('./HomePosition.js');
let ManualControl = require('./ManualControl.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let Vibration = require('./Vibration.js');
let FileEntry = require('./FileEntry.js');
let LogData = require('./LogData.js');
let RCIn = require('./RCIn.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let CommandCode = require('./CommandCode.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let Waypoint = require('./Waypoint.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let Trajectory = require('./Trajectory.js');
let WaypointList = require('./WaypointList.js');
let Thrust = require('./Thrust.js');
let MountControl = require('./MountControl.js');
let LandingTarget = require('./LandingTarget.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let Mavlink = require('./Mavlink.js');
let ExtendedState = require('./ExtendedState.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let Altitude = require('./Altitude.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let VFR_HUD = require('./VFR_HUD.js');
let PositionTarget = require('./PositionTarget.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let RadioStatus = require('./RadioStatus.js');
let RCOut = require('./RCOut.js');
let Param = require('./Param.js');
let HilGPS = require('./HilGPS.js');
let LogEntry = require('./LogEntry.js');

module.exports = {
  RTCM: RTCM,
  HilStateQuaternion: HilStateQuaternion,
  VehicleInfo: VehicleInfo,
  WaypointReached: WaypointReached,
  ActuatorControl: ActuatorControl,
  HilControls: HilControls,
  OnboardComputerStatus: OnboardComputerStatus,
  DebugValue: DebugValue,
  TimesyncStatus: TimesyncStatus,
  EstimatorStatus: EstimatorStatus,
  ADSBVehicle: ADSBVehicle,
  ParamValue: ParamValue,
  BatteryStatus: BatteryStatus,
  StatusText: StatusText,
  HilSensor: HilSensor,
  State: State,
  HomePosition: HomePosition,
  ManualControl: ManualControl,
  AttitudeTarget: AttitudeTarget,
  Vibration: Vibration,
  FileEntry: FileEntry,
  LogData: LogData,
  RCIn: RCIn,
  OpticalFlowRad: OpticalFlowRad,
  CommandCode: CommandCode,
  GlobalPositionTarget: GlobalPositionTarget,
  Waypoint: Waypoint,
  OverrideRCIn: OverrideRCIn,
  Trajectory: Trajectory,
  WaypointList: WaypointList,
  Thrust: Thrust,
  MountControl: MountControl,
  LandingTarget: LandingTarget,
  WheelOdomStamped: WheelOdomStamped,
  Mavlink: Mavlink,
  ExtendedState: ExtendedState,
  CamIMUStamp: CamIMUStamp,
  Altitude: Altitude,
  HilActuatorControls: HilActuatorControls,
  VFR_HUD: VFR_HUD,
  PositionTarget: PositionTarget,
  CompanionProcessStatus: CompanionProcessStatus,
  RadioStatus: RadioStatus,
  RCOut: RCOut,
  Param: Param,
  HilGPS: HilGPS,
  LogEntry: LogEntry,
};
