function test() {
    let fullExercise = document.getElementById("show-exercise").children[0].innerHTML;
    console.log(fullExercise);


    let result = 0;
    // document.getElementById("show-result").innerHTML=0;
    document.getElementById("testing").innerHTML = "TEST OK";
};

test();

let signUsed = false;
let isSign = /\+|\-|\/|\*/;
let isDigitNotZero = /[1-9]/;
let toBeShown = /\d|\.|\+|\-|\/|\*/; /*regex for digit or dot or signs*/
let noOtherDot = /\.+/;






function typeExercise(pressed) {
    let newExercise = pressed;
    if (document.getElementById("show-exercise").children[0].innerHTML == "0") {
        document.getElementById("show-exercise").children[0].innerHTML = newExercise;
    }
    else if (document.getElementById("show-exercise").children[0].innerHTML.length < 31) {
        document.getElementById("show-exercise").children[0].innerHTML += newExercise;
    }
    else {
        alert("not enough space");
    };
};

function typeNumbers(pressed) {
    let newExercise = pressed;
    if ((document.getElementById("show-result").children[0].innerHTML == "0") || (signUsed)) {
        document.getElementById("show-result").children[0].innerHTML = newExercise;
        typeExercise(pressed);
    }
    else if (document.getElementById("show-result").children[0].innerHTML.length < 20) {
        document.getElementById("show-result").children[0].innerHTML += newExercise;
        typeExercise(pressed);
    }
    else {
        alert("not enough space");
    };
};


document.body.addEventListener("click", event => {
    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "AC")) {
        console.log("Clicked", event.target.textContent);
        document.getElementById("show-result").children[0].innerHTML = 0;
        document.getElementById("show-exercise").children[0].innerHTML = 0;
        signUsed = false;
    };
    if ((event.target.nodeName == "BUTTON") && (isDigitNotZero.test(event.target.textContent))) {
        console.log("Clicked", event.target.textContent);
        //typeExercise(event.target.textContent);
        typeNumbers(event.target.textContent);
        signUsed = false;
    };
    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "0")) {
        console.log("Clicked", event.target.textContent);
        //typeExercise(event.target.textContent);
        typeNumbers(event.target.textContent);
        signUsed = false;
    };
    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == ".")) {
        console.log("Clicked", event.target.textContent);
        if (signUsed == false) {
            if (document.getElementById("show-result").children[0].innerHTML.length < 20) {
                
                if (noOtherDot.test(document.getElementById("show-result").children[0].innerHTML) == false) {
                    document.getElementById("show-result").children[0].innerHTML += ".";
                    document.getElementById("show-exercise").children[0].innerHTML += ".";
                };
            }
            else {
                alert("not enough space");
            };
        };


        //typeNumbers(event.target.textContent);
        signUsed = false;
    };










});









/*adding click event to digits and dot or signs - for shown line
document.body.addEventListener("click", event => {
    console.log(signUsed);


    console.log(toBeShown);
    if ((event.target.nodeName == "BUTTON") && (toBeShown.test(event.target.textContent))) {
        console.log("Clicked", event.target.textContent);
        if isSign.test(event.target.textContent){
            signUsed = true;
        };
        if (signUsed == false) {
            typeExercise(event.target.textContent);
        }
        else {

        }
        

    };

});



adding click event to digits and dot for result screen
document.body.addEventListener("click", event => {
    let toBeShown = /\d|\./ ----->regex for digit or dot 
    console.log(toBeShown);
    if ((event.target.nodeName == "BUTTON") && (toBeShown.test(event.target.textContent))) {
        console.log("Clicked", event.target.textContent);
        typeNumbers(event.target.textContent);
    };
});


*/