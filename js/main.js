/* ###################
   #  THE VARIABLES  #
   ################### */

let slaves = 0;
let slaveMultiplier = 1;

let gold = 0;
let cats = 0;
let ankhs = 0;

/*  =====================
    TOGGLE TEST VARIABLES
    ===================== */

function testVariables() {
  slaves=gold=cats=ankhs = 1000000000000000;
}

//testVariables(); // <--- UNCOMMENT FOR TESTING

let tickLength = 2000;

// THOTH VARIABLES
let scribesBought = 1; // Separated by bought and Anubis to manage cost of element. Cost of upgrade is based on actual purchases, not free ones.
let scribesAnubis = 0;
let scribes = scribesBought + scribesAnubis;
let costScribe = 10;
let isAutoScribe = false;

let scribeSchoolBought = 0;
let scribeSchoolAnubis = 0;
let scribeSchool = scribeSchoolBought + scribeSchoolAnubis;
let costScribeSchool = 100;
let isAutoScribeSchool = false;

let libraryBought = 0;
let libraryAnubis = 0;
let library = libraryBought + libraryAnubis;
let costLibrary = 1000;
let isAutoLibrary = false;

// AMON-RA VARIABLES
let priests = 0;
let costPriests = 500;
let isAutoPriests = false;

let temples = 0;
let costTemples = 1000;
let isAutoTemples = false;

let festivals = 0;
let costFestivals = 2500;
let isAutoFestivals = false;


// Setting the timer to run, and what to run every tick
function timer() {
  slaves += 1 * slaveMultiplier;
  // Auto Scribes (if enabled)
  if (isAutoScribe === true) {
    workScribe();
  }
  // Auto Scribe School (if enabled)
  if (isAutoScribeSchool === true) {
    workScribeSchool();
  }

  // Auto Library (if enabled)
  if (isAutoLibrary === true) {
    workLibrary();
  }
  // Auto Priests (if enabled)
  if (isAutoPriests === true) {
    workPriests();
  }
  // Auto Temples (if enabled)
  if (isAutoTemples === true) {
    workTemples();
  }

  // Auto Festivals (if enabled)
  if (isAutoFestivals === true) {
    workFestivals();
  }
  //console.log(slaves);
  update();
}

setInterval(timer, tickLength);

// Refresh the amounts of resources displayed
function update() {
  document.getElementById("slaves").innerText = "Slaves: " + slaves;
  document.getElementById("gold").innerText = "Gold: " + gold;
  document.getElementById("cats").innerText = "Cats: " + cats;
  document.getElementById("ankhs").innerText = "Ankhs: " + ankhs;
  //console.log(slaves);
  //console.log(gold);

  // Need to update machine totals before printing
  updateTotalMachines();

  // Thoth update:
  document.getElementById("scribes").innerText = "Scribes: " + scribes;
  document.getElementById("scribeSchool").innerText = "Scribe Schools: " + scribeSchool;
  document.getElementById("library").innerText = "Libraries: " + library;

  // Amon-Ra update:
  document.getElementById("priests").innerText = "Priests: " + priests;
  document.getElementById("temples").innerText = "Temples: " + temples;
  document.getElementById("festivals").innerText = "Festivals: " + festivals;
}

// Update totals of variable from components
function updateTotalMachines() {
  scribes = scribesBought + scribesAnubis;
  scribeSchool = scribeSchoolBought + scribeSchoolAnubis;
  library = libraryBought + libraryAnubis;
}

/*
#########################
# Thoth chain functions #
#   Separate JS file?   #
#########################
*/

/* =======
   SCRIBES
   ======= */

// Scribe generates gold
function workScribe() {
  gold += 1 * scribes;
  update();
}

// Buy scribes
function buyScribe() {
  if (slaves >= 1) {
    if (gold >= costScribe) {
      slaves -= 1;
      gold -= 1 * costScribe; // Currently have the 1 in to swap later for multiple purchase option
      scribesBought += 1;
      costScribe = 10 * Math.pow(1.05, scribesBought);
      costScribe = Math.ceil(costScribe);
      document.getElementById("scribeBuyBtn").innerText =
        "Buy 1 (" + costScribe + " gold and 1 slave)";
      update();
    }
  }
}

// Enable automated scribes
function autoScribes() {
  if (isAutoScribe === false) {
    if (gold >= 100) {
      isAutoScribe = true;
      gold -= 100;
      document.getElementById("scribeAutomateBtn").innerText = "Automated";
      update();
    }
  }
}

/* =============
   SCRIBE SCHOOL
   ============= */

// Scribe School generates gold
function workScribeSchool() {
  gold += 10 * scribeSchool;
  update();
}

