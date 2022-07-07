const scrollimage = new ScrollPlay({
  speed: 10,
  container: "img_container",
  canvas: "img_canvas",
  sequence:
    "https://static.pkmo.dev/RedLeaf_Aerial_Mockup-Preferred_210f_JPEG/Comp 3_210f_alternative_00",
  frames: 210
});

const scrollvideo = new ScrollPlay({
  speed: 300,
  container: "video_container",
  canvas: "video_canvas",
  video: "video",
  inertia: 6
});