document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "g") {
    e.preventDefault();
    document.querySelectorAll("video").forEach((video) => {
      video.playbackRate = 2.3;
    });
  }
});
