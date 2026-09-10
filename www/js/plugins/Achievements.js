/*:
 * @plugindesc Simple Achievements MV - AppData-based persistence
 * @author NO.ONE
 *
 * @param Popup SE Name
 * @type string
 * @default achievement
 *
 * @param Popup SE Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 *
 * @param Popup SE Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 *
 * @param Popup Icon
 * @type file
 * @dir img/system
 * @default ach_popup_icon
 *
 * @param Achievement File Name
 * @type string
 * @default achievements.json
 *
 * @help
 * Script calls:
 *   SceneManager.push(Scene_Achievements);
 *   $gameSystem.unlockAchievement(id);
 *   $gameSystem.lockAchievement(id);
 *   $gameSystem.isAchievementUnlocked(id);
 *   $gameSystem.achievementCount();
 *   $gameSystem.totalAchievementCount();
 *   Achievements.reset();
 *   Achievements.reload();
 *   Achievements.debugState();
 *
 * Notes:
 *   - Unlocks are stored in AppData via App.dataPath().
 *   - Popup queue is session-only and cleared on load/new game.
 *   - In test mode, data is stored under DevData/.
 *
 *   - Each achievement can have:
 *       nameCensor: true/false
 *       descriptionCensor: true/false
 *     These control whether the name/description is shown as "???" when locked.
 */


var Imported = Imported || {};
Imported.Achievements = true;


var Achievements = Achievements || {};
Achievements.version = "8.0.0";