// Buy Scribe Schools
function buyScribeSchool() {
  if (slaves >= 5) {
    if (gold >= costScribeSchool) {
      slaves -= 5;
      gold -= 1 * costScribeSchool;
      scribeSchoolBought += 1;
      costScribeSchool = 100 * Math.pow(1.1, scribeSchoolBought);
      costScribeSchool = Math.ceil(costScribeSchool);
      document.getElementById("scribeSchoolBuyBtn").innerText =
        "Buy 1 (" + costScribeSchool + " gold and 5 slaves)";
      update();
    }
  }
}

// Enable automated Scribe Schools
function autoScribeSchool() {
  if (isAutoScribeSchool === false) {
    if (gold >= 10000) {
      isAutoScribeSchool = true;
      gold -= 10000;
      document.getElementById("scribeSchoolAutomateBtn").innerText = "Automated";
      update();
    }
  }
}

/* =======
   LIBRARY
   ======= */

// Library generates gold
function workLibrary() {
  gold += 125 * library;
  update();
}

// Buy Library
function buyLibrary() {
  if (slaves >= 20) {
    if (gold >= costLibrary) {
      slaves -= 20;
      gold -= 1 * costLibrary;
      libraryBought += 1;
      costLibrary = 1000 * Math.pow(1.09, libraryBought);
      costLibrary = Math.ceil(costLibrary);
      document.getElementById("libraryBuyBtn").innerText =
        "Buy 1 (" + costLibrary + " gold and 20 slaves)";
      update();
    }
  }
}

// Enable automated Library
function autoLibrary() {
  if (isAutoLibrary === false) {
    if (gold >= 1000000) {
      isAutoLibrary = true;
      gold -= 1000000;
      document.getElementById("libraryAutomateBtn").innerText = "Automated";
      update();
    }
  }
}

/*
###########################
# Amon-Ra chain functions #
#    Separate JS file?    #
###########################
*/

/* =======
   PRIESTS
   ======= */

// Priest generates ankhs
function workPriests() {
  ankhs += 1 * priests;
  update();
}

// Buy priests
function buyPriests() {
  if (slaves >= 15) {
    if (gold >= costPriests) {
      slaves -= 15;
      gold -= 1 * costPriests; // Currently have the 1 in to swap later for multiple purchase option
      priests += 1;
      costPriests = 10 * Math.pow(1.08, priests);
      costPriests = Math.ceil(costPriests);
      document.getElementById("priestsBuyBtn").innerText =
        "Buy 1 (" + costPriests + " gold and 15 slaves)";
      update();
    }
  }
}

// Enable automated priests
function autoPriests() {
  if (isAutoPriests === false) {
    if (gold >= 100000) {
      isAutoPriests = true;
      gold -= 100000;
      document.getElementById("priestsAutomateBtn").innerText = "Automated";
      update();
    }
  }
}

/* =======
   TEMPLES
   ======= */

// Temples generates ankhs
function workTemples() {
  ankhs += 20 * temples;
  update();
}

// Buy Temples
function buyTemples() {
  if (slaves >= 25) {
    if (gold >= costTemples) {
      slaves -= 25;
      gold -= 1 * costTemples;
      temples += 1;
      costTemples = 1000 * Math.pow(1.07, temples);
      costTemples = Math.ceil(costTemples);
      document.getElementById("templesBuyBtn").innerText =
        "Buy 1 (" + costTemples + " gold and 25 slaves)";
      update();
    }
  }
}

// Enable automated Temples
function autoTemples() {
  if (isAutoTemples === false) {
    if (gold >= 10000000) {
      isAutoTemples = true;
      gold -= 10000000;
      document.getElementById("templesAutomateBtn").innerText = "Automated";
      update();
    }
  }
}

/* =========
   FESTIVALS
   ========= */

// Festivals generate Ankhs
function workFestivals() {
  ankhs += 100 * festivals;
  update();
}

// Buy Festivals
function buyFestivals() {
  if (slaves >= 50) {
    if (gold >= costFestivals) {
      slaves -= 50;
      gold -= 1 * costFestivals;
      festivals += 1;
      costFestivals = 2500 * Math.pow(1.06, festivals);
      costFestivals = Math.ceil(costFestivals);
      document.getElementById("festivalsBuyBtn").innerText =
        "Buy 1 (" + costFestivals + " gold and 50 slaves)";
      update();
    }
  }
}

// Enable automated Festivals
function autoFestivals() {
  if (isAutoFestivals === false) {
    if (gold >= 10000000000) {
      isAutoFestivals = true;
      gold -= 10000000000;
      document.getElementById("festivalsAutomateBtn").innerText = "Automated";
      update();
    }
  }
}