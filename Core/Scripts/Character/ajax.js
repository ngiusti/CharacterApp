/*----- Adding spells with AJAX call ----*/
var spellCollections = [];
var charClass = "Cleric";
var charRace = "Dwarf";
var characterSpellList = "";
var classSpells = {};

function ajax() {

    $.ajax({
        type: "GET",
        url: "http://www.dnd5eapi.co/api/spells/",
        dataType: "JSON",
        success: function (msg) {         
            for (i = 0; i < msg.results.length; i++) {
                ajax2(msg.results[i], msg.results.length);
                
            }
            console.log(msg);
        },
        error: function (msg) {
            console.log("failed");
        }
    }); 

}

function ajax2(spell, spellCount) {
                    


    $.ajax({
        type: "GET",
        url: spell.url,
        dataType: "JSON",
        success: function (msg) {

            for (var i = 0; i < msg.classes.length; i++) {
                if (typeof classSpells[msg.classes[i].name] === "undefined") {
                    classSpells[msg.classes[i].name] = [];

                }
                classSpells[msg.classes[i].name].push({
                    name: spell.name,
                    desc: msg.desc[0],
                    level: msg.level
                });
                var list = classSpells[charClass];

                
            }

        },
        error: function (msg) {
            console.log("failed");
        }
    }); 

    

}

//function characterSpells(spellList) {
    
    
//    if (spellList === charClass) {
//        levelSpells(spellList);
        
//    }
//}

//function levelSpells(spellList) {

//    for (var i = 0; i < 9; i++) {
//        if (spellList.level === i) {
//            levelSpellList = "";
//            levelSpellList += "<li>" + spellList.name + " - " + spellList.desc + "</li>";
//            document.getElementById('spell' + i).innerHTML += levelSpellList;
//        }
//    }


//}

