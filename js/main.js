window.onload = function () {
  var parallaxBox = document.getElementById("parallax");
  var /* c1left = document.getElementById('l1').offsetLeft,
  c1top = document.getElementById('l1').offsetTop, */
    c2left = document.getElementById("l2").offsetLeft,
    c2top = document.getElementById("l2").offsetTop,
    c3left = document.getElementById("l3").offsetLeft,
    c3top = document.getElementById("l3").offsetTop,
    c4left = document.getElementById("l4").offsetLeft,
    c4top = document.getElementById("l4").offsetTop,
    c5left = document.getElementById("l5").offsetLeft,
    c5top = document.getElementById("l5").offsetTop,
    c6left = document.getElementById("l6").offsetLeft,
    c6top = document.getElementById("l6").offsetTop,
    c7left = document.getElementById("l7").offsetLeft,
    c7top = document.getElementById("l7").offsetTop,
    c8left = document.getElementById("l8").offsetLeft,
    c8top = document.getElementById("l8").offsetTop,
    c9left = document.getElementById("l9").offsetLeft,
    c9top = document.getElementById("l9").offsetTop;

  parallaxBox.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;

    /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
    mouseParallax("l2", c2left, c2top, x, y, 25);
    mouseParallax("l3", c3left, c3top, x, y, 20);
    mouseParallax("l4", c4left, c4top, x, y, 35);
    mouseParallax("l5", c5left, c5top, x, y, 30);
    mouseParallax("l6", c6left, c6top, x, y, 45);
    mouseParallax("l7", c7left, c7top, x, y, 30);
    mouseParallax("l8", c8left, c8top, x, y, 25);
    mouseParallax("l9", c9left, c9top, x, y, 40);
  };
};

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
  var obj = document.getElementById(id);
  var parentObj = obj.parentNode,
    containerWidth = parseInt(parentObj.offsetWidth),
    containerHeight = parseInt(parentObj.offsetHeight);
  obj.style.left =
    left -
    ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
      speed +
    "px";
  obj.style.top =
    top -
    ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
      speed +
    "px";
}

// start Slikls
let skils = document.querySelector("#skils .container");
let allP = Array.from(
  document.querySelectorAll(
    "#skils .container .row .content .pp p:last-of-type"
  )
);

let allP2 = Array.from(
  document.querySelectorAll(
    "#skils .container .row .content .pp p:first-of-type"
  )
);

function setWidth(item, width) {
  item.style.width = `${width}%`;
}

let navTop = document.querySelector(".navgition");

let stat = false;
window.onscroll = function () {
  if (window.scrollY == navTop.offsetTop) {
    navTop.style.padding = " 2.5rem 3rem";
  } else {
    navTop.style.padding = " 1.5rem 2rem";
  }

  // skils
  if (window.scrollY + 600 >= skils.offsetTop) {
    if (stat == false) {
      setWidth(allP[0], 90);
      setWidth(allP[1], 95);
      setWidth(allP[2], 80);
      setWidth(allP[3], 85);
      int(allP2[0], 90);
      int(allP2[1], 95);
      int(allP2[2], 80);
      int(allP2[3], 85);
      console.log(true);
      stat = true;
    }
  }

  // end skils
};

function int(item, width) {
  let count = 0;
  let up = setInterval(() => {
    count++;
    item.innerHTML = `${count}%`;
    if (count == width) {
      clearInterval(up);
    }
  }, 10);
}

// start Testimonials

let btnAll = Array.from(
  document.querySelectorAll("#Testimonials .container .cursol span")
);
let allContent = Array.from(
  document.querySelectorAll("#Testimonials .container .content")
);

btnAll.forEach((e) => {
  e.addEventListener("click", (cl) => {
    for (let i = 0; i < btnAll.length; i++) {
      btnAll[i].classList.remove("active");
    }
    if (cl.target.getAttribute("cl") == "one") {
      removeAndAdd(allContent, allContent[0]);
    } else if (cl.target.getAttribute("cl") == "two") {
      removeAndAdd(allContent, allContent[1]);
    } else {
      removeAndAdd(allContent, allContent[2]);
    }
    console.log(cl.target.getAttribute("cl"));
    cl.target.classList.add("active");
  });
});
// btnAll[0].

function removeAndAdd(arr, item) {
  arr.forEach((e) => {
    e.classList.remove("active");
    item.classList.add("active");
  });
}
