/*---Character Stats---*/

var str = 12;
var dex = 16;
var wis = 13;
var int = 12;
var char = 15;
var cons = 14;
var arm = 17;
var spd = 20;
var inti = throwCalculation(dex);
var scm = throwCalculation(wis);
var exp = 0;
var skillPoints = 0;
var levelValues = [-1, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
var newLvl = 0;
var health = healthFunction(cons);
var hp = health;
var featPoints = 0;
var copperInventory = 0;
var silverInventory = 0;
var goldInventory = 0;
var platinumInventory = 0;
var moneyInventory = [copperInventory, silverInventory, goldInventory, platinumInventory];
var moneyHolder = 0;
var height = "4ft 3in";
var weight = "240lbs";
var sex = "Male";
var age = 122;
var cognative = "Bookworm";
var corporeal = "Clumsy";
var social = "Charismatic";
var lifestyle = "Kleptomaniac";

/*---Character Stats---*/


$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});


function d20() {
    var x = Math.floor(Math.random() * 20 + 1);
    if (x > 9) {
        document.getElementById("D20").innerHTML = x;
    }
    else{
        document.getElementById("D20").innerHTML = "0" + x;
    }
}


function d12() {
    var x = Math.floor(Math.random() * 12 + 1);
    if (x > 9) {
        document.getElementById("D12").innerHTML = x;
    }
    else {
        document.getElementById("D12").innerHTML = "0" + x;
    }
}

function d10() {
    var x = Math.floor(Math.random() * 10 + 1);
    if (x > 9) {
        document.getElementById("D10").innerHTML = x;
    }
    else {
        document.getElementById("D10").innerHTML = "0" + x;
    }
}

function d8() {
    var x = Math.floor(Math.random() * 8 + 1);
    document.getElementById("D8").innerHTML = x;
}

function d6() {
    var x = Math.floor(Math.random() * 6 + 1);
    document.getElementById("D6").innerHTML = "0" + x;
}

function d4() {
    var x = Math.floor(Math.random() * 4 + 1);
    document.getElementById("D4").innerHTML = "0" + x;
    
}


/*--------Characteristics-------*/
function characteristics() {
    document.getElementById("height").innerHTML = "<strong>Height: </strong>" + height;
    document.getElementById("weight").innerHTML = "<strong>Weight: </strong>" + weight;
    document.getElementById("age").innerHTML = "<strong>Age: </strong>" + age;
    document.getElementById("sex").innerHTML = "<strong>Sex: </strong>" + sex;
    document.getElementById("mental").innerHTML = "<strong>Cognative: </strong>" + cognative;
    document.getElementById("physical").innerHTML = "<strong>Corporeal: </strong>" + corporeal;
    document.getElementById("social").innerHTML = "<strong>Social: </strong>" + social;
    document.getElementById("lifestyle").innerHTML = "<strong>Lifestyle: </strong>" + lifestyle;

}


/*--------Characteristics end-------*/

/*-----Button Rolls Start----------------*/

document.getElementById("str-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + throwCalculation(str);
    }};

document.getElementById("dex-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + throwCalculation(dex);
    }};

document.getElementById("wis-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + throwCalculation(wis);
    }};

document.getElementById("int-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + throwCalculation(int);
    }};

document.getElementById("cons-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + throwCalculation(cons);
    }};

document.getElementById("char-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + throwCalculation(char);
    }};

document.getElementById("inti-btn").onclick = function () {
    var x = roll();
    if (x === 1) {
        rollOne();
    }
    else {
        document.getElementById("attribute").innerHTML = x + inti;
    }

};

function rollOne() {
    document.getElementById("attribute").innerHTML = x;
    document.getElementById("attribute").style.background = "black";
    document.getElementById("attribute").style.color = "white";

}


function roll() {
    document.getElementById("attribute").style.background = "white";
    document.getElementById("attribute").style.color = "black";
    var x = Math.floor(Math.random() * 20 + 1);
    return x;
}


document.getElementById("hpUp").onclick = function () {
    if (hp < health) {
        hp += 1;
        document.getElementById("health").innerHTML = "HP: " + hp + "/" + health;
    }
};
document.getElementById("hpDown").onclick = function () {
    if (hp > 0) {
        hp -= 1;
        document.getElementById("health").innerHTML = "HP: " + hp + "/" + health;
    }
    else if (hp === 0) {
        document.getElementById("health").innerHTML = "DEAD";
    }
};

/*-----Button Rolls End----------------*/


/*-----Character Stats fucntions----*/
function throwCalculation(x) {
    var stat = Math.floor((x - 10) / 2);
    return stat;
}

function healthFunction(x) {
    var healthCalc = 8 + x;
    return healthCalc;
}



