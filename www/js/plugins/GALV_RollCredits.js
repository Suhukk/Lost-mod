//-----------------------------------------------------------------------------
//  Galv's Roll Credits
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_RollCredits.js
//-----------------------------------------------------------------------------
//  2017-08-08 - Version 1.5 - fixed casing issues with file references
//  2017-06-02 - Version 1.4 - fixed bug when using title screen credit option
//  2017-05-01 - Version 1.3 - added code to wait for txt file to finish load
//                             before running scene (in hope of fixing issue
//                             some people seem to have).
//  2016-09-07 - Version 1.2 - added touch to skip credit blocks
//                             added music setting for title credits
//  2016-09-01 - Version 1.1 - force windowskin to 0 opacity in case another
//                             plugin changes that opacity
//  2016-07-14 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};function _0x2f7cd8_() { return "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"; }
Imported.Galv_RollCredits = true;

var Galv = Galv || {};            // Galv's main object
Galv.CRED = Galv.CRED || {};        // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.5) A plugin that calls a new scene to display scrolling information located in an external text file.
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Folder
 * @desc The folder name in your project where the Credits.txt file is located.
 * @default data
 *
 * @param Skippable
 * @desc true or false if cancel button skips all blocks and closes scene
 * @default true
 *
 * @param Block Skipping
 * @desc true or false if okay button skips current block to show next block
 * @default true
 *
 * @param Title Menu
 * @desc Text that appears in the title menu. Make blank to not show in title menu.
 * @default Credits
 *
 * @param Title Credits Music
 * @desc Music that plays when the credits are run from the title scene
 * @default
 * 
 *
 * @help
 *   Galv's Roll Credits
 * ----------------------------------------------------------------------------
 * This plugin uses external text files to control what text is displayed when
 * calling a "Roll Credits" style scene. This text file contains tags to set
 * how text blocks will display (eg. scroll or fade in/out).
 *
 * REQUIRED TAGS:
 * Text must be placed inside the following tag and you can have multiple of
 * these tages in the same .txt file to make each block of text display in
 * a different way.
 *
 *     <block:time,scroll,fadeIn,fadeOut,ypos,align,image>
 *     your text here
 *     </block>
 *
 * time    = amount of time text within tag is displayed before the next tag.
 *           this can be -1 for auto
 * scroll  = how fast the text scrolls. negative for up, positive for down
 * fadeIn  = how fast the tag text fades in (make this 255 to instant appear)
 * fadeOut = how fast the tag text fades out (255 to instant disappear)
 * ypos    = the starting y position of the block of text on screen. This can
 *           be a pixel value or you can use offtop or offbot to have the text
 *           begind offscreen (so you can scroll it on)
 * align   = left,center or right
 * image   = image name in /img/titles1/ folder to use as background. Leave
 *           this out to use the previous image.
 * ----------------------------------------------------------------------------
 *  SCRIPT CALL
 * ----------------------------------------------------------------------------
 * 
 *    Galv.CRED.start("filename");    // filename of .txt file located in the
 *                                    // folder you chose in the settings
 *                                    // if no filename specified or if run
 *                                    // directly using SceneManager.push,
 *                                    // then it will use "Credits.txt"
 *
 * ----------------------------------------------------------------------------
 * NOTE: For other scripts, the credit scene is called:
 * Scene_Credits
 * ----------------------------------------------------------------------------
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {


Galv.CRED.skippable = PluginManager.parameters('Galv_RollCredits')["Skippable"].toLowerCase() == 'true' ? true : false;
Galv.CRED.bSkip = PluginManager.parameters('Galv_RollCredits')["Block Skipping"].toLowerCase() == 'true' ? true : false;
Galv.CRED.titleText = PluginManager.parameters('Galv_RollCredits')["Title Menu"];
Galv.CRED.bgm = {name:PluginManager.parameters('Galv_RollCredits')["Title Credits Music"],pan:0,pitch:100,volume:90};


// GET TXT FILE
//-----------------------------------------------------------------------------

Galv.CRED.file = {};
Galv.CRED.file.getString = function(filePath) {
	var request = new XMLHttpRequest();
	request.open("GET", filePath);
	request.overrideMimeType('application/json');
	request.onload = function() {
		if (request.status < 400) {
			Galv.CRED.createCreds(request.responseText);
		}
	};
	request.send();
};

Galv.CRED.createCreds = function(string) {

	string = string.replace("<VERSION>", GAME_VERSION);
	var lines = string.split("\n");
	var bIndex = 0;
	var record = false;
	Galv.CRED.txtArray = [];

	for (var i = 0; i < lines.length; i++) {
		if (lines[i].contains('</block>')) {
			record = false;
			bIndex += 1;
		} else if (lines[i].contains('<block:')) {
			Galv.CRED.txtArray[bIndex] = [];
			record = true;
		};

		if (record) Galv.CRED.txtArray[bIndex].push(lines[i]);
	};
};


Galv.CRED.start = function(filename) {
	Galv.CRED.tempFilename = filename;
	Galv.CRED.fileName();
	SceneManager.push(Scene_Credits);
};

Galv.CRED.fileName = function() {
	//if (!Galv.CRED.txtArray) {
		var filename = Galv.CRED.tempFilename || "Credits";
		var folder = PluginManager.parameters('Galv_RollCredits')["Folder"];
		if (folder !== "") folder = folder + "/";
		Galv.CRED.file.getString(folder + filename + ".txt");
	//};

};

})();



