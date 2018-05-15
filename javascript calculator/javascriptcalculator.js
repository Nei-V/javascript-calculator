function test() {
    let fullExercise = document.getElementById("show-exercise").children[0].innerHTML;
    console.log(fullExercise);


    let result = 0;
    // document.getElementById("show-result").innerHTML=0;
    document.getElementById("testing").innerHTML = "TEST OK";
};

function typeExercise() {
    let newExercise = "1";
    if (document.getElementById("show-exercise").children[0].innerHTML==0){
        document.getElementById("show-exercise").children[0].innerHTML = newExercise;   
    }
    else if (document.getElementById("show-exercise").children[0].innerHTML.length < 33) {
        document.getElementById("show-exercise").children[0].innerHTML += newExercise;
    }
    else {
        alert("not enough space")
    };
};

test();