let rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (e) {
  let rectangleLocation = rect.getBoundingClientRect();
  let insideRectVal = e.clientX - rectangleLocation.left;
  if (insideRectVal < rectangleLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
    // redArea();
  } else {
    // blueArea();

    let blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });

  }
});

function redArea() {}

function blueArea() {}


rect.addEventListener('mouseleave', function(e) {
  gsap.to(rect, {
    backgroundColor: 'white'
  })
})