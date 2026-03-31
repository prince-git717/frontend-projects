var rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (details) {
    var rectlocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectlocation.left;

    if (insiderectval < rectlocation.width / 2) {

        var redcolor = gsap.utils.mapRange(
            0,
            rectlocation.width / 2,
            255,
            0,
            insiderectval
        );

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: "power4.out"
        });

    } else {

        var bluecolor = gsap.utils.mapRange(
            rectlocation.width / 2,
            rectlocation.width,
            0,
            255,
            insiderectval
        );

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: "power4.out"
        });
    }
});