(function() {
    "use strict";


    var params = PluginManager.parameters("Achievements");


    var SA_SE_NAME = String(params["Popup SE Name"] || "achievement");
    var SA_SE_VOLUME = Number(params["Popup SE Volume"] || 0 );
    var SA_SE_PITCH = Number(params["Popup SE Pitch"] || 100 );
    var SA_POPUP_ICON = String(params["Popup Icon"] || "ach_popup_icon");
    var SA_FILE_NAME = String(params["Achievement File Name"] || "achievements.json");


    var ACHIEVEMENTS = [
        { id: 0,  name: "Lovely talks", description: "Got all the addition conversations with Ashley.", nameCensor: false,    descriptionCensor: false   },
        { id: 1,  name: "Fuck off!", description: "Talked to the wrong neighbour.", nameCensor: false,   descriptionCensor: false  },
        { id: 2,  name: "Alzheimer's", description: "Forgot Nina's name.", nameCensor: false,   descriptionCensor: true  },
        { id: 3,  name: "New Shakespeare", description: "Wrote the poem with no mistakes.", nameCensor: false,   descriptionCensor: false  },
        { id: 4,  name: "Nice chase", description: "Didn't get caught by the demon for 20 seconds.", nameCensor: false,   descriptionCensor: false  },
        { id: 5,  name: "Eaten alive", description: "Became a bitch in the box.", nameCensor: false,   descriptionCensor: true  },
        { id: 6,  name: "Woodman", description: "Cut all the trees.", nameCensor: false,   descriptionCensor: false  },
        { id: 7,  name: "No-Good add!", description: "Find an easter egg.", nameCensor: true,   descriptionCensor: false  },
        { id: 8, name: "Don't run on the roads!", description: "Died under the bus.", nameCensor: false,    descriptionCensor: true   },
        { id: 9, name: "Stop peeking on people", description: "Peeked twice on adult conversations.", nameCensor: false,    descriptionCensor: false   },
        { id: 10, name: "Loser", description: "Lost to your friend.", nameCensor: false,    descriptionCensor: false   },
        { id: 11, name: "Your fault", description: "Found a consequence of your actions.", nameCensor: true,    descriptionCensor: true   },
	{ id: 12, name: "Demon lover", description: "Watched the flowery visions.", nameCensor: false,    descriptionCensor: false   },
	{ id: 13, name: "Episode 1 Clear", description: "Cleared 1 episode.", nameCensor: false,    descriptionCensor: false   },
    ];


    var POPUP_X = 16;
    var POPUP_Y = 16;
    var POPUP_DURATION = 180;
    var POPUP_FADE_SPEED = 16;
    var POPUP_PADDING_X = 24;
    var POPUP_PADDING_Y = 18;
    var POPUP_LINE_GAP = 9;
    var POPUP_MIN_WIDTH = 240;
    var POPUP_MIN_HEIGHT = 72;
    var POPUP_ICON_SIZE = 72;


    Achievements.data = ACHIEVEMENTS;
    Achievements._popupQueue = [];
    Achievements._state = { unlocked: {} };


    Achievements.log = function() {
        if (window.console && console.log) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift("[Achievements]");
            console.log.apply(console, args);
        }
    };


    Achievements.get = function(id) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) return this.data[i];
        }
        return null;
    };


    Achievements.totalCount = function() {
        return this.data.length;
    };


    Achievements.getPath = function() {
        if (typeof App !== "undefined" && App.dataPath) {
            return Utils.join(App.dataPath(), SA_FILE_NAME);
        }
        return null;
    };


    Achievements.ensureState = function() {
        if (!this._state) this._state = { unlocked: {} };
        if (!this._state.unlocked) this._state.unlocked = {};
    };


    Achievements.load = function() {
        this.ensureState();
        var path = this.getPath();
        if (!path) return;


        try {
            var text = Utils.readFile(path, "utf8");
            if (text) {
                var parsed = JSON.parse(text);
                this._state = parsed || { unlocked: {} };
                if (!this._state.unlocked) this._state.unlocked = {};
            }
        } catch (e) {
            this._state = { unlocked: {} };
        }
    };


    Achievements.save = function() {
        var path = this.getPath();
        if (!path) return false;


        this.ensureState();
        try {
            Utils.writeFile(path, JSON.stringify(this._state, null, 2));
            return true;
        } catch (e) {
            return false;
        }
    };


    Achievements.reload = function() {
        this._state = { unlocked: {} };
        this.load();
        this.log("reload()", this.debugState());
    };


    Achievements.reset = function() {
        this._state = { unlocked: {} };
        this._popupQueue = [];
        this.save();
        if ($gameSystem) $gameSystem._saUnlocked = {};
        this.log("reset()", this.debugState());
    };


    Achievements.debugState = function() {
        return {
            path: this.getPath(),
            queueLength: this._popupQueue.length,
            unlocked: JSON.parse(JSON.stringify(this._state ? this._state.unlocked || {} : {})),
            runtimeUnlocked: $gameSystem ? JSON.parse(JSON.stringify($gameSystem._saUnlocked || {})) : null
        };
    };


    Achievements.isUnlocked = function(id) {
        this.ensureState();
        return !!this._state.unlocked[id];
    };


    Achievements.setUnlocked = function(id, value) {
        this.ensureState();
        this._state.unlocked[id] = !!value;
        this.save();
    };


    Achievements.queuePopup = function(id) {
        var ach = this.get(id);
        if (!ach) return;
        this._popupQueue.push(ach);
        AudioManager.playSe({
            name: SA_SE_NAME,
            volume: SA_SE_VOLUME,
            pitch: SA_SE_PITCH,
            pan: 0
        });
    };


    Achievements.hasPopup = function() {
        return this._popupQueue.length > 0;
    };


    Achievements.shiftPopup = function() {
        return this._popupQueue.shift();
    };


    Achievements.load();


    // =========================================================
    // Game_System
    // =========================================================
    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this.initAchievementData();
    };


    Game_System.prototype.initAchievementData = function() {
        if (!this._saUnlocked) this._saUnlocked = {};
    };


    Game_System.prototype.unlockAchievement = function(id) {
        this.initAchievementData();
        if (this.isAchievementUnlocked(id) || Achievements.isUnlocked(id)) return false;


        this._saUnlocked[id] = true;
        Achievements.setUnlocked(id, true);
        Achievements.queuePopup(id);
        return true;
    };


    Game_System.prototype.lockAchievement = function(id) {
        this.initAchievementData();
        this._saUnlocked[id] = false;
        Achievements.setUnlocked(id, false);
    };


    Game_System.prototype.isAchievementUnlocked = function(id) {
        this.initAchievementData();
        return !!this._saUnlocked[id] || Achievements.isUnlocked(id);
    };


    Game_System.prototype.achievementCount = function() {
        this.initAchievementData();
        var count = 0;
        for (var i = 0; i < Achievements.data.length; i++) {
            if (this.isAchievementUnlocked(Achievements.data[i].id)) count++;
        }
        return count;
    };


    Game_System.prototype.totalAchievementCount = function() {
        return Achievements.totalCount();
    };


    // =========================================================
    // New game / load cleanup
    // =========================================================
    var _DataManager_setupNewGame = DataManager.setupNewGame;
    DataManager.setupNewGame = function() {
        _DataManager_setupNewGame.call(this);
        Achievements._popupQueue = [];
        if ($gameSystem) $gameSystem._saUnlocked = {};
    };


    var _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        _DataManager_extractSaveContents.call(this, contents);
        Achievements._popupQueue = [];
        if ($gameSystem) {
            $gameSystem._saUnlocked = {};
        }
        Achievements.load();
    };


    // =========================================================
    // Popup window
    // =========================================================
    function Window_SAPopup() {
        this.initialize.apply(this, arguments);
    }


    Window_SAPopup.prototype = Object.create(Window_Base.prototype);
    Window_SAPopup.prototype.constructor = Window_SAPopup;


    Window_SAPopup.prototype.initialize = function() {
        Window_Base.prototype.initialize.call(this, POPUP_X, POPUP_Y, POPUP_MIN_WIDTH, POPUP_MIN_HEIGHT);
        this.openness = 0;
        this.visible = false;
        this.opacity = 0;
        this.contentsOpacity = 0;
        this._duration = 0;
        this._fadeState = "none";
        this._currentAchievement = null;
        this.createContents();
    };


    Window_SAPopup.prototype.calcPopupSize = function(achievement) {
        var title = "Achievement Unlocked!";
        var name = achievement ? achievement.name : "";
        var iconW = SA_POPUP_ICON ? (POPUP_ICON_SIZE + 12) : 0;


        var width = Math.max(
            POPUP_MIN_WIDTH,
            Math.ceil(Math.max(this.textWidth(title), this.textWidth(name))) + POPUP_PADDING_X * 2 + iconW
        );


        var height = Math.max(
            POPUP_MIN_HEIGHT,
            POPUP_PADDING_Y * 2 + this.lineHeight() * 2 + POPUP_LINE_GAP
        );


        return { width: width, height: height };
    };


    Window_SAPopup.prototype.rebuildSize = function(achievement) {
        var size = this.calcPopupSize(achievement);
        this.width = size.width;
        this.height = size.height;
        this.createContents();
        this.x = POPUP_X;
        this.y = POPUP_Y;
    };


    Window_SAPopup.prototype.refreshCurrent = function() {
        if (!this._currentAchievement) return;


        this.contents.clear();


        var textX = SA_POPUP_ICON ? (POPUP_ICON_SIZE + 12) : 0;
        var availableW = this.contentsWidth() - textX;


        if (SA_POPUP_ICON) {
            var iconBitmap = ImageManager.loadSystem(SA_POPUP_ICON);
            if (iconBitmap.isReady()) {
                this.contents.blt(iconBitmap, 0, 0, iconBitmap.width, iconBitmap.height, 0, 4, POPUP_ICON_SIZE, POPUP_ICON_SIZE);
            } else {
                iconBitmap.addLoadListener(function() {
                    if (this._currentAchievement) this.refreshCurrent();
                }.bind(this));
            }
        }


        this.resetTextColor();
        this.changeTextColor(this.textColor(5));
        this.drawText("Achievement Unlocked!", textX, 0, availableW, "left");
        this.changeTextColor(this.normalColor());
        this.drawText(this._currentAchievement.name, textX, this.lineHeight() + POPUP_LINE_GAP, availableW, "left");
    };


    Window_SAPopup.prototype.showAchievement = function(achievement) {
        this._currentAchievement = achievement;
        this.rebuildSize(achievement);
        this.visible = true;
        this.open();
        this._duration = POPUP_DURATION;
        this._fadeState = "in";
        this.opacity = 0;
        this.contentsOpacity = 0;
        this.refreshCurrent();
    };


    Window_SAPopup.prototype.update = function() {
        Window_Base.prototype.update.call(this);


        if (this._fadeState === "in") {
            this.opacity += POPUP_FADE_SPEED;
            this.contentsOpacity += POPUP_FADE_SPEED;
            if (this.opacity >= 255) {
                this.opacity = 255;
                this.contentsOpacity = 255;
                this._fadeState = "hold";
            }
        } else if (this._fadeState === "hold") {
            if (this._duration > 0) this._duration--;
            else this._fadeState = "out";
        } else if (this._fadeState === "out") {
            this.opacity -= POPUP_FADE_SPEED;
            this.contentsOpacity -= POPUP_FADE_SPEED;
            if (this.opacity <= 0) {
                this.opacity = 0;
                this.contentsOpacity = 0;
                this.visible = false;
                this.close();
                this._fadeState = "none";
                this._currentAchievement = null;
            }
        }
    };


    // =========================================================
    // Achievement scene
    // =========================================================
    function Scene_Achievements() {
        this.initialize.apply(this, arguments);
    }


    Scene_Achievements.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_Achievements.prototype.constructor = Scene_Achievements;


    Scene_Achievements.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createAchievementWindow();
    };


    Scene_Achievements.prototype.createAchievementWindow = function() {
        this._achievementWindow = new Window_SAList(0, 0, Graphics.boxWidth, Graphics.boxHeight);
        this._achievementWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(this._achievementWindow);
    };


    window.Scene_Achievements = Scene_Achievements;


    // =========================================================
    // Achievement list (grid, 1280x720 tuned)
    // =========================================================
    function Window_SAList() {
        this.initialize.apply(this, arguments);
    }


    Window_SAList.prototype = Object.create(Window_Selectable.prototype);
    Window_SAList.prototype.constructor = Window_SAList;


    Window_SAList.prototype.initialize = function(x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
        this.select(0);
        this.activate();
    };


    Window_SAList.prototype.maxItems = function() {
        return Achievements.totalCount();
    };


    Window_SAList.prototype.maxCols = function() {
        return 2; // 4-column grid for 1280x720
    };


    Window_SAList.prototype.itemHeight = function() {
        return 114;
    };


    Window_SAList.prototype.itemWidth = function() {
        var cols = this.maxCols();
        return Math.floor(this.contentsWidth() / cols);
    };


    Window_SAList.prototype.refresh = function() {
        this.contents.clear();
        this.drawHeader();
        for (var i = 0; i < this.maxItems(); i++) {
            this.drawItem(i);
        }
    };


    Window_SAList.prototype.drawHeader = function() {
        var count = $gameSystem.achievementCount();
        var total = Achievements.totalCount();
        this.drawText("Achievements: " + count + " / " + total, -4, 646, this.contentsWidth(), "right");
    };


    Window_SAList.prototype.drawItem = function(index) {
        var ach = Achievements.data[index];
        if (!ach) return;


        var rect = this.itemRect(index);
        var unlocked = $gameSystem.isAchievementUnlocked(ach.id);
        var bmp = ImageManager.loadSystem(unlocked ? "unlock_ach" : "locked_ach");


        var iconX = rect.x + 18;
        var iconY = rect.y + 18;


        if (bmp.isReady()) {
            this.contents.blt(bmp, 0, 0, bmp.width, bmp.height, iconX, iconY, 72, 72);
        } else {
            bmp.addLoadListener(function() {
                this.drawItem(index);
            }.bind(this));
        }


        var textX = rect.x + 100;
        var textW = rect.width - textX - 4;

        // Name: censor if locked and nameCensor is true
        var displayName;
        if (unlocked) {
            displayName = ach.name;
        } else if (ach.nameCensor) {
            displayName = "???";
        } else {
            displayName = ach.name;
        }
        this.drawText(displayName, textX, rect.y + 14, textW, "left");

        // Description: censor if locked and descriptionCensor is true
        var displayDesc;
        if (unlocked) {
            displayDesc = ach.description;
        } else if (ach.descriptionCensor) {
            displayDesc = "?????";
        } else {
            displayDesc = ach.description;
        }
        this.drawText(displayDesc, textX, rect.y + 44, textW, "left");
    };


    // =========================================================
    // Map popup support
    // =========================================================
    var _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _Scene_Map_createDisplayObjects.call(this);
        this._saPopupWindow = new Window_SAPopup();
        this.addChild(this._saPopupWindow);
    };


    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this.processSAPopupQueue();
    };


    Scene_Map.prototype.processSAPopupQueue = function() {
        if (!this._saPopupWindow) return;
        if (this._saPopupWindow._fadeState !== "none") return;
        if (!Achievements.hasPopup()) return;


        var ach = Achievements.shiftPopup();
        if (ach) this._saPopupWindow.showAchievement(ach);
    };


    // =========================================================
    // Menu / Title
    // =========================================================
    var _Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
    Window_MenuCommand.prototype.addOriginalCommands = function() {
        _Window_MenuCommand_addOriginalCommands.call(this);
        this.addCommand("Achievements", "achievements", true);
    };


    var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_createCommandWindow.call(this);
        this._commandWindow.setHandler("achievements", this.commandAchievements.bind(this));
    };


    Scene_Menu.prototype.commandAchievements = function() {
        SceneManager.push(Scene_Achievements);
    };


    //var _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    //Window_TitleCommand.prototype.makeCommandList = function() {
    //    _Window_TitleCommand_makeCommandList.call(this);
    //    this.addCommand("Achievements", "achievements");
    //};


    var _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler("achievements", this.commandAchievements.bind(this));
    };


    Scene_Title.prototype.commandAchievements = function() {
        SceneManager.push(Scene_Achievements);
    };


})();