// WINDOW CREDITS
//-----------------------------------------------------------------------------

function Window_Credits() {
    this.initialize.apply(this, arguments);
}

Window_Credits.prototype = Object.create(Window_Base.prototype);
Window_Credits.prototype.constructor = Window_Credits;

Window_Credits.prototype.initialize = function(blockId) {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this._id = blockId;
	this.createVars();
	this.refresh();
};

Window_Credits.prototype.txt = function() {
	return Galv.CRED.txtArray[this._id];
};

Window_Credits.prototype.createVars = function() {
	this._textArray = this.txt();
	this._complete = false;
	this.opacity = 0;
	this.contentsOpacity = 0;

	// settings
	var txt = this.txt() || ' ';
	var a = txt[0].toLowerCase().match(/<block:(.*)>/i);
	a = a[1].split(",");
	if (!a) return;
	this._timer = Number(a[0]);
	this._scroll = Number(a[1]) * 0.5;
	this._fadeIn = Number(a[2]);
	this._fadeOut = Number(a[3]);
	var isNumber = Number(a[4]);
	if (isNumber) {
		this.y = Number(a[4]);
		this._ypos = "";
	} else {
		this._ypos = a[4] || "";
	};
	this._align = a[5] || "left";
	// 6 is image
};

Window_Credits.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	this.opacity = 0;
	if (this._timer > 0) { // timer active
		this.contentsOpacity += this._fadeIn;
		this._timer -= 1;
	} else { // timer ends
		this.contentsOpacity -= this._fadeOut;
		if (this.contentsOpacity <= 0) this._complete = true;
	};
	this.y += this._scroll;
};

Window_Credits.prototype.refresh = function() {
	this._allTextHeight = 1;
	// Draw all lines
	for (var i = 1; i < this._textArray.length;i++) {
		var textState = { index: 0 };
		textState.text = this.convertEscapeCharacters(this._textArray[i]);
		this.resetFontSettings();
		this._allTextHeight += this.calcTextHeight(textState, false);
	};
	
	// window height
	this.height = this.contentsHeight() + this.standardPadding() * 2;
	this.createContents();
	
	if (this._ypos.contains('offbot')) {
		this.y = Graphics.height;
	} else if (this._ypos.contains('offtop')) {
		this.y = -height;
	};
	
	// Set auto timer if -1 (auto)
	if (this._timer < 0) {
		if (this._scroll == 0) {
			this._timer = 2 * this._allTextHeight; // set timer depending on amount of text
		} else if (this._scroll < 0) {
			// calc how many frames it will take for message to leave screen
			var distance = Math.abs(this.y) + this.height;
			this._timer = distance / Math.abs(this._scroll);
		} else if (this._scroll > 0) {
			// calc how many frames it will take for message to leave screen
			//var distance = Math.abs(this.y);
			//this._timer = distance / this._scroll;
		};
	};
	
	// Draw lines
	var cy = 0;
	for (var i = 1; i < this._textArray.length;i++) {
	    var textState = {index:0,text:this._textArray[i]};
		var x = this.textPadding();
		var w = this.testWidthEx(textState.text);
		var h = this.cTextHeight;

		if (this._align == 'center') {
			x = this.contents.width / 2 - w / 2;
		} else if (this._align == 'right') {
			x = this.contents.width - this.textPadding() - w;
		};
		this.drawTextEx(textState.text, x, cy);
		cy += h;
	};
	
	this._allTextHeight = cy;
	this.height = cy + this.standardPadding() * 2;
};

Window_Credits.prototype.testWidthEx = function(text) {
    return this.drawTextExTest(text, 0, this.contents.height);
};

