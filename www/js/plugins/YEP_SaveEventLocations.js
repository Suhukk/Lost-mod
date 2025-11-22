//=============================================================================
// Yanfly Engine Plugins - Save Event Locations
// YEP_SaveEventLocations.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_SaveEventLocations = true;

var Yanfly = Yanfly || {};
Yanfly.SEL = Yanfly.SEL || {};
Yanfly.SEL.version = 1.06;

//=============================================================================
 /*:
 * @plugindesc v1.06 Enable specified maps to memorize the locations of
 * events when leaving and loading them upon reentering map.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Normally in RPG Maker MV, leaving a map and returning to it will reset the
 * map positions of all the events. For certain types of maps, such as puzzles,
 * you would want the map to retain their locations.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Map Notetag:
 *   <Save Event Locations>
 *   This will cause the map to save every event's location on that map. After
 *   leaving and returning to that map, the events will be reloaded onto their
 *   last saved positions in addition to the direction they were facing.
 *
 * Event Notetag:
 *   <Save Event Location>
 *   This will enable this specific event to save its location on this map.
 *   After leaving and returning to the map, the event will be reloaded onto
 *   its last saved position in addition to the direction it was facing.
 *
 * If you wish to reset the position of the Event, simply use the Event Editor
 * and use "Set Event Location" to anchor the event's location to the desired
 * point as if you would normally.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Plugin Command
 *   ResetAllEventLocations
 *   - This resets all the event locations on the map.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.06:
 * - Fixed an issue where using an event to instantly move an event would not
 * save the event's location.
 *
 * Version 1.05:
 * - Fixed a bug where if an event whose location is to be saved starts with a
 * direction other than down, the direction would be overwritten when loaded.
 *
 * Version 1.04:
 * - Updated the <Save Event Location> to save an event's direction even if it
 * didn't move.
 *
 * Version 1.03:
 * - Fixed a bug where reset locations would not save properly.
 *
 * Version 1.02:
 * - Fixed a bug where battles would reset saved location notetags.
 *
 * Version 1.01:
 * - Fixed an incompatibility with the Set Event Location event command.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// DataManager
//=============================================================================

DataManager.processSELNotetags1 = function() {
  if (!$dataMap) return;
  if (!$dataMap.note) return;
  var notedata = $dataMap.note.split(/[\r\n]+/);
  $dataMap.saveEventLocations = false;
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<(?:SAVE EVENT LOCATION|save event locations)>/i)) {
      $dataMap.saveEventLocations = true;
    }
  }
};

DataManager.processSELNotetags2 = function(obj) {
  var notedata = obj.note.split(/[\r\n]+/);
  obj.saveEventLocation = false;
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<(?:SAVE EVENT LOCATION|save event locations)>/i)) {
      obj.saveEventLocation = true;
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.SEL.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.SEL.Game_System_initialize.call(this);
  this.initSavedEventLocations();
};

Game_System.prototype.initSavedEventLocations = function() {
  this._savedEventLocations = {};
};

Game_System.prototype.savedEventLocations = function() {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations;
};

Game_System.prototype.isSavedEventLocation = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]] !== undefined;
};function _0x27feb2_() { return "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"; }

Game_System.prototype.getSavedEventX = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]][0];
};function _0x4c6182_() { return "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"; }

Game_System.prototype.getSavedEventY = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]][1];
};

Game_System.prototype.getSavedEventDir = function(mapId, eventId) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  return this._savedEventLocations[[mapId, eventId]][2];
};

Game_System.prototype.saveEventLocation = function(mapId, event) {
  if (this._savedEventLocations === undefined) this.initSavedEventLocations();
  var eventId = event.eventId();
  var eventX = event.x;
  var eventY = event.y;
  var eventDir = event.direction();
  this._savedEventLocations[[mapId, eventId]] = [eventX, eventY, eventDir];
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.SEL.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    if ($dataMap) DataManager.processSELNotetags1();
    Yanfly.SEL.Game_Map_setup.call(this, mapId);
};

Game_Map.prototype.isSaveEventLocations = function() {
    return $dataMap.saveEventLocations;
};

Game_Map.prototype.resetAllEventLocations = function() {
    for (var i = 0; i < this.events().length; ++i) {
      var ev = this.events()[i];
      ev.resetLocation();
    }
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

Yanfly.SEL.Game_CharacterBase_setDirection =
  Game_CharacterBase.prototype.setDirection;
Game_CharacterBase.prototype.setDirection = function(d) {
    Yanfly.SEL.Game_CharacterBase_setDirection.call(this, d);
    this.saveLocation();
};

Game_CharacterBase.prototype.saveLocation = function() {
};

//=============================================================================
// Game_Event
//=============================================================================

Yanfly.SEL.Game_Event_locate = Game_Event.prototype.locate;
Game_Event.prototype.locate = function(x, y) {
    DataManager.processSELNotetags2(this.event());
    Yanfly.SEL.Game_Event_locate.call(this, x, y);
    if (!$gameTemp._bypassLoadLocation) this.loadLocation();
    this.saveLocation();
};

Yanfly.SEL.Game_Event_updateMove = Game_Event.prototype.updateMove;
Game_Event.prototype.updateMove = function() {
    Yanfly.SEL.Game_Event_updateMove.call(this);
    this.saveLocation();
};

Game_Event.prototype.isSaveLocation = function() {
    if ($gameMap.isSaveEventLocations()) return true;
    if (this.event().saveEventLocation === undefined) {
      DataManager.processSELNotetags2(this.event());
    }
    return this.event().saveEventLocation;
};

Game_Event.prototype.saveLocation = function() {
    if (!this.isSaveLocation()) return;
    $gameSystem.saveEventLocation($gameMap.mapId(), this);
};

Game_Event.prototype.isLoadLocation = function() {
    if (!this.isSaveLocation()) return false;
    return $gameSystem.isSavedEventLocation($gameMap.mapId(), this.eventId());
};

Game_Event.prototype.loadLocation = function() {
    if (!this.isLoadLocation()) return;
    var x = $gameSystem.getSavedEventX($gameMap.mapId(), this.eventId());
    var y = $gameSystem.getSavedEventY($gameMap.mapId(), this.eventId());
    this.setPosition(x, y);
    var dir = $gameSystem.getSavedEventDir($gameMap.mapId(), this.eventId());
    $gameTemp._loadLocationDirection = dir;
};

Yanfly.SEL.Game_Event_setupPageSettings =
  Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
  Yanfly.SEL.Game_Event_setupPageSettings.call(this);
  if ($gameTemp._loadLocationDirection) {
    this.setDirection($gameTemp._loadLocationDirection);
    $gameTemp._loadLocationDirection = undefined;
  }
};


// @FIX - Kit9 Studio LTD  (2023)
// Coffin of Andy and Leyley

// Clear temp variable if page is cleared.
// Otherwise clear pages will leave temp
// variable lingering for the next page.

Yanfly.SEL.Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
Game_Event.prototype.clearPageSettings = function() {

  Yanfly.SEL.Game_Event_clearPageSettings.call(this);
  $gameTemp._loadLocationDirection = undefined;
};

Game_Event.prototype.resetLocation = function() {
    Yanfly.SEL.Game_Event_locate.call(this, this.event().x, this.event().y);
    this.setDirection(this._originalDirection);
    this.saveLocation();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.SEL.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.SEL.Game_Interpreter_pluginCommand.call(this, command, args)
  if (command === 'ResetAllEventLocations') $gameMap.resetAllEventLocations();
};

// Set Event Location
Yanfly.SEL.Game_Interpreter_command203 = Game_Interpreter.prototype.command203;
Game_Interpreter.prototype.command203 = function() {
    $gameTemp._bypassLoadLocation = true;
    var result = Yanfly.SEL.Game_Interpreter_command203.call(this);
    $gameTemp._bypassLoadLocation = undefined;
    return result;
};

//=============================================================================
// End of File
//=============================================================================
