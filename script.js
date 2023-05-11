const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {  

  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

  gsap.fromTo(thisAnimWrap, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
  }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "none",
    scrollTrigger: {
      trigger: sec,   
      start: "top top",
      end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
      pin: thisPinWrap,
      invalidateOnRefresh: true,
//anticipatePin: 1,
      scrub: true,
//markers: true,
    }
  });

});

// p5js

function preload() {

}

function setup() {
  var canvas = createCanvas(568, 640);
  canvas.parent('canvas');
  background(127);
  loadImage('./map-form.png', img => {
    img.resize(568, 640);
    image(img, 0, 0);
  }, console.log("error")); 
}

function draw() {
  stroke(255,2,16);
  strokeWeight(10);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
function wallimageclick(clicked_id) {
  modal.style.display = "block";
  modalImg.src = document.getElementById(clicked_id).src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("myClose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// AOS

AOS.init();