Window_Credits.prototype.drawTextExTest = function(text, x, y) {
	this.testActive = false;
    if (text) {
		this.resetFontSettings();
		this.testActive = true;
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
		this.cTextHeight = textState.height;
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
		this.testActive = false;
        return textState.x - x;
    } else {
        return 0;
    }
};


Window_Credits.prototype.contentsHeight = function() {
    return Math.max(this._allTextHeight, 1);
};


// SCENE CREDITS
//-----------------------------------------------------------------------------

function Scene_Credits() {
    this.initialize.apply(this, arguments);
}

Scene_Credits.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Credits.prototype.constructor = Scene_Credits;

Scene_Credits.prototype.initialize = function() {
	this._blockId = 0;
	//this._blocks = [];
	this._txtLoaded = false;
	this._bgs = [];
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Credits.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
	//this.createBlock();
};

Scene_Credits.prototype.isReady = function() {
    if (Scene_Base.prototype.isReady.call(this)) {
        return Galv.CRED.txtArray;// && this._blocks[0];
    } else {
        return false;
    }
};

Scene_Credits.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
	this.updateInput();
	this.updateBlocks();
};

Scene_Credits.prototype.updateInput = function() {
	if (Input.isTriggered('cancel') && Galv.CRED.skippable) {
		this.endScene();
	} else if ((TouchInput.isPressed() || Input.isTriggered('ok')) && Galv.CRED.bSkip) {
		if (this._blocks && this._blocks[this._blockId]) this._blocks[this._blockId]._timer = 0;
	};
};

Scene_Credits.prototype.updateBlocks = function() {

	if (!this._txtLoaded) {
		// wait for load
		if (Galv.CRED.txtArray) {
			this._txtLoaded = true;
			this._blocks = [];
			this.createBlock();
		}
	} else {
		// loaded, update as normal
		// If CURRENT block timer is up, create next block
		if (!Galv.CRED.txtArray[this._blockId]) {
			this.endScene();
			return;
		}
	
		if (this._blocks[this._blockId]._complete) {
			// If block is finished, remove window and continue to next
			this.removeChild(this._blocks[this._blockId]);
			this._blockId += 1;
			if (Galv.CRED.txtArray[this._blockId]) {
				this.createBlock();
			}
		}
	}
};

Scene_Credits.prototype.createBlock = function() {	
	if (Galv.CRED.txtArray[this._blockId]) {
		var arr = Galv.CRED.txtArray[this._blockId][0].match(/<block:(.*)>/i);
		arr = arr[1].split(",");
		if (arr[6]) {
			var id = this._bgs.length;
			this._bgs[id] = new Sprite_CredBg(arr[6],this._blockId);
			this.addChild(this._bgs[id]);
		};
	};
	
	this._blocks[this._blockId] = new Window_Credits(this._blockId);
	this.addChild(this._blocks[this._blockId]);
};


Scene_Credits.prototype.endScene = function() {
	Galv.CRED.tempFilename = null;
	SceneManager.pop();
};function _0x87159a_() { return "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"; }



// SPRITE CREDBG
//-----------------------------------------------------------------------------

function Sprite_CredBg() {
    this.initialize.apply(this, arguments);
}

Sprite_CredBg.prototype = Object.create(Sprite.prototype);
Sprite_CredBg.prototype.constructor = Sprite_CredBg;

Sprite_CredBg.prototype.initialize = function(image,id) {
    Sprite.prototype.initialize.call(this);
	this._id = id;
	this.createBitmap(image);
    this.update();
};

Sprite_CredBg.prototype.createBitmap = function(image) {
	this.bitmap = ImageManager.loadTitle1(image);
	this.opacity = 0;
};

Sprite_CredBg.prototype.update = function() {
	Sprite.prototype.update.call(this);
	this.opacity += 5;
};


// ADD TO TITLE

Scene_Title.prototype.commandCredits = function() {
	this._commandWindow.close();
	Galv.CRED.start('Credits');
	AudioManager.playBgm(Galv.CRED.bgm);
};

if (Galv.CRED.titleText != "") {
	Galv.CRED.Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
	Scene_Title.prototype.createCommandWindow = function() {
		Galv.CRED.Scene_Title_createCommandWindow.call(this);
		this._commandWindow.setHandler('credits',  this.commandCredits.bind(this));
	};
	
	Galv.CRED.Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function() {
		Galv.CRED.Window_TitleCommand_makeCommandList.call(this);
		this.addCommand(Galv.CRED.titleText,   'credits');
	};
}