new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    const chairTl = new TimelineMax({ repeat: "-1", delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const desc = document.querySelectorAll(".desc");
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10" });
      chairTl
        .fromTo(chairs[0], 3, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 3, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 3, { opacity: 0 }, { opacity: 1 });
    }
  },
});
