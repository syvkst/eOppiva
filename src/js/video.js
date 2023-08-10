const videoRules =
  "# inject:../../process/min-styles/video.min.css -> <- end #";

function initializeVideos() {
  const videos = document.querySelectorAll(".video-js");

  for (let video of videos) {
    let source = video.querySelector("video source").src;

    let playbackButton = document.createElement("a");
    playbackButton.classList.add("video-button");
    playbackButton.href = source;
    playbackButton.target = "_blank";

    let playbackIcon = document.createElement("i");
    playbackIcon.classList.add("fa", "fa-play-circle");
    playbackButton.appendChild(playbackIcon);

    video.parentElement.insertBefore(playbackButton, video);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  initializeVideos();
});

insertStyle(videoRules);
