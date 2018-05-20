1. Semantic elements in HTML5

2. CSS grid +  naming areas
example #calc-board and then build classes for the grid areas and apply them in HTML 
naming two areas next to each other with the same name joins them. (like equal or zero in this example);

3. CSS selectors

4. CSS shadows (box-shadow:)
More shadows can be added separated by commas, 
using "inset" for shadows in the object
like in button:hover

5. CSS:hover + shadows

6. CSS text-align has to be used with width 100% and without display:inline

7. Some usage of color themes
using this site https://coolors.co to test them.

8. You can use border:transparent with border-width:0.5px and border-radius - and border shadow to get nice spacial effects. 

9. using align-content:center in parent element (like body in this example) with margin:auto in child elements (like #calculatorframe) to center the child element.

10. using margin-bottom:-10px sometimes help with colapsing margins

11. using letter-spacing: with some size to space letters in an element like a paragraph 

12. better understanding of regex:

let endsWithSign = /(\+|\-|\/|\*)$/;
endsWithSign.test(fullExerciseString)

checks if the construct of endsWithSign finds any matches are found in fullExerciseString and returns true if found

let lastFullNumber = /[^\+|\-|\/|\*]*$/
let lastFullNumberString = lastFullNumber.exec(fullExerciseString);

it checks to see if any result is found in fullExerciseString and if they are found then it returns the match as the first element of an array, another element in that array I think it's the position of tahe match (not sure about this, didn't use it in this project)

exec and match should not be used in console.log (becasue the counters are going to run even if it is only in console.log)

13. chainging conditions in if

14. using length of strings and letter-spacing to limit size of text, m ight be better options - and its not working the same on mobiles.

15. rounding numbers to 2 decimals like here:
 exerciseResult = Math.round(exerciseResult * 100) / 100;
 its not perfect, but is good enough usually.

 16. using nodes in the DOM togheter with addEventListener

 document.body.addEventListener("click", event => {...}

 listens to click on all the page
 in the functions you can target 
 if ((event.target.nodeName == "BUTTON") && (event.target.textContent == "AC")) {...}

 nodeName is the name of the element, textContent is the text inside that element.

 17. you can target the child of an element in DOM like this:
 let showCurrentNo = document.getElementById("show-result");
 showCurrentNo.children[0].innerHTML = newExercise;

 the element has its childern in an array (in this case it has only one <p> and its in possition 0.) so innerHTML belongs to the <p> that is th child of the element with the "show-result" ID. 