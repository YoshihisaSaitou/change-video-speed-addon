document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyG") {
    e.preventDefault();
    document.querySelectorAll("video").forEach((video) => {
      video.playbackRate = 2.3;
    });
  }
});
