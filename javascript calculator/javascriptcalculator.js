
let fullExercise = document.getElementById("show-exercise");
let showCurrentNo = document.getElementById("show-result");
console.log("fullExercise", fullExercise);
console.log("showCurrentNo", showCurrentNo);
let exerciseResult = 0;
let didLastOperation = false;
let didEqual = false;
let inEqual = false;
let signUsed = false;
let theSignUsed = "";
let pressedCE = false;


let isSign = /\+|\-|\/|\*/;
let isDigitNotZero = /[1-9]/;
let toBeShown = /\d|\.|\+|\-|\/|\*/; /*regex for digit or dot or signs*/
let noOtherDot = /\.+/;
let noOtherSign = /[\+|\-|\/|\*]+$/;
let noOtherEqual = /\=+/;
let lastSign = /(\+|\-|\/|\*)(?=[^\+|\-|\/|\*]*$)/;
let lastFullNumber = /[^\+|\-|\/|\*]*$/
let endsWithSign = /(\+|\-|\/|\*)$/;
let includesAnySign = /\+|\-|\/|\+/;
let startsWithMinus = /^\-/  //for negative numbers






function typeExercise(pressed) {
    let newExercise = pressed;
    if ((fullExercise.children[0].innerHTML == "0") || (didEqual) || (fullExercise.children[0].innerHTML == "To many digits") || (noOtherEqual.test(fullExercise.children[0].innerHTML))) {
        fullExercise.children[0].innerHTML = newExercise;
        exerciseResult = newExercise;
    }
    else if (fullExercise.children[0].innerHTML.length < 24) {
        fullExercise.children[0].innerHTML += newExercise;
    }
    else {
        fullExercise.children[0].innerHTML = "To many digits";
        showCurrentNo.children[0].innerHTML = "0";
    };
};

function typeNumbers(pressed) {
    let newExercise = pressed;
    console.log("newExercise - pressed", newExercise);
    console.log("showCurrentNo.children[0].innerHTML before if", showCurrentNo.children[0].innerHTML);
    if ((showCurrentNo.children[0].innerHTML == "0") || (didEqual) || (signUsed) || (fullExercise.children[0].innerHTML == "To many digits")) {
        showCurrentNo.children[0].innerHTML = newExercise;
        console.log("showCurrentNo.children[0].innerHTML", showCurrentNo.children[0].innerHTML);
        typeExercise(pressed);
    }
    else if (showCurrentNo.children[0].innerHTML.length < 13) {
        showCurrentNo.children[0].innerHTML += newExercise;
        typeExercise(pressed);
    }
    else {
        fullExercise.children[0].innerHTML = "To many digits";
        showCurrentNo.children[0].innerHTML = "0";
    };
    signUsed = false;
};

function calculate(typedNumber, equalWasPressed) {
    let currentNumber = Number(typedNumber);
    let lastSignString = lastSign.exec(fullExercise.children[0].innerHTML);

    if ((lastSignString === null) || (startsWithMinus.test(fullExercise.children[0].innerHTML)) && (equalWasPressed == false)) {
        exerciseResult = currentNumber;
        console.log("result in was there a negative number", exerciseResult, "lastSignString is", lastSignString);
    }
    else {
        console.log("current number", currentNumber, "equalWasPressed", equalWasPressed, "lastSignString", lastSignString[0], "full exercise", fullExercise.children[0].innerHTML);
        if (lastSignString[0] == "+") {
            exerciseResult = exerciseResult + currentNumber;
        }
        else if (lastSignString[0] == "-") {
            exerciseResult = exerciseResult - currentNumber;
        }
        else if (lastSignString[0] == "*") {
            console.log("real result in multiply", exerciseResult);
            exerciseResult = exerciseResult * currentNumber;
        }
        else if (lastSignString[0] == "/") {
            exerciseResult = exerciseResult / currentNumber;
        }
        else {
            console.log("current number", currentNumber, "equalWasPressed", equalWasPressed, "lastSignString", lastSignString[0], "full exercise", fullExercise.children[0].innerHTML);
            exerciseResult = currentNumber;
        };
    };
    exerciseResult = Math.round(exerciseResult * 100) / 100;
    console.log("real result", exerciseResult);
    currentNumber = exerciseResult;

};


