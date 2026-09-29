//=============================================================================
// main.js
//=============================================================================

const GAME_VERSION = "1.2.9";

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};