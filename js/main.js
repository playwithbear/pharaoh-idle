/* =============
   THE VARIABLES
   ============= */
var slaves = 0;
var slaveMultiplier = 1;

var gold = 0;
var cats = 0;
var ankhs = 0; 

function testVariables() {
    slaves = 10000000;
    gold = 10000000;
    cats = 10000000;
    ankhs = 10000000;
}

/*  #############################################
                TOGGLE TEST VARIABLES
    ############################################# */

testVariables(); // <--- UNCOMMENT FOR TESTING

var tickLength = 2000;

var scribesBought = 1; // Separated by bought and Anubis to manage cost of element. Cost of upgrade is based on actual purchases, not free ones.
var scribesAnubis = 0;
var scribes = scribesBought + scribesAnubis;
var costScribe = 10;
var isAutoScribe = false;

var scribeSchoolBought = 0;
var scribeSchoolAnubis = 0;
var scribeSchool = scribeSchoolBought + scribeSchoolAnubis;
var costScribeSchool = 100;
var isAutoScribeSchool = false;

var libraryBought = 0;
var libraryAnubis = 0;
var library = libraryBought + libraryAnubis;
var costLibrary = 1000;
var isAutoLibrary = false;


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

    document.getElementById("scribes").innerText = "Scribes: " + scribes;
    document.getElementById("scribeSchool").innerText =
    "Scribe Schools: " + scribeSchool;
    document.getElementById("library").innerText =
    "Libraries: " + library;
    // console.log(libraryBought)
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
        costScribeSchool = 1000 * Math.pow(1.1, scribeSchoolBought);
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