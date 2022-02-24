

//video  popup
$(document).ready(function () {
  $(".videoplay").magnificPopup({
      type: "iframe",
      iframe: {
          markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

          patterns: {
              youtube: {
                  index: "youtube.com/", 

                  id: "v=", 

                  src: "https://www.youtube.com/embed/%id%?autoplay=1",
              },
              vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
              },
              gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed",
              },

          },

          srcAction: "iframe_src",
      },
  });
});


//hero animation

const parallaxContainer = document.getElementById("wrap");
const chouchin = document.querySelectorAll(".chouchin-wrap");

const fixer = 0.003;

gsap.registerEffect({
  name: "mousemoveParallax",
  effect: (targets, config) => {
    return gsap.set(targets, { x: config.x, y: config.y });
  }
});

document.addEventListener("mousemove", function (event) {
  const pageX =
    event.pageX - parallaxContainer.getBoundingClientRect().width * 0.5;

  const pageY =
    event.pageY - parallaxContainer.getBoundingClientRect().height * 0.5;

  chouchin.forEach((item) => {
    const speedX = item.getAttribute("data-speed-x");
    const speedY = item.getAttribute("data-speed-y");

    gsap.effects.mousemoveParallax(item, {
      x: (item.offsetLeft + pageX * speedX) * fixer,
      y: (item.offsetTop + pageY * speedY) * fixer
    });
  });
});





//sidbar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}