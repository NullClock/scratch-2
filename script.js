window.RufflePlayer = window.RufflePlayer || {};

window.RufflePlayer.config = {
  "allowScriptAccess": true
}

let e = document.getElementById("main");
let ruffle = window.RufflePlayer.newest();
let player = ruffle.createPlayer();
player.style.width = "100%";
player.style.height = "100%";
e.appendChild(player);
player.load("scratch2.swf");