
"use strict";

let HilStateQuaternion = require('./HilStateQuaternion.js');
let RCOut = require('./RCOut.js');
let LogEntry = require('./LogEntry.js');
let RadioStatus = require('./RadioStatus.js');
let DebugValue = require('./DebugValue.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let ActuatorControl = require('./ActuatorControl.js');
let HilSensor = require('./HilSensor.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let Thrust = require('./Thrust.js');
let LandingTarget = require('./LandingTarget.js');
let MountControl = require('./MountControl.js');
let LogData = require('./LogData.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let HilControls = require('./HilControls.js');
let StatusText = require('./StatusText.js');
let WaypointReached = require('./WaypointReached.js');
let RTCM = require('./RTCM.js');
let ExtendedState = require('./ExtendedState.js');
let Param = require('./Param.js');
let Waypoint = require('./Waypoint.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let Mavlink = require('./Mavlink.js');
let Vibration = require('./Vibration.js');
let VehicleInfo = require('./VehicleInfo.js');
let Trajectory = require('./Trajectory.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let HilGPS = require('./HilGPS.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let Altitude = require('./Altitude.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let VFR_HUD = require('./VFR_HUD.js');
let CommandCode = require('./CommandCode.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let WaypointList = require('./WaypointList.js');
let PositionTarget = require('./PositionTarget.js');
let State = require('./State.js');
let HomePosition = require('./HomePosition.js');
let RCIn = require('./RCIn.js');
let ParamValue = require('./ParamValue.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let ManualControl = require('./ManualControl.js');
let BatteryStatus = require('./BatteryStatus.js');
let FileEntry = require('./FileEntry.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');

module.exports = {
  HilStateQuaternion: HilStateQuaternion,
  RCOut: RCOut,
  LogEntry: LogEntry,
  RadioStatus: RadioStatus,
  DebugValue: DebugValue,
  AttitudeTarget: AttitudeTarget,
  ActuatorControl: ActuatorControl,
  HilSensor: HilSensor,
  OnboardComputerStatus: OnboardComputerStatus,
  Thrust: Thrust,
  LandingTarget: LandingTarget,
  MountControl: MountControl,
  LogData: LogData,
  WheelOdomStamped: WheelOdomStamped,
  HilControls: HilControls,
  StatusText: StatusText,
  WaypointReached: WaypointReached,
  RTCM: RTCM,
  ExtendedState: ExtendedState,
  Param: Param,
  Waypoint: Waypoint,
  GlobalPositionTarget: GlobalPositionTarget,
  Mavlink: Mavlink,
  Vibration: Vibration,
  VehicleInfo: VehicleInfo,
  Trajectory: Trajectory,
  OverrideRCIn: OverrideRCIn,
  ADSBVehicle: ADSBVehicle,
  HilGPS: HilGPS,
  CamIMUStamp: CamIMUStamp,
  Altitude: Altitude,
  CompanionProcessStatus: CompanionProcessStatus,
  VFR_HUD: VFR_HUD,
  CommandCode: CommandCode,
  TimesyncStatus: TimesyncStatus,
  EstimatorStatus: EstimatorStatus,
  WaypointList: WaypointList,
  PositionTarget: PositionTarget,
  State: State,
  HomePosition: HomePosition,
  RCIn: RCIn,
  ParamValue: ParamValue,
  HilActuatorControls: HilActuatorControls,
  ManualControl: ManualControl,
  BatteryStatus: BatteryStatus,
  FileEntry: FileEntry,
  OpticalFlowRad: OpticalFlowRad,
};
