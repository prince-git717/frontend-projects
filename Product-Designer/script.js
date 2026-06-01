const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 1.5,
    lerp: 0.08
});

function headingAnimation() {

  let tl = gsap.timeline();

  tl.from("nav a", {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  .from("nav h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.7")
  .to(".editsh1", {
    y: 0,
    opacity: 0.5,
    duration: 1,
    ease: "power4.out"
  }, "-=0.5")
  .to(".editiablediv2 h4", {
    y: 0,
    opacity: 0.5,
    duration: 1,
    ease: "power4.out"
  }, "-=0.7")
  .to(".thirdgsap h3", {
    y: 1,
    opacity: 0.5,
    duration: 1,
    ease: "power4.out"
  }, "-=0.7")
  .to(".ancortags a", {
    y: 1,
    opacity: 0.5,
    duration: 1,
    ease: "power4.out"
  }, "-=0.7")
  .to(".circle .cir1,.cir2", {
    y: 1,
    opacity: 0.5,
    duration: 1,
    ease: "power4.out"
  }, "-=0.7");
}
headingAnimation();



function smallcircle() {
    const circle = document.querySelector(".small-div");
    window.addEventListener("mousemove", (dets) => {
        circle.style.transform = `translate(${dets.x}px, ${dets.y}px)`
    })
}
smallcircle()
// image lgane ka part....
document.querySelectorAll(".firh1tag").forEach(function (firh1tag) {
    var rotate =0;
    var diffrott=0;
    firh1tag.addEventListener("mousemove", function (dets) {
       var difference= dets.clientY - firh1tag.getBoundingClientRect().top
    //    ye upr wali line bta rhii hai kii mouse uss div ke andar kitna hai and firh1tag.getBoundingClientRect().top ye line bta rhii hai hr 1 individual div ki position kya hai top se
    diffrott= dets.clientX-rotate
    rotate = dets.clientX
        gsap.to(firh1tag.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: difference,
            left: dets.clientX,     
            rotate: gsap.utils.clamp(-20, 20 , diffrott),
        })
    })
})

document.querySelectorAll(".firh1tag").forEach(function (firh1tag) {
    firh1tag.addEventListener("mouseleave", function (dets) {
       var difference= dets.clientY - firh1tag.getBoundingClientRect().top
        gsap.to(firh1tag.querySelector("img"), {
            opacity: 0,
            ease: Power1, 
        })
    })
})





