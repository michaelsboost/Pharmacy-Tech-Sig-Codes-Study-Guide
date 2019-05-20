var btnAbbrv = document.querySelector("[data-place=abbrv]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
      "Everyday",
      "Twice Daily",
      "Three times a day",
      "Four times a day",
      "Five, Six, etc: times a day",
      "Every 24 Hours",
      "Every 12 Hours",
      "Every _ Hours",
      "Every other day",
      "Every night at bedtime",
      "Every morning",
      "Every evening",
      "Before food/meals",
      "After food/meals",
      "As needed",
      "As desired",
      "Discontinue",
      "Dispense As Written",
      "Hour",
      "At Bedtime",
      "Nothing By Mouth",
      "Every 2 hours",
      "Every 6 hours",
      "Every afternoon",
      "Quantity Sufficient",
      "Immediately",
      "As directed",
      "Every week",
      "With",
      "Without"
    ],
    quesInt   = Math.floor(Math.random() * callFor.length),
    countDown = function() {
      count.textContent = counter;

      if (counter === 0) {
        clearInterval(interval);
        reset.textContent = "";
        location.reload(true);
      } else {
        counter--;
      }
    };

btnAbbrv.textContent = callFor[quesInt];

btnAbbrv.onclick = function() {
  if (this.textContent === callFor[0]) {
    this.textContent = "QD/Qdaily";
  }
  if (this.textContent === callFor[1]) {
    this.textContent = "BID";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "TID";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "QID";
  }
  if (this.textContent === callFor[4]) {
    this.textContent = "5x/day, etc";
  }
  if (this.textContent === callFor[5]) {
    this.textContent = "Q24H";
  }
  if (this.textContent === callFor[6]) {
    this.textContent = "Q12H";
  }
  if (this.textContent === callFor[7]) {
    this.textContent = "Q_H**";
  }
  if (this.textContent === callFor[8]) {
    this.textContent = "QOD";
  }
  if (this.textContent === callFor[9]) {
    this.textContent = "QHS";
  }
  if (this.textContent === callFor[10]) {
    this.textContent = "QAM";
  }
  if (this.textContent === callFor[11]) {
    this.textContent = "QPM";
  }
  if (this.textContent === callFor[12]) {
    this.textContent = "AC";
  }
  if (this.textContent === callFor[13]) {
    this.textContent = "PC";
  }
  if (this.textContent === callFor[14]) {
    this.textContent = "PRN";
  }
  if (this.textContent === callFor[15]) {
    this.textContent = "ad lib";
  }
  if (this.textContent === callFor[16]) {
    this.textContent = "d/c";
  }
  if (this.textContent === callFor[17]) {
    this.textContent = "DAW";
  }
  if (this.textContent === callFor[18]) {
    this.textContent = "H";
  }
  if (this.textContent === callFor[19]) {
    this.textContent = "HS";
  }
  if (this.textContent === callFor[20]) {
    this.textContent = "NPO";
  }
  if (this.textContent === callFor[21]) {
    this.textContent = "Q2H";
  }
  if (this.textContent === callFor[22]) {
    this.textContent = "Q6H";
  }
  if (this.textContent === callFor[23]) {
    this.textContent = "QPM";
  }
  if (this.textContent === callFor[24]) {
    this.textContent = "QS";
  }
  if (this.textContent === callFor[25]) {
    this.textContent = "STAT";
  }
  if (this.textContent === callFor[26]) {
    this.textContent = "UD";
  }
  if (this.textContent === callFor[27]) {
    this.textContent = "QW";
  }
  if (this.textContent === callFor[27]) {
    this.innerHTML = "<span style='text-decoration:overline;'>C</span>";
  }
  if (this.textContent === callFor[27]) {
    this.innerHTML = "<span style='text-decoration:overline;'>S</span>";
  }

  this.className = "answer";
  count.textContent = "5";
  interval = setInterval(countDown, 1000);
};

window.onkeyup = function(e) {
  if (e.keyCode == 13) {
    btnAbbrv.click();
  }
};