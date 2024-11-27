function textMarqueAnimation() {
  window.addEventListener("wheel", function (info) {
    let arrow = document.querySelector(".marque img");
    if (info.deltaY < 0) {
      gsap.to(".marque", {
        transform: `translateX(-200%)`,
        repeat: -1,
        duration: 5,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: `translateX(0%)`,
        repeat: -1,
        duration: 5,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}
textMarqueAnimation();