function charisma() {
    document.getElementById("char-base").innerHTML = char;
    savingThrow = throwCalculation(char);
    document.getElementById("char-throw").innerHTML = "+" + savingThrow;
}

function constitution() {
    document.getElementById("cons-base").innerHTML = cons;
    savingThrow = throwCalculation(cons);
    document.getElementById("cons-throw").innerHTML = "+" + savingThrow;
}

function strength() {
    document.getElementById("str-base").innerHTML = str;
    savingThrow = throwCalculation(str);
    document.getElementById("str-throw").innerHTML = "+" + savingThrow;
}

function intelligence() {
    document.getElementById("int-base").innerHTML = int;
    savingThrow = throwCalculation(int);
    document.getElementById("int-throw").innerHTML = "+" + savingThrow;
}

function wisdom() {
    document.getElementById("wis-base").innerHTML = wis;
    savingThrow = throwCalculation(wis);
    document.getElementById("wis-throw").innerHTML = "+" + savingThrow;
}

function dexterity() {
    document.getElementById("dex-base").innerHTML = dex;
    savingThrow = throwCalculation(dex);
    document.getElementById("dex-throw").innerHTML = "+" + savingThrow;
}

function intiative() {
    document.getElementById("inti-base").innerHTML = inti;
}

function armor() {
    document.getElementById("arm-base").innerHTML = arm;
}

function speed() {
    document.getElementById("speed-base").innerHTML = spd;
}

function charStats() {
    charisma();
    dexterity();
    wisdom();
    intelligence();
    strength();
    constitution();
    intiative();
    armor();
    speed();
}

/*-----Character Stats fucntions END ----*/


/*-----Character Level ----*/
function levels(newLvl) {
    
    for (var i = 0; i < levelValues.length; i++) {
        if (exp <= levelValues[i]) {
            curLvl = i;
            curLvlExp = levelValues[i];
            lvlPercent = (exp / curLvlExp * 100).toFixed(2);
            levelDisplay(lvlPercent, curLvl, curLvlExp);

            if (newLvl !== curLvl) {
                levelUp(curLvl);
            }
            return;
        
        }
    }

    
}


function levelDisplay(lvlPercent, curLvl, curLvlExp) {
    document.getElementById('lvl-percent').innerHTML = lvlPercent + '%';
    document.getElementById("lvl-percent").style.width = lvlPercent + '%';
    document.getElementById('charLevel').innerHTML = "Level: " + curLvl;
    document.getElementById('experience').innerHTML = exp + "/" + curLvlExp;
}

function levelUp(curLvl) {

    if (curLvl % 4 === 0) {
        console.log('feat?');
        featPoints += 1;
        console.log(featPoints);
        health += 5 + throwCalculation(cons);
        hp = health;
    }
    else if (curLvl > 1){
        skillPoints += 1;
        health += 5 + throwCalculation(cons);
        hp = health;
        enableBtn();        
    }
    document.getElementById("health").innerHTML = "HP: " + hp + "/" + health;
    document.getElementById("skillPoints").innerHTML = skillPoints;
    document.getElementById("featPoints").innerHTML = featPoints;
}

function transferFeatPoints() {

    if (featPoints > 0) {
        featPoints -= 1;
        skillPoints += 2;
    }
    enableBtn();
    document.getElementById("skillPoints").innerHTML = skillPoints;
    document.getElementById("featPoints").innerHTML = featPoints;   
}

document.getElementById("featTrans").onclick = function () { transferFeatPoints(); };



document.getElementById("btn-50").onclick = function () { exp += 50; newLvl = curLvl; levels(newLvl); };
document.getElementById("btn-100").onclick = function () { exp = exp + 100; newLvl = curLvl; levels(newLvl); };
document.getElementById("btn-500").onclick = function () { exp = exp + 500; newLvl = curLvl; levels(newLvl); };
document.getElementById("btn-1000").onclick = function () { exp = exp + 1000; newLvl = curLvl; levels(newLvl); };

/*-----Character Level END----*/


/*-------lvl up section-----*/
document.getElementById("strSP").onclick = function () { str += 1; addSkillPoint(); };
document.getElementById("dexSP").onclick = function () { dex += 1; addSkillPoint(); };
document.getElementById("consSP").onclick = function () { cons += 1; addSkillPoint(); };
document.getElementById("charSP").onclick = function () { char += 1; addSkillPoint(); };
document.getElementById("wisSP").onclick = function () { wis += 1; addSkillPoint(); };
document.getElementById("intSP").onclick = function () { int += 1; addSkillPoint(); };



function addSkillPoint() {

    if (skillPoints > 0) {

        skillPoints -= 1;
        charStats();
        document.getElementById("skillPoints").innerHTML = skillPoints;
        disableBtn();
    }

}

