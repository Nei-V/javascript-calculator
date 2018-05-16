function test() {
    let fullExercise = document.getElementById("show-exercise").children[0].innerHTML;
    console.log(fullExercise);


    let result = 0;
    // document.getElementById("show-result").innerHTML=0;
    document.getElementById("testing").innerHTML = "TEST OK";
};

function typeExercise(pressed) {
    let newExercise = pressed;
    if (document.getElementById("show-exercise").children[0].innerHTML == 0) {
        document.getElementById("show-exercise").children[0].innerHTML = newExercise;
    }
    else if (document.getElementById("show-exercise").children[0].innerHTML.length < 31) {
        document.getElementById("show-exercise").children[0].innerHTML += newExercise;
    }
    else {
        alert("not enough space")
    };
};

/*adding click event to digits and dot or signs - for shown line*/
document.body.addEventListener("click", event => {
    let toBeShown = /\d|\.|\+|\-|\/|\*/ /*regex for digit or dot or signs*/
console.log(toBeShown);
if ((event.target.nodeName == "BUTTON") && (toBeShown.test(event.target.textContent))) {
    console.log("Clicked", event.target.textContent);
    typeExercise(event.target.textContent);
}
});

function typeNumbers(pressed) {
    let newExercise = pressed;
    if (document.getElementById("show-result").children[0].innerHTML == 0) {
        document.getElementById("show-result").children[0].innerHTML = newExercise;
    }
    else if (document.getElementById("show-result").children[0].innerHTML.length < 20) {
        document.getElementById("show-result").children[0].innerHTML += newExercise;
    }
    else {
        alert("not enough space")
    };
};

/*adding click event to digits and dot for result screen*/
document.body.addEventListener("click", event => {
    let toBeShown = /\d|\./ /*regex for digit or dot */
    console.log(toBeShown);
    if ((event.target.nodeName == "BUTTON") && (toBeShown.test(event.target.textContent))) {
        console.log("Clicked", event.target.textContent);
        typeNumbers(event.target.textContent);
    }
});


test();