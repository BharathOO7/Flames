let coupleName1 = document.querySelector(".couple1");
let coupleName2 = document.querySelector(".couple2");
let calculate = document.querySelector(".calculate");
let coupleN1 = [];
let coupleN2 = [];
let removedCharacters = 0;
let totalCharacters = 0;
let maxCharacters = 0;
let minCharacters = 0;
let remainingCharacters = 0;
let relationshipPercentage = 0;
let relationshipResult = "";
const relationshipPercent = document.createElement("p");
const relationship = document.createElement("p");
relationshipPercent.className = "miniHeading percentage";
relationship.className = "miniHeading";

function removeDuplicates() {
    removedCharacters = 0;
    totalCharacters = coupleN1.length + coupleN2.length;
    maxCharacters = (coupleN1.length >= coupleN2.length) ? coupleN1.length : coupleN2.length;
    minCharacters = totalCharacters - maxCharacters;
    for (let i = 0; i < coupleN1.length; i++) {
        for (let j = 0; j < coupleN2.length; j++) {
            if (coupleN1[i] == " " || coupleN2[j] == " ")
                continue;
            if (coupleN1[i] == coupleN2[j]) {
                coupleN1 = coupleN1.replace(coupleN1[i], " ");
                coupleN2 = coupleN2.replace(coupleN2[j], " ");
                removedCharacters++;
            }
        }
    }
    remainingCharacters = totalCharacters - removedCharacters;
    relationshipPercentage = (minCharacters / maxCharacters) * 100;
    relationshipPercent.innerText = `Relationship strength: ${relationshipPercentage.toFixed(2)}%`;
    document.querySelector(".result").appendChild(relationshipPercent);
}

function FLAMES() {
    let FLAMES = "FLAMES";
    let totalPosition = 0;
    let position = 0;
    while (FLAMES.length > 1) {
        for (totalPosition = remainingCharacters; ;) {
            totalPosition--;
            position++;
            if (position >= FLAMES.length) {
                position = 0;
            }
            if (totalPosition === 0) {
                FLAMES = FLAMES.replace(FLAMES[position], "");
                break;
            }
        }
    }
    switch (FLAMES[0]) {
        case 'F':
            relationshipResult = "Friends";
            break;
        case 'L':
            relationshipResult = "Love";
            break;
        case 'A':
            relationshipResult = "Affection";
            break;
        case 'M':
            relationshipResult = "Marriage";
            break;
        case 'E':
            relationshipResult = "Enemy";
            break;
        case 'S':
            relationshipResult = "Sister";
            break;
    }
    relationship.innerText = `Your relationship status: ${relationshipResult}`;
    document.querySelector(".result").appendChild(relationship);
}


calculate.addEventListener("click", () => {
    coupleN1 = coupleName1.value.replace(/ /g, "").toLowerCase();
    coupleN2 = coupleName2.value.replace(/ /g, "").toLowerCase();
    if (coupleN1 === coupleN2) {
        relationship.innerText = `You are the same person!`;
        relationship.className = "miniHeading";
        document.querySelector(".result").appendChild(relationship);
        if (document.querySelector(".percentage")) {
            document.querySelector(".percentage").remove();
        }
    }
    else if (coupleN1.length + coupleN2.length !== 0) {
        removeDuplicates();
        FLAMES();
    }
});

