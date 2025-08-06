/* global chrome */

let shiftGSpeed = 1.0;

chrome.storage.sync.get({ shiftGSpeed: 1.0 }, (data) => {
  shiftGSpeed = data.shiftGSpeed;
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.shiftGSpeed) {
    shiftGSpeed = changes.shiftGSpeed.newValue;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyG") {
    e.preventDefault();
    document.querySelectorAll("video").forEach((video) => {
      video.playbackRate = shiftGSpeed;
    });
  }
});
