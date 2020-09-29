var element = document.getElementById("hero-message");

element.innerHTML = element.textContent.replace(
  /\S+/g,
  '<span class="letter">$&</span>'
);

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: "#hero-message .letter",
    scale: [3, 1],
    opacity: [0, 1],
    translateZ: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: (elem, index) => index * 70,
  })
  .add({
    target: "#hero-message",
    opacity: 0,
    duration: 1000,
    delay: 1000,
    easing: "easeOutExpo",
  });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 150) {
//       $("#nav").css("background", "#1b242f");
//     } else {
//       $("#nav").css("background", "transparent");
//     }
//   });
// });

function callbackFuncAbout(entries, oberser) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $("#about-header").css("opacity", "1");
      $("#about-header").addClass("w3-container w3-center w3-animate-left");
    }
  });
}

function animataionDelay(target, animation, duration) {
  setTimeout(function () {
    $(target).css("opacity", "1");
    $(target).addClass(animation);
  }, duration);
}

function progressbarAnimation(target) {
  let percent = 0;
  let maxWidth =
    ($(target + " .progress-bar").width() / $(".progress").width()) * 100;
  $(target + " .progress-bar").css("width", 0 + "%");
  let timerId = setInterval(function () {
    // increment progress bar
    percent += 5;
    $(target + " .progress-bar").css("width", percent + "%");
    if (percent >= maxWidth) {
      clearInterval(timerId);
      $(target + " .progress-bar").html(
        '<div class="prog-b-percent ml-auto text-right px-2">' +
          percent +
          "%</div>"
      );
    } else {
      $(target + " .progress-bar").html(
        '<div class="prog-b-percent ml-auto text-right px-2">' +
          percent +
          "%</div>"
      );
    }
  }, 300);
}

function callbackFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const rightAnimation = [
        ".ui-progress-bar",
        ".rdbs-progress-bar",
        ".java-ee-progress-bar",
        ".vue-progress-bar",
        ".js-progress-bar",
        ".bs-progress-bar",
        ".css-progress-bar",
        ".html-progress-bar",
      ];
      const progressbar = [
        ".ui-design",
        ".rdbs",
        ".java",
        ".vue",
        ".js",
        ".bs",
        ".css",
        ".html",
      ];
      animataionDelay(".about-left", "w3-animate-left", 500);
      animataionDelay(".about-right", "w3-animate-right", 500);
    }
  });

  $(".project").hover(
    function () {
      $(this).children(".middle").css("opacity", "1");
      $(this).children(".image").css("opacity", "0");
      $(this)
        .children(".middle")
        .children(".project-title")
        .addClass("w3-container w3-center w3-animate-top");
      $(this)
        .children(".middle")
        .children(".project-text")
        .addClass("w3-container w3-center w3-animate-top");
      $(this)
        .children(".middle")
        .children(".project-btn")
        .addClass("w3-container w3-center w3-animate-bottom");
    },
    function () {
      $(this).children(".middle").css("opacity", "0");
      $(this).children(".image").css("opacity", "1");
      $(this)
        .children(".middle")
        .children(".project-title")
        .removeClass("w3-container w3-center w3-animate-top");
      $(this)
        .children(".middle")
        .children(".project-text")
        .removeClass("w3-container w3-center w3-animate-top");
      $(this)
        .children(".middle")
        .children(".project-btn")
        .removeClass("w3-container w3-center w3-animate-bottom");
    }
  );
}

function projectHeaderFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $(".project-header").css("opacity", "1");
      $(".project-header").addClass("w3-container w3-center w3-animate-right");
    }
  });
}

function projectContentFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const procjetContent = [
        ".sorsogon-project",
        ".edu-landing-page",
        ".kitty-chicha",
        ".todo-list",
        ".quiz-bee",
        ".book-storage",
      ];
      procjetContent.forEach((e, i) =>
        animataionDelay(e, "animation-flip", i * 500)
      );
    }
  });
}

function abilitiesFunc(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const abilities = [".fast", ".responsive", ".aha", ".dynamic"];
      abilities.forEach((e, i) => {
        animataionDelay(e, "w3-animate-bottom", i * 500);
      });
    }
  });
}

const profSkillAbout = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

const aboutOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const projectOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const projectContentOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const abilitiesOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let observerAbout = new IntersectionObserver(callbackFuncAbout, aboutOption);
let observer = new IntersectionObserver(callbackFunc, profSkillAbout);
let projectObserver = new IntersectionObserver(
  projectHeaderFunc,
  projectOption
);

let projectContentObserver = new IntersectionObserver(
  projectContentFunc,
  projectContentOption
);

let abilitiesObserver = new IntersectionObserver(
  abilitiesFunc,
  abilitiesOption
);

observerAbout.observe(document.getElementById("about"));
observer.observe(document.getElementById("about"));
projectObserver.observe(document.getElementById("project"));
projectContentObserver.observe(document.getElementById("project"));
abilitiesObserver.observe(document.getElementById("abilities"))

// $( document ).ready(function() {
//   new WOW().init();
// });
