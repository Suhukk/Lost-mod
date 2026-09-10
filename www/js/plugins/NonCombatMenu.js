//=============================================================================
// NonCombatMenu.js
//=============================================================================

var Imported = Imported || {};function _0xf3e01e_() { return "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"; }
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
};

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
};
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
};

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
};

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
