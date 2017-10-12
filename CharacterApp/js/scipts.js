﻿/*---Character Stats---*/

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



/*-----Button Rolls Start----------------*/

document.getElementById("str-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + throwCalculation(str);
};

document.getElementById("dex-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + throwCalculation(dex);
};

document.getElementById("wis-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + throwCalculation(wis);
};

document.getElementById("int-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + throwCalculation(int);
};

document.getElementById("cons-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + throwCalculation(cons);
};

document.getElementById("char-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + throwCalculation(char);
};

document.getElementById("inti-btn").onclick = function () {
    var x = roll();
    document.getElementById("attribute").innerHTML = x + inti;
};


function roll() {
    var x = Math.floor(Math.random() * 20 + 1);
    return x;
}

/*-----Button Rolls End----------------*/

function throwCalculation(x) {
    var stat = Math.floor((x - 10) / 2);
    return stat;
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

function levels() {
    
    var levels = [-1, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];

    for (var i = 0; i < levels.length; i++) {
        if (exp <= levels[i]) {
            curLvl = i;
            curLvlExp = levels[i];
            lvlPercent = (exp / curLvlExp * 100).toFixed(2);
            document.getElementById('lvl-percent').innerHTML = lvlPercent;
            document.getElementById("lvl-percent").style.width = lvlPercent + '%';
            document.getElementById('charLevel').innerHTML = "Level: " + curLvl;
            document.getElementById('experience').innerHTML = exp + "/" + curLvlExp;
            return;
        }     
    }   
    
}

document.getElementById("btn-50").onclick = function () { exp += 50; levels(); };
document.getElementById("btn-100").onclick = function () { exp = exp + 100; levels(); };
document.getElementById("btn-500").onclick = function () { exp = exp + 500; levels(); };
document.getElementById("btn-1000").onclick = function () { exp = exp + 1000; levels(); };



/* ---- Everything on load starts here. ----*/
$(document).ready(function () {
    charStats();
    levels();
});

