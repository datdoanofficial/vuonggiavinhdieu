let timeouts = [];
let currentCardIndices = []; // Move currentCardIndices to the outer scope
let cards = [];
let cardTimeouts = []; // Mảng timeout IDs riêng cho animation card

function runAnimation() {
  // Clear previous timeouts
  timeouts.forEach(clearTimeout);
  timeouts = [];

  // Check if the current page is the homepage
  if (window.location.pathname !== "/") {
    return;
  }

  cards = [
    document.getElementById("card-01"),
    document.getElementById("card-02"),
    document.getElementById("card-03"),
    document.getElementById("card-04"),
    document.getElementById("card-05"),
    document.getElementById("card-06"),
  ];
  const cardClasses = [
    "new-card",
    "new-card1",
    "new-card2",
    "new-card3",
    "new-card4",
    "new-card5",
  ];
  if (!currentCardIndices.length) {
    currentCardIndices = Array(cards.length).fill(0);
  }

  let initialDelays = [1400, 1200, 1000, 1200, 1400, 1600];
  const defaultInitialDelays = [1400, 1200, 1000, 1200, 1400, 1600];

  let hasCompletedCycle = false;

  function showCard(cardIndex, element) {
    if (!element) {
      console.error(`Element with id "card-${cardIndex + 1}" not found`);
      return;
    }

    element.classList.add(cardClasses[currentCardIndices[cardIndex]]);

    timeouts.push(
      setTimeout(() => {
        element.classList.add("fade-out");

        timeouts.push(
          setTimeout(() => {
            cardClasses.forEach((className) =>
              element.classList.remove(className)
            );
            element.classList.remove("fade-out");

            currentCardIndices[cardIndex] =
              (currentCardIndices[cardIndex] + 1) % cardClasses.length;
            element.classList.add(cardClasses[currentCardIndices[cardIndex]]);

            if (isTabActive) {
              timeouts.push(
                setTimeout(() => showCard(cardIndex, element), 2000)
              );
            }
          }, 500)
        );
      }, 1500)
    );
  }

  cards.forEach((card, index) => {
    cardTimeouts.push(
      setTimeout(() => {
        showCard(index, card);
        if (index === cards.length - 1) {
          hasCompletedCycle = true;
        } else if (hasCompletedCycle) {
          initialDelays = [...defaultInitialDelays]; // Tạo bản sao mới
          hasCompletedCycle = false;
        }
      }, initialDelays[index])
    );
  });

  //wechat button
  const wechatBtn = document.querySelector(".wechat-contact");
  const wechatPopup = document.querySelector(".wechat-contact-popup");
  const wechatCloseBtn = document.querySelector(".wechat-closeBtn");

  if (wechatBtn) {
    wechatBtn.addEventListener("click", function () {
      console.log("WeChat button clicked");
      wechatPopup.style.display = "flex";
      qqPopup.style.display = "none";
      instaPopup.style.display = "none";
    });
  }

  if (wechatCloseBtn) {
    wechatCloseBtn.addEventListener("click", function () {
      console.log("Close button clicked");
      wechatPopup.style.display = "none";
    });
  } else {
    console.error('Element with class ".wechat-closeBtn" not found');
  }

  //qq button
  const qqBtn = document.querySelector(".qq-contact");
  const qqPopup = document.querySelector(".qq-contact-popup");
  const qqCloseBtn = document.querySelector(".qq-closeBtn");

  if (qqBtn) {
    qqBtn.addEventListener("click", function () {
      console.log("QQ button clicked");
      qqPopup.style.display = "flex";
      wechatPopup.style.display = "none";
      instaPopup.style.display = "none";
    });
  }

  if (qqCloseBtn) {
    qqCloseBtn.addEventListener("click", function () {
      console.log("Close button clicked");
      qqPopup.style.display = "none";
    });
  } else {
    console.error('Element with class ".qq-closeBtn" not found');
  }

  //insta button
  const instaBtn = document.querySelector(".insta-contact");
  const instaPopup = document.querySelector(".insta-contact-popup");
  const instaCloseBtn = document.querySelector(".insta-closeBtn");

  if (instaBtn) {
    instaBtn.addEventListener("click", function () {
      console.log("QQ button clicked");
      instaPopup.style.display = "flex";
      wechatPopup.style.display = "none";
      qqPopup.style.display = "none";
    });
  }

  if (instaCloseBtn) {
    instaCloseBtn.addEventListener("click", function () {
      console.log("Close button clicked");
      instaPopup.style.display = "none";
    });
  } else {
    console.error('Element with class ".insta-closeBtn" not found');
  }
}

let isTabActive = true;

window.addEventListener("pageshow", runAnimation);
window.addEventListener("popstate", runAnimation);

window.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // Clear timeouts related to card animation
    cardTimeouts.forEach(clearTimeout);
    cardTimeouts = [];

    isTabActive = false;
  } else {
    isTabActive = true;

    runAnimation();
  }
});

let oldPath = window.location.pathname;

function checkForURLChange() {
  const newPath = window.location.pathname;
  if (newPath !== oldPath) {
    oldPath = newPath;
    if (newPath === "/") {
      // Reset currentCardIndices when navigating back to the home page
      currentCardIndices = Array(cards.length).fill(0);
    }
    runAnimation();
  }
}

// Check for URL change every 500 milliseconds
setInterval(checkForURLChange, 500);
