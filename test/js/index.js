var btnAbbrv = document.querySelector("[data-place=abbrv]"),
    count     = document.querySelector("[data-action=countdown]"),
    reset     = document.querySelector(".reset"),
    interval, callInterval, counter = 4,
    callFor   = [
      "Acetaminophen (Generic of Tylenol)",
      "Asprin (AKA Acetylsalicylic Acid)",
      "Birth Control",
      "Calcium",
      "Congestive Heart Failure",
      "Codeine",
      "Controlled Release",
      "Dextromethorphan",
      "Doxycycline",
      "Enteric Coated",
      "Extended Release",
      "Ethyl Alcohol",
      "Iron",
      "Iron (Ferrous Sulfate)",
      "Hydrocortisone",
      "Bicarbonate",
      "Hydrochorothiazide",
      "Half Strength",
      "Isoniazid",
      "Potassium",
      "Long Acting",
      "Magnesium",
      "Milk of Magnesia",
      "Methotrexate",
      "Multivitamin",
      "Sodium",
      "Normal Saline",
      "Non-Steroidal Anti-Inflammatory Drug",
      "Nitroglycerin",
      "Oral Contraceptive",
      "Penicilin",
      "Propylthiouracil",
      "Sulfamethoxazole/Trimethoprim",
      "Sustained Release",
      "Triamcinolone",
      "Tetracycline",
      "Extended Release",
      "Zinc"
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
    this.textContent = "APAP";
  }
  if (this.textContent === callFor[1]) {
    this.textContent = "ASA";
  }
  if (this.textContent === callFor[2]) {
    this.textContent = "BC";
  }
  if (this.textContent === callFor[3]) {
    this.textContent = "Ca";
  }
  if (this.textContent === callFor[4]) {
    this.textContent = "CHF";
  }
  if (this.textContent === callFor[5]) {
    this.textContent = "Cod";
  }
  if (this.textContent === callFor[6]) {
    this.textContent = "CR";
  }
  if (this.textContent === callFor[7]) {
    this.textContent = "DM";
  }
  if (this.textContent === callFor[8]) {
    this.textContent = "Doxy";
  }
  if (this.textContent === callFor[9]) {
    this.textContent = "EC";
  }
  if (this.textContent === callFor[10]) {
    this.textContent = "ER";
  }
  if (this.textContent === callFor[11]) {
    this.textContent = "EtOH";
  }
  if (this.textContent === callFor[12]) {
    this.textContent = "Fe";
  }
  if (this.textContent === callFor[13]) {
    this.textContent = "FeSO4";
  }
  if (this.textContent === callFor[14]) {
    this.textContent = "HC";
  }
  if (this.textContent === callFor[15]) {
    this.textContent = "HCO3";
  }
  if (this.textContent === callFor[16]) {
    this.textContent = "HCTZ";
  }
  if (this.textContent === callFor[17]) {
    this.textContent = "HS";
  }
  if (this.textContent === callFor[18]) {
    this.textContent = "INH";
  }
  if (this.textContent === callFor[19]) {
    this.textContent = "K";
  }
  if (this.textContent === callFor[20]) {
    this.textContent = "LA";
  }
  if (this.textContent === callFor[21]) {
    this.textContent = "Mg";
  }
  if (this.textContent === callFor[22]) {
    this.textContent = "MOM";
  }
  if (this.textContent === callFor[23]) {
    this.textContent = "MTX";
  }
  if (this.textContent === callFor[24]) {
    this.textContent = "MVI";
  }
  if (this.textContent === callFor[25]) {
    this.textContent = "Na";
  }
  if (this.textContent === callFor[26]) {
    this.textContent = "NaCI/NS";
  }
  if (this.textContent === callFor[27]) {
    this.textContent = "NSAID";
  }
  if (this.textContent === callFor[28]) {
    this.textContent = "NTG";
  }
  if (this.textContent === callFor[29]) {
    this.textContent = "OC";
  }
  if (this.textContent === callFor[30]) {
    this.textContent = "PCN";
  }
  if (this.textContent === callFor[31]) {
    this.textContent = "PTU";
  }
  if (this.textContent === callFor[32]) {
    this.textContent = "SMZ/TMP";
  }
  if (this.textContent === callFor[33]) {
    this.textContent = "SR";
  }
  if (this.textContent === callFor[34]) {
    this.textContent = "TAC";
  }
  if (this.textContent === callFor[35]) {
    this.textContent = "TCN";
  }
  if (this.textContent === callFor[36]) {
    this.textContent = "XL, XR";
  }
  if (this.textContent === callFor[37]) {
    this.textContent = "Zn";
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