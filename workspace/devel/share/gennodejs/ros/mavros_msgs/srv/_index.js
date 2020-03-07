
"use strict";

let FileRename = require('./FileRename.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let ParamSet = require('./ParamSet.js')
let FileMakeDir = require('./FileMakeDir.js')
let FileRead = require('./FileRead.js')
let FileTruncate = require('./FileTruncate.js')
let LogRequestData = require('./LogRequestData.js')
let FileWrite = require('./FileWrite.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let FileClose = require('./FileClose.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let SetMavFrame = require('./SetMavFrame.js')
let MessageInterval = require('./MessageInterval.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let FileList = require('./FileList.js')
let CommandTOL = require('./CommandTOL.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let WaypointPull = require('./WaypointPull.js')
let MountConfigure = require('./MountConfigure.js')
let WaypointPush = require('./WaypointPush.js')
let ParamPull = require('./ParamPull.js')
let WaypointClear = require('./WaypointClear.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let SetMode = require('./SetMode.js')
let CommandLong = require('./CommandLong.js')
let LogRequestList = require('./LogRequestList.js')
let CommandInt = require('./CommandInt.js')
let CommandHome = require('./CommandHome.js')
let FileChecksum = require('./FileChecksum.js')
let ParamPush = require('./ParamPush.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileOpen = require('./FileOpen.js')
let StreamRate = require('./StreamRate.js')
let ParamGet = require('./ParamGet.js')
let CommandBool = require('./CommandBool.js')
let FileRemove = require('./FileRemove.js')

module.exports = {
  FileRename: FileRename,
  CommandVtolTransition: CommandVtolTransition,
  ParamSet: ParamSet,
  FileMakeDir: FileMakeDir,
  FileRead: FileRead,
  FileTruncate: FileTruncate,
  LogRequestData: LogRequestData,
  FileWrite: FileWrite,
  WaypointSetCurrent: WaypointSetCurrent,
  FileClose: FileClose,
  CommandTriggerControl: CommandTriggerControl,
  SetMavFrame: SetMavFrame,
  MessageInterval: MessageInterval,
  VehicleInfoGet: VehicleInfoGet,
  FileList: FileList,
  CommandTOL: CommandTOL,
  CommandTriggerInterval: CommandTriggerInterval,
  WaypointPull: WaypointPull,
  MountConfigure: MountConfigure,
  WaypointPush: WaypointPush,
  ParamPull: ParamPull,
  WaypointClear: WaypointClear,
  FileRemoveDir: FileRemoveDir,
  SetMode: SetMode,
  CommandLong: CommandLong,
  LogRequestList: LogRequestList,
  CommandInt: CommandInt,
  CommandHome: CommandHome,
  FileChecksum: FileChecksum,
  ParamPush: ParamPush,
  LogRequestEnd: LogRequestEnd,
  FileOpen: FileOpen,
  StreamRate: StreamRate,
  ParamGet: ParamGet,
  CommandBool: CommandBool,
  FileRemove: FileRemove,
};
