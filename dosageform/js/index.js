var btnAbbrv = document.querySelector("[data-place=abbrv]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
      "Buccal Tablet",
      "Capsule",
      "Cream",
      "Elixir",
      "Enema",
      "Enteric Coated",
      "Liquid",
      "Lotion",
      "Lozenge",
      "Meter Dose Inhaler",
      "Ointment",
      "Patch",
      "Suppository",
      "Suspension",
      "Syrup",
      "Tablet",
      "Tincture",
      "Troche",
      "Vaginal Cream",
      "Vaginal Tablet"
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
    this.textContent = "buccal";
  }
  if (this.textContent === callFor[1]) {
    this.textContent = "cap";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "cr/crm";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "elix";
  }
  if (this.textContent === callFor[4]) {
    this.textContent = "emul";
  }
  if (this.textContent === callFor[5]) {
    this.textContent = "enema";
  }
  if (this.textContent === callFor[6]) {
    this.textContent = "EC";
  }
  if (this.textContent === callFor[7]) {
    this.textContent = "liq";
  }
  if (this.textContent === callFor[8]) {
    this.textContent = "lot";
  }
  if (this.textContent === callFor[9]) {
    this.textContent = "loz";
  }
  if (this.textContent === callFor[10]) {
    this.textContent = "MDI";
  }
  if (this.textContent === callFor[11]) {
    this.textContent = "oint, ung";
  }
  if (this.textContent === callFor[12]) {
    this.textContent = "Patch";
  }
  if (this.textContent === callFor[13]) {
    this.textContent = "supp";
  }
  if (this.textContent === callFor[14]) {
    this.textContent = "susp";
  }
  if (this.textContent === callFor[15]) {
    this.textContent = "syr";
  }
  if (this.textContent === callFor[16]) {
    this.textContent = "tab";
  }
  if (this.textContent === callFor[17]) {
    this.textContent = "tinc";
  }
  if (this.textContent === callFor[18]) {
    this.textContent = "troches";
  }
  if (this.textContent === callFor[19]) {
    this.textContent = "vag cr";
  }
  if (this.textContent === callFor[20]) {
    this.textContent = "vag tab";
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