document.body.addEventListener("click", event => {
    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "AC")) {
        console.log("Clicked", event.target.textContent);
        showCurrentNo.children[0].innerHTML = 0;
        fullExercise.children[0].innerHTML = 0;
        exerciseResult = 0;
        didLastOperation = false;
        didEqual = false;
        inEqual = false;
        signUsed = false;
        theSignUsed = "";
        pressedCE = false;
    };


    if ((event.target.nodeName == "BUTTON") && (isDigitNotZero.test(event.target.textContent)) && ((didLastOperation !== true) || (pressedCE !== true))) {
        console.log("Clicked", event.target.textContent);
        typeNumbers(event.target.textContent);
        signUsed = false;
        pressedCE = false;
    };
    //digit 1-9 and 0 could be combined because the type numbers has if for 0
    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "0") && ((didLastOperation !== true) || (pressedCE !== true))) {
        console.log("Clicked", event.target.textContent);
        typeNumbers(event.target.textContent);
        signUsed = false;
        pressedCE = false;
    };

    /*
    SECOND PRESS ON CE RESETS THE CALCULATOR AND PREVENTS USING DIGITS AFTER CE ON OPERATORS
    CE works different and better than in the freecodecamp example - I can't figure out what it does
    in the example - its  buggy
    I chose to allow using CE only up to the last operation, because the logic in my alghoritm is to 
    update the result on the go (each time someone presses = or a sign). If I allow using more times CE
    I have to undo the operations.
    One can choose to update the result at the end of the exercise, but I chose not to do it that way 
(the example doesn't work to well in those cases as well);
    
    */
    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "CE")) {
        console.log("Clicked", event.target.textContent);
        let fullExerciseString = fullExercise.children[0].innerHTML;
        console.log("ends with sign", endsWithSign.test(fullExerciseString), fullExerciseString);
        if ((includesAnySign.test(fullExerciseString) == false) || (didEqual == true) || (pressedCE == true)) {
            console.log("doesn't include signs");
            console.log("didEqual", didEqual);
            showCurrentNo.children[0].innerHTML = 0;
            fullExercise.children[0].innerHTML = 0;
            exerciseResult = 0;
            didLastOperation = false;
            didEqual = false;
            inEqual = false;
            signUsed = false;
            theSignUsed = "";
            pressedCE = false;
        }

        else if (endsWithSign.test(fullExerciseString)) {
            fullExercise.children[0].innerHTML = fullExerciseString.slice(0, -1);
            showCurrentNo.children[0].innerHTML = "0";
            signUsed = false;
            didLastOperation = true;
            pressedCE = true;
        }

        else {
            let lastFullNumberString = lastFullNumber.exec(fullExerciseString);
            let lengthLastNumber = lastFullNumberString[0].length;
            console.log("lastFullNumberString", lastFullNumberString);
            console.log("-lengthLastNumber", -lengthLastNumber);
            fullExercise.children[0].innerHTML = fullExerciseString.slice(0, -lengthLastNumber);
            signUsed = true;
        }
    };

    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == ".") && ((didLastOperation !== true) || (pressedCE !== true))) {
        console.log("Clicked", event.target.textContent);
        console.log("is sign used in dot", signUsed);
        if (signUsed == false) {
            if (showCurrentNo.children[0].innerHTML.length < 13) {
                if (didEqual == true) {
                    showCurrentNo.children[0].innerHTML = String("0.");
                    fullExercise.children[0].innerHTML = String("0.");
                    signUsed = false;
                    didLastOperation = false;
                    inEqual = false;
                    didEqual = false;
                    theSignUsed = "";
                    pressedCE = false;
                    console.log("showCurrentNo.children[0].innerHTML when dot pressed", showCurrentNo.children[0].innerHTML);
                }

                else if (noOtherDot.test(showCurrentNo.children[0].innerHTML) == false) {
                    showCurrentNo.children[0].innerHTML += ".";
                    fullExercise.children[0].innerHTML += ".";
                };
            }
            else {
                fullExercise.children[0].innerHTML = "To many digits";
                showCurrentNo.children[0].innerHTML = "0";
            };
        }
        else {
            showCurrentNo.children[0].innerHTML = String("0.");
            fullExercise.children[0].innerHTML += "0.";
        }
        signUsed = false;
        pressedCE = false;
    };

    if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "=")) {
        if (signUsed == false) {
            if (showCurrentNo.children[0].innerHTML.length < 13) {

                if (noOtherEqual.test(fullExercise.children[0].innerHTML) == false) {
                    console.log("sign use in equal", signUsed);
                    console.log("final result of equal");
                    inEqual = true;
                    calculate(showCurrentNo.children[0].innerHTML, inEqual);
                    let testLength = fullExercise.children[0].innerHTML + "=" + exerciseResult;

                    if (testLength.length < 30) {
                        showCurrentNo.children[0].innerHTML = exerciseResult;
                        fullExercise.children[0].innerHTML += "=" + exerciseResult;
                    }
                    else {
                        fullExercise.children[0].innerHTML = "To many digits";
                        showCurrentNo.children[0].innerHTML = "0";
                    };
                    didEqual = true;
                    inEqual = false;

                };
            }
            else {
                fullExercise.children[0].innerHTML = "To many digits";
                showCurrentNo.children[0].innerHTML = "0";
            };
        };

        signUsed = false;
        didLastOperation = false;
        inEqual = false;
        signUsed = false;
        theSignUsed = "";
        pressedCE = false;

    };

    if ((event.target.nodeName == "BUTTON") && (isSign.test(event.target.textContent))) {
        console.log("sign used before", signUsed);
        if ((didEqual) && (exerciseResult < 999999999999999999999999)) {
            fullExercise.children[0].innerHTML = exerciseResult;
            console.log("didEqual when sign pressed", didEqual);
            //exerciseResult = 0;
        };
        didEqual = false;
        inEqual = false;
        let pressedSign = event.target.textContent;
        /*if ((signUsed == false) || (theSignUsed !== pressedSign)) {      - this is used if I want to allow operation change, not working as expected. the current implementation is 
            exaclty like in the example, you can't change the operation without pressing CE*/
        if (signUsed == false) {
            if ((showCurrentNo.children[0].innerHTML.length < 13) && (fullExercise.children[0].innerHTML !== "To many digits")) {

                if (noOtherSign.test(fullExercise.children[0].innerHTML) == false) {
                    console.log("no other sign right before", fullExercise.children[0].innerHTML);
                    console.log("didlastoperation", didLastOperation);

                    if (didLastOperation == false) {
                        console.log("test2");
                        calculate(showCurrentNo.children[0].innerHTML, inEqual);
                    }
                    else {
                        didLastOperation = true;
                    };
                    let testLength = fullExercise.children[0].innerHTML + event.target.textContent;
                    console.log("testLength.length", testLength.length);
                    if ((testLength.length < 30) && (exerciseResult < 999999999999999999999999)) {
                        fullExercise.children[0].innerHTML += event.target.textContent;
                    }
                    else {
                        fullExercise.children[0].innerHTML = "To many digits";
                        showCurrentNo.children[0].innerHTML = "0";
                    };
                };
                console.log("exercise result after sign pressed", exerciseResult);
                showCurrentNo.children[0].innerHTML = pressedSign;
            }
            else {
                fullExercise.children[0].innerHTML = "To many digits";
                showCurrentNo.children[0].innerHTML = "0";
            };
        };
        signUsed = true;
        theSignUsed = pressedSign;
        pressedCE = false;
    };
});