function enableBtn() {
    document.getElementById("strSP").disabled = false;
    document.getElementById("dexSP").disabled = false;
    document.getElementById("intSP").disabled = false;
    document.getElementById("wisSP").disabled = false;
    document.getElementById("consSP").disabled = false;
    document.getElementById("charSP").disabled = false;

}

function disableBtn(){
    if (skillPoints === 0) {
        document.getElementById("strSP").disabled = true;
        document.getElementById("dexSP").disabled = true;
        document.getElementById("intSP").disabled = true;
        document.getElementById("wisSP").disabled = true;
        document.getElementById("consSP").disabled = true;
        document.getElementById("charSP").disabled = true;
    }
    return;
}

/*-------lvl up section END-----*/

/*-----Money Section---*/

function initMoney() {
    document.getElementById("copper").innerHTML = moneyInventory[0];
    document.getElementById("silver").innerHTML = moneyInventory[1];
    document.getElementById("gold").innerHTML = moneyInventory[2];
    document.getElementById("platinum").innerHTML = moneyInventory[3];

}

function ifIsNaN(value) {
    if (isNaN(value)) {
        return 0;
    }
    return value;
}

function updateMoneyInventories() {
    document.getElementById("copper").innerHTML = moneyInventory[0];
    document.getElementById("silver").innerHTML = moneyInventory[1];
    document.getElementById("gold").innerHTML = moneyInventory[2];
    document.getElementById("platinum").innerHTML = moneyInventory[3];
}

/* Addition Section */
function addMoney(value) {
    var digits = [];
    while (value > 0) {
        digits[digits.length] = value % 10;
        value = parseInt(value / 10);
    }
    for (var i = 0; i <= 2; i++) {
        moneyInventory[i] += ifIsNaN(digits[i]);
    }
    for ( i = 3; i < digits.length; i++) {
        var multipler = Math.pow(10, i - 3);
        moneyInventory[3] += digits[i] * multipler;
    }
    upChainInventory();
    updateMoneyInventories();
}

function upChainInventory() {
    for (var i = 0; i < 3; i++) {
        if (moneyInventory[i] > 9) {
            moneyInventory[i+1] += Math.floor(moneyInventory[i] / 10);
            moneyInventory[i] = moneyInventory[i] % 10;
        }
    }
    
}

function addCopper() {
    var value = parseInt(document.getElementById("copperValue").value);
    var copperValue = addMoney(value);
}
function addSilver() {
    var value = parseInt(document.getElementById("silverValue").value) * 10;
    var silverValue = addMoney(value);
}

function addGold() {
    var value = parseInt(document.getElementById("goldValue").value) * 100;
    var goldValue = addMoney(value);
}

function addPlatinum() {
    var value = parseInt(document.getElementById("platinumValue").value) * 1000;
    var platinumValue = addMoney(value);
}

/* Subtract section */
function subCopper() {
    var value = parseInt(document.getElementById("copperValue").value);
    var copperValue = subMoney(value);
}
function subSilver() {
    var value = parseInt(document.getElementById("silverValue").value) * 10;
    var silverValue = subMoney(value);
}

function subGold() {
    var value = parseInt(document.getElementById("goldValue").value) * 100;
    var goldValue = subMoney(value);
}

function subPlatinum() {
    var value = parseInt(document.getElementById("platinumValue").value) * 1000;
    var platinumValue = subMoney(value);
}


function subMoney(value) {
    var digits = [];
    while (value > 0) {
        digits[digits.length] = value % 10;
        value = parseInt(value / 10);
    }
    for (var i = 0; i <= 2; i++) {
        moneyInventory[i] -= ifIsNaN(digits[i]);
    }
    for (i = 3; i < digits.length; i++) {
        var multipler = Math.pow(10, i - 3);
        moneyInventory[3] -= digits[i] * multipler;
    }
    downChainInventory(value);
    updateMoneyInventories();
}
// Needs work here!===============================================
function downChainInventory(value) {
    for (var i = 0; i < 3; i++) {
        if (moneyInventory[i] > 0) {
            moneyInventory[i - 1] += 10 * value;
        } 
    }

}
/*-----Money Section END---*/


switch (charClass) {
    case 'Rogue':
        console.log('you are a rogue');
        break;
    case 'Cleric':
        console.log('you are a cleric');
        document.getElementById("body").style.background = "#f0fc81 ";
        break;
    case 'Paladin':
        console.log('you are a paladin');
        document.getElementById("body").style.color = "red";

        break;
    default:
        console.log('I dont know what you are');
}

/* ---- Everything on load starts here. ----*/
$(document).ready(function () {
    charStats();
    levels();
    ajax();
    initMoney();
    characteristics();
});

