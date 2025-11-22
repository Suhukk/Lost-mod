//=============================================================================
// main.js
//=============================================================================

const GAME_VERSION = "3.0.11";

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};