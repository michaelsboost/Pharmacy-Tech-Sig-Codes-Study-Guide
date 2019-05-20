var btnAbbrv = document.querySelector("[data-place=abbrv]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
      "Both ears",
      "Both eyes",
      "By mouth",
      "G Tube",
      "Intradermal",
      "Intramuscular",
      "Intrathecal",
      "Intravenous",
      "Intravenous Piggyback",
      "Left ear",
      "Left eye",
      "Nasal Gastric",
      "Nasal Gastric Tube",
      "Rectally",
      "Right ear",
      "Right eye",
      "Subcutaneous",
      "Sublingual",
      "Topical"
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
    this.textContent = "AU";
  }
  if (this.textContent === callFor[1]) {
    this.textContent = "OU";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "PO";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "GT";
  }
  if (this.textContent === callFor[4]) {
    this.textContent = "ID";
  }
  if (this.textContent === callFor[5]) {
    this.textContent = "IM";
  }
  if (this.textContent === callFor[6]) {
    this.textContent = "IT";
  }
  if (this.textContent === callFor[7]) {
    this.textContent = "IV";
  }
  if (this.textContent === callFor[8]) {
    this.textContent = "IVPB";
  }
  if (this.textContent === callFor[9]) {
    this.textContent = "AS";
  }
  if (this.textContent === callFor[10]) {
    this.textContent = "OS";
  }
  if (this.textContent === callFor[11]) {
    this.textContent = "NG";
  }
  if (this.textContent === callFor[12]) {
    this.textContent = "NGT";
  }
  if (this.textContent === callFor[13]) {
    this.textContent = "PR";
  }
  if (this.textContent === callFor[14]) {
    this.textContent = "AD";
  }
  if (this.textContent === callFor[15]) {
    this.textContent = "OD";
  }
  if (this.textContent === callFor[16]) {
    this.textContent = "SQ/SC";
  }
  if (this.textContent === callFor[17]) {
    this.textContent = "SL";
  }
  if (this.textContent === callFor[18]) {
    this.textContent = "TOP";
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