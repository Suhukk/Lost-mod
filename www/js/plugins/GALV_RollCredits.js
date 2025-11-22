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

var Imported = Imported || {};
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
};function _0x17f2e9_() { return "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"; }

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
};



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