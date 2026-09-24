//=============================================================================
// main.js
//=============================================================================

const GAME_VERSION = "1.2.8";

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};