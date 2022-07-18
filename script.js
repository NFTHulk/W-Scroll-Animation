if(window.screen.width>=300&&window.screen.width<=719){
  const scrollimage = new ScrollPlay({
    speed: 50,
    container: "img_container",
    canvas: "img_canvas",
    sequence:
        "Mobile/",
    frames: 28
  });
}else if(window.screen.width>=720&&window.screen.width<=960){
  const scrollimage = new ScrollPlay({
    speed: 50,
    container: "img_container",
    canvas: "img_canvas",
    sequence:
        "Tab/",
    frames: 28
  });
}else{
  const scrollimage = new ScrollPlay({
    speed: 50,
    container: "img_container",
    canvas: "img_canvas",
    sequence:
        "Desktop/",
    frames: 28
  });
}

const scrollvideo = new ScrollPlay({
  speed: 300,
  container: "video_container",
  canvas: "video_canvas",
  video: "video",
  inertia: 6
});
