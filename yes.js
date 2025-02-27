
const febHolidays = [
    "Dear Vondu, please feel it",
    "You’re my partner in crime",
    "And life would’ve been so boring without you😊",
    "Thank you for being with me in my worst 🤩",
    "dukh me tum aur khushi me tum 🤨",
    "I can’t tell you how thankful I am for you❤",
    "In case I don't say it enough❤️",
    "life would not be the same without you",
    "it's ok sometimes things are not good between us  ✨💕",
    " sometimes You understand me better ",
    "And sometimes 😤 absolutly not",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "BUT.... BUT...BUT ✋🏻",
    "Still u r always there for me🥰",
    "And always takes care of me like",
    "A Guardian angel🥰",
    "Finding the right words for you is as hard ",
    "As ur 🍆 when you are in mood🤭" ,
   "Your partnership is one of the best parts of my life",
   "Just being with you makes me forget all my problems",
   "Again thank u for being this wonderful person ",
    "May the year ahead be as fulfilling ❤",
    "As your friendship has been to me",
    "On this day, may you realize ",
    "how much you’re loved❤, appreciated, and admired😇",
    "I wish you get everything you want in your life ",
   "Once Again",
   "💐🎁Happy Birthday Vonduuu🎉🎈"
    
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  