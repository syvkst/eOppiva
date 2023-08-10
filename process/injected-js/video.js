const videoRules =
  "[data-sytheme=dark]{--sy_video_button_bg:var(--sy_level_2);--sy_video_button_fg:var(--sy_font_color);--sy_video_button_hover_bg:var(--sy_level_3);--sy_video_button_hover_fg:var(--sy_blue_regular)}[data-sytheme=light]{--sy_video_button_bg:var(--sy_light);--sy_video_button_fg:var(--sy_font_color);--sy_video_button_hover_bg:var(--sy_grey_A_regular);--sy_video_button_hover_fg:var(--sy_light)}.video-js{display:none}.video-button{color:var(--sy_video_button_fg);width:100%;padding:2rem 2rem;font-size:100%;background-color:var(--sy_video_button_bg);border-radius:.25rem;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);transition:.2s}.video-button:hover{background-color:var(--sy_video_button_hover_bg);color:var(--sy_video_button_hover_fg)}@media (min-width:767.98px){.video-js{display:block}.video-button{display:none}}";

function initializeVideos() {
  const videos = document.querySelectorAll(".video-js");

  for (let video of videos) {
    let source = video.querySelector("video source").src;

    let playbackButton = document.createElement("a");
    playbackButton.classList.add("video-button");
    playbackButton.href = source;
    playbackButton.target = "_blank";

    let playbackIcon = document.createElement("i");
    playbackIcon.classList.add("fa", "fa-video-camera");
    playbackButton.appendChild(playbackIcon);

    video.parentElement.insertBefore(playbackButton, video);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  initializeVideos();
});

insertStyle(videoRules);
