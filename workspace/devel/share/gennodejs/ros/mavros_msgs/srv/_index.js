
"use strict";

let LogRequestEnd = require('./LogRequestEnd.js')
let LogRequestData = require('./LogRequestData.js')
let CommandBool = require('./CommandBool.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let FileWrite = require('./FileWrite.js')
let FileList = require('./FileList.js')
let ParamPush = require('./ParamPush.js')
let FileRename = require('./FileRename.js')
let FileOpen = require('./FileOpen.js')
let MountConfigure = require('./MountConfigure.js')
let CommandLong = require('./CommandLong.js')
let WaypointPull = require('./WaypointPull.js')
let ParamPull = require('./ParamPull.js')
let CommandInt = require('./CommandInt.js')
let WaypointClear = require('./WaypointClear.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let FileRead = require('./FileRead.js')
let ParamSet = require('./ParamSet.js')
let FileChecksum = require('./FileChecksum.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let CommandTOL = require('./CommandTOL.js')
let WaypointPush = require('./WaypointPush.js')
let FileClose = require('./FileClose.js')
let FileTruncate = require('./FileTruncate.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let SetMavFrame = require('./SetMavFrame.js')
let StreamRate = require('./StreamRate.js')
let FileRemove = require('./FileRemove.js')
let LogRequestList = require('./LogRequestList.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandHome = require('./CommandHome.js')
let ParamGet = require('./ParamGet.js')
let SetMode = require('./SetMode.js')
let MessageInterval = require('./MessageInterval.js')

module.exports = {
  LogRequestEnd: LogRequestEnd,
  LogRequestData: LogRequestData,
  CommandBool: CommandBool,
  CommandTriggerInterval: CommandTriggerInterval,
  FileWrite: FileWrite,
  FileList: FileList,
  ParamPush: ParamPush,
  FileRename: FileRename,
  FileOpen: FileOpen,
  MountConfigure: MountConfigure,
  CommandLong: CommandLong,
  WaypointPull: WaypointPull,
  ParamPull: ParamPull,
  CommandInt: CommandInt,
  WaypointClear: WaypointClear,
  FileRemoveDir: FileRemoveDir,
  FileRead: FileRead,
  ParamSet: ParamSet,
  FileChecksum: FileChecksum,
  VehicleInfoGet: VehicleInfoGet,
  CommandTOL: CommandTOL,
  WaypointPush: WaypointPush,
  FileClose: FileClose,
  FileTruncate: FileTruncate,
  CommandTriggerControl: CommandTriggerControl,
  SetMavFrame: SetMavFrame,
  StreamRate: StreamRate,
  FileRemove: FileRemove,
  LogRequestList: LogRequestList,
  CommandVtolTransition: CommandVtolTransition,
  WaypointSetCurrent: WaypointSetCurrent,
  FileMakeDir: FileMakeDir,
  CommandHome: CommandHome,
  ParamGet: ParamGet,
  SetMode: SetMode,
  MessageInterval: MessageInterval,
};
