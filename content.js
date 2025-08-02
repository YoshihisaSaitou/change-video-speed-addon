document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key.toLowerCase() === "g") {
    e.preventDefault();
    document.querySelectorAll("video").forEach((video) => {
      video.playbackRate = 2.3;
    });
  }
});
