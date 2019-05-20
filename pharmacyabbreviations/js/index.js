var btnAbbrv = document.querySelector("[data-place=abbrv]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
      "With",
      "Without",
      "Orally Disintegrating Tablet",
      "Drop or Drops"
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
    this.innerHTML = "<span style='text-decoration:overline;'>c</span>";
  }
  if (this.textContent === callFor[1]) {
    this.innerHTML = "<span style='text-decoration:overline;'>s</span>";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "ODT";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "gtt or gtts";
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