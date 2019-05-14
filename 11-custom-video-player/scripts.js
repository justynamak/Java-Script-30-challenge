const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const togglePlay = function() {
  const method = video.paused ? "play" : "pause";
  video[method]();
};
const updateButton = function() {
  const icon = this.paused ? "►" : "||";
  toggle.textContent = icon;
};
const skip = function() {
  video.currentTime += parseFloat(this.dataset.skip);
};
const handleRangeUpdate = function() {
  video[this.name] = this.value;
};
const handleProgress = function() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};
const scrub = function(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("pause", updateButton);
video.addEventListener("play", updateButton);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mouseDown = false;
progress.addEventListener("mousemove", e => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = false));
progress.addEventListener("mouseup", () => (mouseDown = true));

progress.addEventListener("click", scrub);
