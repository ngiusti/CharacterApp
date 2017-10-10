$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});


function d20() {
    var x = Math.floor((Math.random() * 20) + 1);
    if (x > 9) {
        document.getElementById("D20").innerHTML = x;
    }
    else{
        document.getElementById("D20").innerHTML = "0" + x;
    }
}


function d12() {
    var x = Math.floor((Math.random() * 12) + 1);
    if (x > 9) {
        document.getElementById("D12").innerHTML = x;
    }
    else {
        document.getElementById("D12").innerHTML = "0" + x;
    }
}

function d10() {
    var x = Math.floor((Math.random() * 10) + 1);
    if (x > 9) {
        document.getElementById("D10").innerHTML = x;
    }
    else {
        document.getElementById("D10").innerHTML = "0" + x;
    }
}

function d8() {
    var x = Math.floor((Math.random() * 8) + 1);
    if (x > 9) {
        document.getElementById("D8").innerHTML = x;
    }
    else {
        document.getElementById("D8").innerHTML = "0" + x;
    }
}

function d6() {
    var x = Math.floor((Math.random() * 6) + 1);
    if (x > 9) {
        document.getElementById("D6").innerHTML = x;
    }
    else {
        document.getElementById("D6").innerHTML = "0" + x;
    }
}

function d4() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("D4").innerHTML = "0" + x;
    
}

function changeColor() {
    document.body.style.color = "purple";
    return false;
}