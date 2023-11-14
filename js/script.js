window.onload = init;
let page = 0;
let algebra = 0;
let func = 0;
let graph = 0;

function init() {
    console.log("Page is ready, elements displayed, and resources that can take time ready too (videos)")

}

function processNext() {
    page += 1
    console.log('Page: '+ page);

    var question = document.querySelector("#question");
        
    switch(page) {
        case 1:
            prequestions();
            break;
        case 2:
            //adds the question preamble
            var quest = document.createElement("h2");
            var node = document.createTextNode("Question 1");
            quest.setAttribute("id", "quest");
            quest.appendChild(node);


            var element = document.getElementById("div");
            element.appendChild(quest);
            document.getElementById("quest").style.paddingLeft = "50px" ; 
            question1();
            break;
        case 3:
            changeQuestion();
            question2();
            break;
        case 4:
            changeQuestion();
            question3();
            break;
        case 5:
            changeQuestion();
            question4();
            break;
        case 6:
            changeQuestion();
            question5();
            break;
        case 7:
            changeQuestion();
            question6();
            break;
        case 8:
            changeQuestion();
            question7();
            break;
        case 9:
            changeQuestion();
            question8();
            break;
        case 10:
            changeQuestion();
            question9();
            break;
        case 11:
            changeQuestion();
            question10();
            break;
        case 12:
            // removes the question preamble
            var node = document.querySelector('#quest');
            node.remove();

            //removes the next button
            var bt = document.querySelector('#next');
            bt.remove();

            results();
            break;
    }
}

// useful functions
function changeQuestion(){
    var questValue = page - 1
    var node = document.querySelector("#quest");
    node.textContent = "Question " + questValue;
}


// make pages
function prequestions(){
    question.textContent = 'This is not a graded test, meaning that there are no rules regarding how you complete it. However, I strong recommend you to take it as seriously as possible, avoiding consulting friends or the internet. The goal here is to review how comfortable you are with the notions prior to calculus itself, often denoted pre-calculus. In a nutshell, these notions correspond to basic algebraic manipulations (polynomials, inequalities, and exponentiation and root rules), general ideas regarding special functions (trigonometric, exponential, logarithmic, and root functions), and a good intuition of graphical analysis. Not only explanations will be given for any eventual mistake, but, at the end, I will provide you with automatic feedback, instructing you on which of the mentioned areas of pre-calculus you should review with extra care.'
    question.textContent += '\r\nIf, however, if like these questions were harder than they should be, I have two advices: 1. get yourself a copy of Stewart\'s Precalculus: Mathematics for Calculus to help you throughout the course; 2. come to office hours and tutoring regularly. Just as a note, when I was an undergraduate, I had very little formation on pre-calculus and I would not be able to answer most of these questions. Nonetheless, during the course of the semester, you will naturally get used to this type of problem and, by the end of year, you should retake this quiz to see how much your mathematical skills improved! For that reason, I also recommend taking a screenshot of the last page for comparison purposes.'
    question.textContent += '\r\n For pedagogical reasons, you cannot return to a previously answered question. I don\'t want this to feel like a test in which you are scarred of making mistakes, so no turning back. However, at the end, you have the option to restart the quiz, which I suggest in case some of the answers do not make sense.'
    question.textContent += '\r\n Finally, I really encourage you not to use a calculator. I swear that as hard as the question seems to be, you will not spend more than 3 seconds with computations if do them smartly and this is coming from someone who really sucks at easy arithmetic. By the way, as a reminder, take Euler\'s number to be about 2.71 and all $\log$ to be over this same number'
    question.innerHTML = question.innerHTML.replace(/\r\n?/g, '<br />');
    MathJax.typeset();


}


//question 1
function question1(){
    question.textContent = 'Choose true or false for the next statements.';
    
    // add line breaker
    var linebreak = document.createElement("br");
    question.appendChild(linebreak);
    createTrueFalse(question, 'a', String.raw`I. $(ab)^n=a^nb^n$ for all $n\in\mathbb{Z}$ and $a,b\in\mathbb{R}$`);
    createTrueFalse(question, 'b', String.raw`II. $a^{-n}=\frac{1}{a^n}$ for all $n\in\mathbb{Z}$ and $a\in\mathbb{R}$`);
    createTrueFalse(question, 'c', String.raw`III. $(a+b)^n=a^n+b^n$ for all $n\in\mathbb{Z}$ and $a,b\in\mathbb{R}$`);
    createTrueFalse(question, 'd', String.raw`IV. $\frac{1}{a+b}=\frac{1}{a}+\frac{1}{b}$ for all $a,b\in\mathbb{R}$`);
    createTrueFalse(question, 'e', String.raw`V. $\sqrt{a+b}=\sqrt{a}+\sqrt{b}$ for all $a,b\in\mathbb{R}$`);
    createTrueFalse(question, 'f', String.raw`VI. $\sqrt{x^2}=x$ for all $x\in\mathbb{R}$`);
    createTrueFalse(question, 'g', String.raw`VII. $\sqrt{ab}=\sqrt{a}\sqrt{b}$ for all $a,b\in\mathbb{R}$`);
    createTrueFalse(question, 'h', String.raw`VIII. $a^0=1$ for all $a\in\mathbb{R}$`);
    createTrueFalse(question, 'i', String.raw`IX. $0^a=0$ for all $a\in\mathbb{R}$`);
    createTrueFalse(question, 'j', String.raw`X. $a^1=a$ for all $a\in\mathbb{R}$`);

    processSubmitTF('true', 'a', 'Exponentiation is just an abreviation for multiplications. Therefore, when seeing a multiplication ab raisen to some power n, consider the product n times, i.e., ababab...ab. Rearranging the terms, you get the formula above.');
    processSubmitTF('true', 'b', 'Negative values for exponentials will always invert the number being exponentiated.');
    processSubmitTF('false', 'c', 'This one is a big no! To see, let n = 2 and do, term by term, the product (a+b)(a+b). For a general value of n, there is a formula that gives the correct expansion of terms known as Newton\'s binomial, which is very easy to derive from the Pascal triangle. We will use this formula at some point, but no worries for now!');
    processSubmitTF('false', 'd', 'Be careful with this one because it is probably the mistake I see most oftend done by students. Use the values of a = 1 and b = 1 and you will see why this cannot hold.');
    processSubmitTF('false', 'e', 'Think for a second: if this is true, then Pythagoras would say that the  hypotenuse equals the sum of the two other sides. This kind of sanity check based on well-known results should become a habit from now on!');
    processSubmitTF('false', 'f', 'This is a problem when x is negative. For example, if x = -1, we would have that its square is 1, whose root is also 1. This equation is only true if we are sure x to be positive!');
    processSubmitTF('false', 'g', 'Once again, things are complicated if we do not ensure everything positive. If a=-1 and b=-1, ab = 1, but the product of their square roots is not 1 (if you are curious, it is -1, but we will not use complex numbers in this class. So, the basic idea is: if dealing with roots, make sure that everything is positive!');
    processSubmitTF('true', 'h', 'This is a definition that we often assume. Although there are good reasons to define the exponent of 0 to be always one, this is still somearbitrary, so just memorize this.')
    processSubmitTF('false', 'i', 'This one is almost true. For almost every value of a, 0 to the a-th power is 0, but, as we saw, any number to the 0 power is 1, including 0 itself!');
    processSubmitTF('true', 'j', 'This is also a definition.')
}

//create function for true or false questions
function createTrueFalse(element, spc_letter, quest_string){
    var form = document.createElement('form');
    form.setAttribute('id', 'form_' + spc_letter)

    var linebreak = document.createElement("br");
    form.appendChild(linebreak);


    //adds the spc_letter for the question
    var question_paragraph = document.createElement("p");
    const question_paragraph_sta = document.createTextNode("");
    question_paragraph.appendChild(question_paragraph_sta);
    question_paragraph.innerHTML = quest_string;
    form.appendChild(question_paragraph);
    
    // true
    const true_paragraph = document.createElement("p");
    const true_sta = document.createTextNode("True");
    var true_btn = document.createElement("input");
    true_btn.setAttribute("type", "radio");
    true_btn.setAttribute("name", "tf" + spc_letter)
    true_btn.setAttribute("value", "true")
    true_paragraph.appendChild(true_btn);
    true_paragraph.appendChild(true_sta);
    form.appendChild(true_paragraph)

    // false
    const false_paragraph = document.createElement("p");
    const false_sta = document.createTextNode("False");
    var false_btn = document.createElement("input");
    false_btn.setAttribute("type", "radio");
    false_btn.setAttribute("name", "tf" + spc_letter)
    false_btn.setAttribute("value", "false")
    false_paragraph.appendChild(false_btn);
    false_paragraph.appendChild(false_sta);
    form.appendChild(false_paragraph);

    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id","btnid_" + spc_letter);
    form.appendChild(button);

    element.appendChild(form);
    MathJax.typeset();

}

function processSubmitTF(actualValue, spc_letter, explanation){
    //process button submit for True/False question
    var button = document.getElementById("btnid_" + spc_letter);
    var form = document.getElementById("form_" + spc_letter)

    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(explanation);
        var radios = document.getElementsByName('tf' + spc_letter);
        console.log(radios);
        var chosenValue= "";
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                chosenValue = radios[i].value; 
                break;
            }
        }
        console.log(chosenValue)
        element_explanation_paragraph.appendChild(element_explanation);
        form.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue) {
            algebra += 1
            element_explanation_paragraph.textContent = 'CORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textContent = 'INCORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
    });
}

//question 2
function question2(){
    question.textContent = 'Write the solution to the following equations. If more than one solution exists, write them in increasing order and separated by commas. If no real solution exits, just click submit.';
    var linebreak = document.createElement("br");
    question.appendChild(linebreak);

    createTextInput(question, 'a', '2', String.raw`I. $x^2-4=0$`);
    createTextInput(question, 'b', '2', String.raw`II. $x^2+4=0$`);
    createTextInput(question, 'c', '2', String.raw`III. $(x-5)(x-6)=0$`);
    createTextInput(question, 'd', '2', String.raw`IV. $x=\sqrt{4}$`);
    createTextInput(question, 'e', '2', String.raw`V. $x^2-2x=0$`);
    createTextInput(question, 'f', '2', String.raw`VI. $x^2-5x+6=0$`);
    createTextInput(question, 'g', '2', String.raw`VII. $x^3-5x^2+6x=0$`);


    processTextInput2('-2,2','-2, 2', '2', 'a', '-2,2');
    processTextInput2('',' ', '2', 'b', 'No real solutions');
    processTextInput2('5,6','5, 6', '2', 'c', '5,6');
    processTextInput2('2','2 ', '2', 'd', '2. The root of 4 is one number, 2, whereas the a quadratic equations such as the first question has two solutions, the positive and the negative root of 4.');
    processTextInput2('0,2','0, 2 ', '2', 'e', '0,2');
    processTextInput2('2,3','2, 3 ', '2', 'f', '2,3');
    processTextInput2('0,2,3','0, 2, 3 ', '2', 'g', '0,2,3');

}

function createTextInput(element, spc_letter, quest_numb, quest_string){
    var form = document.createElement('form');
    form.setAttribute('id', 'form_' + quest_numb + spc_letter)

    var linebreak = document.createElement("br");
    form.appendChild(linebreak);


    var question_paragraph = document.createElement("p");
    const question_paragraph_sta = document.createTextNode("");
    question_paragraph.appendChild(question_paragraph_sta);
    question_paragraph.innerHTML = quest_string;
    form.appendChild(question_paragraph);

    // text
    var text_input = document.createElement("input");
    text_input.setAttribute("type", "text");
    text_input.setAttribute("id", "text" + quest_numb + spc_letter);
    text_input.setAttribute("value", "");
    text_input.style.margin = '10px';
    form.appendChild(text_input);


    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id","btnid_" + quest_numb + spc_letter);
    form.appendChild(button);

    element.appendChild(form);
    MathJax.typeset();

}

function processTextInput2(actualValue1,actualValue2, quest_numb, spc_letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid_" + quest_numb + spc_letter);
    var form = document.getElementById("form_" + quest_numb + spc_letter)

    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(explanation);
        var input = document.getElementById( "text" + quest_numb + spc_letter);
        console.log(input.value);
        var chosenValue= input.value;
        console.log(chosenValue)
        element_explanation_paragraph.appendChild(element_explanation);
        form.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue1 || chosenValue === actualValue2) {
            algebra += 1
            element_explanation_paragraph.textContent = 'CORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textContent = 'INCORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
    });
}


//question 3
function question3(){
    question.textContent = 'Inequalities play an important role in calculus. Choose which of the following holds (more than one option are correct).';
    var form3 = document.createElement('form');

    var linebreak = document.createElement("br");
    form3.appendChild(linebreak);

    createMultipleChoice3(form3, 'a', String.raw`if $a\leq b$, $a^2\leq b^2$ for all $a,b\in\mathbb{R}$`);
    createMultipleChoice3(form3, 'b', String.raw`if $a\leq b$, $\frac{1}{a}\leq \frac{1}{b}$ for all $a,b\in\mathbb{R}^+$`);
    createMultipleChoice3(form3, 'c',  String.raw`if $a\geq b$, $\frac{1}{a}\geq \frac{1}{b}$ for all $a,b\in\mathbb{R}$`);
    createMultipleChoice3(form3, 'd',  String.raw`if $a\leq b$, $\sqrt{a}\leq \sqrt{b}$ for all $a,b\in\mathbb{R}^+$`);
    createMultipleChoice3(form3, 'e',  String.raw`if $a\leq b$, $\log(a)\leq \log(b)$ for all $a,b\in\mathbb{R}^+$`);
    createMultipleChoice3(form3, 'f',  String.raw`if $a\leq b$, $e^a\leq e^b$ for all $a,b\in\mathbb{R}$`);
    createMultipleChoice3(form3, 'g',  String.raw`if $a\leq b$, $\sin a\leq \sin b$ for all $a,b\in\mathbb{R}$`);
    createMultipleChoice3(form3, 'h',  String.raw`$n! \leq 2^n$ for all $n\in \mathbb{Z}^+$`);
    createMultipleChoice3(form3, 'i',  String.raw`$\log x \leq x$ for all $x\in [1,\infty)$`);



    var button3 = document.createElement("button");
    button3.innerHTML = "Submit";
    button3.setAttribute("id","btnid_3");
    form3.appendChild(button3);

    question.appendChild(form3);
    MathJax.typeset();
    processMultipleChoice3(question, String.raw`The first one is incorrect because of negative values: $-2\leq -1$, but $4=(-2)^2\geq(-1)^2=1$. The second is incorrect in general: take $a=1$ and $b=2$, for example. To fix that, we need to invert the second inequality: if $a\leq b$, then $1/a\geq 1/b$ if $a,b\in\mathbb{R}$. The third one is also wrong because of negative values: take $a=-1$ and $b=-2$. The fourth one is correct because the square-root function is increasing. The fifth is correct because the logarith is increasing. The sixth is correct because exponentiation is increasing. The seventh is incorrect because the sine function is not increasing or decreasing: take $a=\pi/2$ and $b=\pi$. The eight is correct: take $n=4$ and see that $4!=24$; on the other hand, $2^4\leq 16$. The last one is the hardest, but recall the definition of logarithm as $e^{\log x}=x$, meaning that $\log x$ is the number that we must raise $e$ to get $x$. Because, however, $e^a\geq a$ for any $a\in[1,\infty)$, we are forced to conclude that the number we must raise $e$ to get $x$ must be smaller than $x$ itself. Calculus will give you a much better argument for this one, though.`, ['d','e', 'f', 'i'], ['algebra', 'functions', 'functions', 'functions', 'functions'])
}
    
function createMultipleChoice3(element, letter, inequal){
    //makes multiple choices with multiple answers
    var question_paragraph_3 = document.createElement("p");
    var question_paragraph_sta_3 = document.createTextNode("");
    var btn_3 = document.createElement("input");

    //makes the inputs and questions
    btn_3.setAttribute("type", "radio");
    btn_3.setAttribute("value", letter);
    btn_3.setAttribute("class", "btn_3");
    question_paragraph_3.setAttribute('id', 'p_3' + letter);
    question_paragraph_3.appendChild(btn_3);
    question_paragraph_3.appendChild(question_paragraph_sta_3);
    question_paragraph_3.innerHTML += inequal;
    element.appendChild(question_paragraph_3);

}

function processMultipleChoice3(element, explanation, actualValues, typeValues){
    //process button submit for multiple choice question
    var button = document.getElementById('btnid_3');
    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode('');
        element_explanation_paragraph.appendChild(element_explanation);
        element_explanation_paragraph.innerHTML += explanation
        var btns = document.querySelectorAll(".btn_3");
        var chosenValues = [];
        
        //make a list of checked values
        for (var i = 0, length = btns.length; i < length; i++) {
            if (btns[i].checked) {
                chosenValues.push(btns[i].value); 
            }
        }
        console.log(chosenValues)

        //checks whether the true values are in the array of chosen values
        for (var i = 0, length = actualValues.length; i < length; i++) {
            if (chosenValues.includes(actualValues[i])) {
                // if the correct value was chosen, paint the option green
                var paragraph = document.getElementById('p_3' + actualValues[i]);
                paragraph.style.color = 'green';
                //adds a point to algebra if it is an algebra question or to func if it is a function question
                if (typeValues[i] === 'algebra'){
                    algebra += 1
                }
                else{
                    func += 1
                }
            }
            else {
                // if the correct value was not chosen, paint the option red
                var paragraph = document.getElementById('p_3' + actualValues[i]);
                paragraph.style.color = 'red';
                //subtracts a point to algebra if it is an algebra question or to func if it is a function question
                if (typeValues[i] === 'algebra'){
                    algebra += -1
                }
                else{
                    func += -1
                }
                }
        }
        
        //checks whether a flase value is in the array of chosen values
        for (var i = 0, length = chosenValues.length; i < length; i++){
            if (!actualValues.includes(chosenValues[i])){
                var paragraph = document.getElementById('p_3' + chosenValues[i]);
                paragraph.style.color = 'red';
                algebra += -1
                func += -1
            }

        }

        button.disabled = true;
        element.appendChild(element_explanation_paragraph);
        MathJax.typeset();

    });
}

//question 4
function question4(){
    question.textContent = 'Choose the correct statement.';

    //first form for 4a
    var form_a = document.createElement('form');
    form_a.setAttribute('id', 'form_4a')

    const paragraph_a = document.createElement("p");
    const paragraph_statement_a = document.createTextNode("I. A polynomial of degree");
    paragraph_a.appendChild(paragraph_statement_a);
    paragraph_a.innerHTML += String.raw` $n$ has`;
    form_a.appendChild(paragraph_a);

    //4a_a
    var btn_4a_a = document.createElement("input");
    btn_4a_a.setAttribute("type", "radio");
    btn_4a_a.setAttribute("name", "radio_4a");
    btn_4a_a.setAttribute("value", "4a_a");
    const paragraph_4a_a = document.createElement("p");
    const paragraph_4a_a_sta = document.createTextNode("at most");
    paragraph_4a_a.appendChild(btn_4a_a);
    paragraph_4a_a.appendChild(paragraph_4a_a_sta);
    paragraph_4a_a.innerHTML += String.raw` $n$ roots`;
    form_a.appendChild(paragraph_4a_a);

    //4a_b
    var btn_4a_b = document.createElement("input");
    btn_4a_b.setAttribute("type", "radio");
    btn_4a_b.setAttribute("name", "radio_4a");
    btn_4a_b.setAttribute("value", "4a_b");
    const paragraph_4a_b = document.createElement("p");
    const paragraph_4a_b_sta = document.createTextNode("at least");
    paragraph_4a_b.appendChild(btn_4a_b);
    paragraph_4a_b.appendChild(paragraph_4a_b_sta);
    paragraph_4a_b.innerHTML += String.raw` $n$ roots`;
    form_a.appendChild(paragraph_4a_b);


    //4a_c
    var btn_4a_c = document.createElement("input");
    btn_4a_c.setAttribute("type", "radio");
    btn_4a_c.setAttribute("name", "radio_4a");
    btn_4a_c.setAttribute("value", "4a_c");
    const paragraph_4a_c = document.createElement("p");
    const paragraph_4a_c_sta = document.createTextNode("exactly");
    paragraph_4a_c.appendChild(btn_4a_c);
    paragraph_4a_c.appendChild(paragraph_4a_c_sta);
    var math = String.raw` $n$ roots`;
    paragraph_4a_c.innerHTML += math;
    form_a.appendChild(paragraph_4a_c);

    //submit
    var button_a = document.createElement("button");
    button_a.innerHTML = "Submit";
    button_a.setAttribute("id","btnid_4a");
    form_a.appendChild(button_a);
    
    question.appendChild(form_a);
    MathJax.typeset();

    processMultipleChoice4('4a_a', 'a', String.raw`The fundamental theorem of algebra says that such a polynomial has exactly $n$ complex roots, counting multiplicity.`);

    //first form for 4b
    var form_b = document.createElement('form');
    form_b.setAttribute('id', 'form_4b')

    const paragraph_b = document.createElement("p");
    const paragraph_statement_b = document.createTextNode("II. A polynomial of degree");
    paragraph_b.appendChild(paragraph_statement_b);
    paragraph_b.innerHTML += String.raw` $n$ with only real roots has`;
    form_b.appendChild(paragraph_b);

    //4b_a
    var btn_4b_a = document.createElement("input");
    btn_4b_a.setAttribute("type", "radio");
    btn_4b_a.setAttribute("name", "radio_4b");
    btn_4b_a.setAttribute("value", "4b_a");
    const paragraph_4b_a = document.createElement("p");
    const paragraph_4b_a_sta = document.createTextNode("at most distinct roots");
    paragraph_4b_a.appendChild(btn_4b_a);
    paragraph_4b_a.appendChild(paragraph_4b_a_sta);
    paragraph_4b_a.innerHTML += String.raw` $n$ roots`;
    form_b.appendChild(paragraph_4b_a);

    //4b_b
    var btn_4b_b = document.createElement("input");
    btn_4b_b.setAttribute("type", "radio");
    btn_4b_b.setAttribute("name", "radio_4b");
    btn_4b_b.setAttribute("value", "4b_b");
    const paragraph_4b_b = document.createElement("p");
    const paragraph_4b_b_sta = document.createTextNode("at least");
    paragraph_4b_b.appendChild(btn_4b_b);
    paragraph_4b_b.appendChild(paragraph_4b_b_sta);
    paragraph_4b_b.innerHTML += String.raw` $n$ distinct roots`;
    form_b.appendChild(paragraph_4b_b);


    //4a_c
    var btn_4b_c = document.createElement("input");
    btn_4b_c.setAttribute("type", "radio");
    btn_4b_c.setAttribute("name", "radio_4b");
    btn_4b_c.setAttribute("value", "4b_c");
    const paragraph_4b_c = document.createElement("p");
    const paragraph_4b_c_sta = document.createTextNode("exactly");
    paragraph_4b_c.appendChild(btn_4b_c);
    paragraph_4b_c.appendChild(paragraph_4b_c_sta);
    paragraph_4b_c.innerHTML += String.raw` $n$ distinct roots`;
    form_b.appendChild(paragraph_4b_c);

    //submit
    var button_b = document.createElement("button");
    button_b.innerHTML = "Submit";
    button_b.setAttribute("id","btnid_4b");
    form_b.appendChild(button_b);

    question.appendChild(form_b);
    MathJax.typeset();

    processMultipleChoice4('4b_a', 'b', String.raw`The fundamental theorem of algebra says that such a polynomial has exactly $n$ roots, but these may have multiplicity.`);
}

function processMultipleChoice4(actualValue, letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid_4" + letter);
    var form = document.getElementById("form_4" + letter);

    button.addEventListener ("click", () => {
    console.log('ok')
    
    var element_explanation_paragraph = document.createElement("p");
    var element_explanation =  document.createTextNode(' ');
    var radios = document.getElementsByName('radio_4' + letter);
    console.log(radios);
    var chosenValue= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            chosenValue = radios[i].value; 
            break;
        }
    }
    console.log(chosenValue)

    element_explanation_paragraph.appendChild(element_explanation);
    element_explanation_paragraph.innerHTML = explanation;
    form.appendChild(element_explanation_paragraph)
    if (chosenValue === actualValue) {
        algebra += 1
        element_explanation_paragraph.innerHTML = 'CORRECT '+ element_explanation_paragraph.innerHTML
        element_explanation_paragraph.style.color = 'green'
        } else {
        element_explanation_paragraph.textCoinnerHTMLntent = 'INCORRECT '+ element_explanation_paragraph.innerHTML
        element_explanation_paragraph.style.color = 'red'
        }
    button.disabled = true;
    MathJax.typeset();
});
}


//question 5
function question5(){
    question.textContent = 'Transform the angles in degrees to radians.';
    var linebreak = document.createElement("br");
    question.appendChild(linebreak);

    createTextInput(question, 'a', '5', String.raw`I. $\pi$`);
    createTextInput(question, 'b', '5', String.raw`II. $1/3\pi$`);
    createTextInput(question, 'c', '5', String.raw`III. $4/3\pi$`);
    createTextInput(question, 'd', '5', String.raw`IV. $10/3\pi$`);
    createTextInput(question, 'e', '5', String.raw`V. $-2.5\pi$`);

    processTextInput5('180','180 degrees', '5', 'a', '180 degrees');
    processTextInput5('60','60 degrees', '5', 'b', '60 degrees');
    processTextInput5('240','240 degrees', '5', 'c', '240 degrees');
    processTextInput5('600','600 degrees', '5', 'd', '600 degrees');
    processTextInput5('-540','540 degrees', '5', 'e', '-540 degrees');
}

function processTextInput5(actualValue1,actualValue2, quest_numb, spc_letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid_" + quest_numb + spc_letter);
    var form = document.getElementById("form_" + quest_numb + spc_letter);

    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(explanation);
        var input = document.getElementById( "text" + quest_numb + spc_letter);
        console.log(input.value);
        var chosenValue= input.value;
        console.log(chosenValue)
        element_explanation_paragraph.appendChild(element_explanation);
        form.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue1 || chosenValue === actualValue2) {
            func += 1
            element_explanation_paragraph.textContent = 'CORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textContent = 'INCORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
    });
}


//question 6
function question6(){
    question.textContent = 'Choose the correct identity.';
    //first form for 6a
    var form_6a = document.createElement('form');
    form_6a.setAttribute('id', 'form_6a')

    const paragraph_6a = document.createElement("p");
    const paragraph_statement_6a = document.createTextNode("I.");
    paragraph_6a.appendChild(paragraph_statement_6a);
    form_6a.appendChild(paragraph_6a);

    //6a_a
    var btn_6a_a = document.createElement("input");
    btn_6a_a.setAttribute("type", "radio");
    btn_6a_a.setAttribute("name", "radio_6a");
    btn_6a_a.setAttribute("value", "6a_a");
    const paragraph_6a_a = document.createElement("p");
    const paragraph_6a_a_sta = document.createTextNode("");
    paragraph_6a_a.appendChild(btn_6a_a);
    paragraph_6a_a.appendChild(paragraph_6a_a_sta);
    paragraph_6a_a.innerHTML += String.raw` $1+\cot^2x=\csc^2z$`;
    form_6a.appendChild(paragraph_6a_a);

    //6a_b
    var btn_6a_b = document.createElement("input");
    btn_6a_b.setAttribute("type", "radio");
    btn_6a_b.setAttribute("name", "radio_6a");
    btn_6a_b.setAttribute("value", "6a_b");
    const paragraph_6a_b = document.createElement("p");
    const paragraph_6a_b_sta = document.createTextNode("");
    paragraph_6a_b.appendChild(btn_6a_b);
    paragraph_6a_b.appendChild(paragraph_6a_b_sta);
    paragraph_6a_b.innerHTML += String.raw` $\text{arcsin}[\sin (x)]=x$`;
    form_6a.appendChild(paragraph_6a_b);


    //6a_c
    var btn_6a_c = document.createElement("input");
    btn_6a_c.setAttribute("type", "radio");
    btn_6a_c.setAttribute("name", "radio_6a");
    btn_6a_c.setAttribute("value", "6a_c");
    const paragraph_6a_c = document.createElement("p");
    const paragraph_6a_c_sta = document.createTextNode("");
    paragraph_6a_c.appendChild(btn_6a_c);
    paragraph_6a_c.appendChild(paragraph_6a_c_sta);
    paragraph_6a_c.innerHTML += String.raw` $\cos(a+b)=\cos a\cos b+\sin a\sin b$`;
    form_6a.appendChild(paragraph_6a_c);
    
    //6a_d
    var btn_6a_d = document.createElement("input");
    btn_6a_d.setAttribute("type", "radio");
    btn_6a_d.setAttribute("name", "radio_6a");
    btn_6a_d.setAttribute("value", "6a_d");
    const paragraph_6a_d = document.createElement("p");
    const paragraph_6a_d_sta = document.createTextNode("");
    paragraph_6a_d.appendChild(btn_6a_d);
    paragraph_6a_d.appendChild(paragraph_6a_d_sta);
    paragraph_6a_d.innerHTML += String.raw` $\cos(a+\pi)=\cos a$`;
    form_6a.appendChild(paragraph_6a_d);

    //submit
    var button_6a = document.createElement("button");
    button_6a.innerHTML = "Submit";
    button_6a.setAttribute("id","btnid_6a");
    form_6a.appendChild(button_6a);
    
    question.appendChild(form_6a);
    MathJax.typeset();

    processMultipleChoice6('6a_a', 'a', String.raw`The first option is the correct, as it can be derived by dividing the fundamental equation, $\sin^2x+\cos^2x=1$ by $\sin^2 x$. The second is incorrect, as the inverse sine function is not well-defined: for example, $x=0,2\pi,4\pi,\dots$ all have sine equal to 0. The sign is wrong in the third option, the correct equation is $\cos(a+b)=\cos a\cos b-\sin a\sin b$. The last option is straight up wrong: $\cos 0 =1$, but $\cos \pi=-1$.`);

    //first form for 6b
    var form_6b = document.createElement('form');
    form_6b.setAttribute('id', 'form_6b')

    const paragraph_6b = document.createElement("p");
    const paragraph_statement_6b = document.createTextNode("II.");
    paragraph_6b.appendChild(paragraph_statement_6b);
    form_6b.appendChild(paragraph_6b);

    //6b_a
    var btn_6b_a = document.createElement("input");
    btn_6b_a.setAttribute("type", "radio");
    btn_6b_a.setAttribute("name", "radio_6b");
    btn_6b_a.setAttribute("value", "6b_a");
    const paragraph_6b_a = document.createElement("p");
    const paragraph_6b_a_sta = document.createTextNode("");
    paragraph_6b_a.appendChild(btn_6b_a);
    paragraph_6b_a.appendChild(paragraph_6b_a_sta);
    paragraph_6b_a.innerHTML += String.raw` $\log(a+b)=\log a+\log b$`;
    form_6b.appendChild(paragraph_6b_a);

    //6b_b
    var btn_6b_b = document.createElement("input");
    btn_6b_b.setAttribute("type", "radio");
    btn_6b_b.setAttribute("name", "radio_6b");
    btn_6b_b.setAttribute("value", "6b_b");
    const paragraph_6b_b = document.createElement("p");
    const paragraph_6b_b_sta = document.createTextNode("");
    paragraph_6b_b.appendChild(btn_6b_b);
    paragraph_6b_b.appendChild(paragraph_6b_b_sta);
    paragraph_6b_b.innerHTML += String.raw` $\log \frac{1}{a}=-\log a$`;
    form_6b.appendChild(paragraph_6b_b);


    //6b_c
    var btn_6b_c = document.createElement("input");
    btn_6b_c.setAttribute("type", "radio");
    btn_6b_c.setAttribute("name", "radio_6b");
    btn_6b_c.setAttribute("value", "6b_c");
    const paragraph_6b_c = document.createElement("p");
    const paragraph_6b_c_sta = document.createTextNode("");
    paragraph_6b_c.appendChild(btn_6b_c);
    paragraph_6b_c.appendChild(paragraph_6b_c_sta);
    paragraph_6b_c.innerHTML += String.raw` $\log e^x=|x|$`;
    form_6b.appendChild(paragraph_6b_c);
    
    //6a_d
    var btn_6b_d = document.createElement("input");
    btn_6b_d.setAttribute("type", "radio");
    btn_6b_d.setAttribute("name", "radio_6b");
    btn_6b_d.setAttribute("value", "6b_d");
    const paragraph_6b_d = document.createElement("p");
    const paragraph_6b_d_sta = document.createTextNode("");
    paragraph_6b_d.appendChild(btn_6b_d);
    paragraph_6b_d.appendChild(paragraph_6b_d_sta);
    paragraph_6b_d.innerHTML += String.raw` $(\log a)^n=n\log a$`;
    form_6b.appendChild(paragraph_6b_d);

    //submit
    var button_6b = document.createElement("button");
    button_6b.innerHTML = "Submit";
    button_6b.setAttribute("id","btnid_6b");
    form_6b.appendChild(button_6b);
    
    question.appendChild(form_6b);
    MathJax.typeset();

    processMultipleChoice6('6b_b', 'b', String.raw`The first is incorrect, as the correct identity is $\log(a+b)=\log a\log b$ (can you derive this equality?). The seond is correct as it follows from the more general case $\log a^n=n\log a$ for any integer $n$. The second is incorrect as this module symbol is fully unecessary, i.e., $\log e^x=x$. The fourth is also incorrect, given that the right identity is $\log (a^n)=n\log a$ (be careful with parenthesis!).`);

}


function processMultipleChoice6(actualValue, letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid_6" + letter);
    var form = document.getElementById("form_6" + letter)

    button.addEventListener ("click", () => {
        console.log('ok')
        
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(' ');
        var radios = document.getElementsByName('radio_6' + letter);
        console.log(radios);
        var chosenValue= "";
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                chosenValue = radios[i].value; 
                break;
            }
        }
        console.log(chosenValue)

        element_explanation_paragraph.appendChild(element_explanation);
        element_explanation_paragraph.innerHTML = explanation;
        form.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue) {
            func += 1
            element_explanation_paragraph.innerHTML = 'CORRECT '+ element_explanation_paragraph.innerHTML
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textCoinnerHTMLntent = 'INCORRECT '+ element_explanation_paragraph.innerHTML
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
        MathJax.typeset();
    });
}

//question 7
function question7(){
    question.textContent = 'Select the function generating the displayed graph.';
    var target = document.createElement("div");
    target.setAttribute('id','myFunction7');
    question.appendChild(target);

    makePlot7(question, 'a', 'sin(x)');
    makePlot7(question, 'b', 'x^2');
    makePlot7(question, 'c', 'log(x)');
    makePlot7(question, 'd', 'x^3');
    makePlot7(question, 'e', 'cos(x)');
    makePlot7(question, 'f', 'exp(x)');
    makePlot7(question, 'g', 'tan(x)');
    makePlot7(question, 'h', 'sqrt(x)');
    makePlot7(question, 'i', 'abs(x)');


    processInput7('Sine', 'a', 'Sine');
    processInput7('Quadratic', 'b', 'Quadratic');
    processInput7('Logarithmic in e', 'c', 'Logarithmic in e');
    processInput7('Cubic', 'd', 'Cubic');
    processInput7('Cosine', 'e', 'Cosine');
    processInput7('Exponential in e', 'f', 'Exponential in e');
    processInput7('Tangent', 'g', 'Tangent');
    processInput7('Square-root function', 'h', 'Square-root function');
    processInput7('Modular function (i.e., |x|)', 'i', 'Modular function (i.e., |x|)');

}

function makePlot7(element, letter, funcString){
    var target = document.createElement("div");

    target.setAttribute('id','myFunction7_' + letter);
    element.appendChild(target);

    var array = ['Quadratic', 'Cubic','Square-root function','Sine', 'Cosine', 'Tangent', 'Exponential in e', 'Logarithmic in e', 'Modular function (i.e., |x|)'];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "select7_" + letter;
    selectList.style.margin = "50px 10px 20px 30px";

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }

    var parameters = {
        target: '#myFunction7_' + letter,
        width: 300,
        height: 300,
        data: [{
          fn: funcString, 
          color: 'blue'
       }],
        grid: true,
        yAxis: {domain: [-4, 4]},
        xAxis: {domain: [-4, 4]}
      };
    functionPlot(parameters);
    target.appendChild(selectList);

    //submit
    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id","btnid7_" + letter);
    target.appendChild(button);

      
    MathJax.typeset();
}

function processInput7(actualValue, letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid7_" + letter);
    var selectList = document.getElementById("select7_" + letter);
    var target = document.getElementById("myFunction7_" + letter);


    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode("");
        element_explanation_paragraph.appendChild(element_explanation);
        element_explanation_paragraph.innerHTML = explanation;
        target.appendChild(element_explanation_paragraph)
        if (actualValue === selectList.value) {
                graph += 1;
                element_explanation_paragraph.innerHTML = 'CORRECT '+ element_explanation_paragraph.innerHTML;
                element_explanation_paragraph.style.color = 'green';
            } else {
                element_explanation_paragraph.innerHTML = 'INCORRECT '+ element_explanation_paragraph.innerHTML;
                element_explanation_paragraph.style.color = 'red';
            }
        button.disabled = true;
        MathJax.typeset();
    });
}

//question 8
function question8(){
    question.textContent = 'What is the domain of the indicated function?';

    //first form for 8a
    var form_8a = document.createElement('form');
    form_8a.setAttribute('id', 'form_8a')

    const paragraph_8a = document.createElement("p");
    const paragraph_statement_8a = document.createTextNode("I. ");
    paragraph_8a.appendChild(paragraph_statement_8a);
    paragraph_8a.innerHTML += String.raw`$\frac{-17}{\sqrt{x-4}}$`;
    form_8a.appendChild(paragraph_8a);

    //8a_a
    var btn_8a_a = document.createElement("input");
    btn_8a_a.setAttribute("type", "radio");
    btn_8a_a.setAttribute("name", "radio_8a");
    btn_8a_a.setAttribute("value", "8a_a");
    const paragraph_8a_a = document.createElement("p");
    const paragraph_8a_a_sta = document.createTextNode("");
    paragraph_8a_a.appendChild(btn_8a_a);
    paragraph_8a_a.appendChild(paragraph_8a_a_sta);
    paragraph_8a_a.innerHTML += String.raw` $\mathbb{R}$`;
    form_8a.appendChild(paragraph_8a_a);

    //8a_b
    var btn_8a_b = document.createElement("input");
    btn_8a_b.setAttribute("type", "radio");
    btn_8a_b.setAttribute("name", "radio_8a");
    btn_8a_b.setAttribute("value", "8a_b");
    const paragraph_8a_b = document.createElement("p");
    const paragraph_8a_b_sta = document.createTextNode("");
    paragraph_8a_b.appendChild(btn_8a_b);
    paragraph_8a_b.appendChild(paragraph_8a_b_sta);
    paragraph_8a_b.innerHTML += String.raw` $\mathbb{R}^+$`;
    form_8a.appendChild(paragraph_8a_b);


    //8a_c
    var btn_8a_c = document.createElement("input");
    btn_8a_c.setAttribute("type", "radio");
    btn_8a_c.setAttribute("name", "radio_8a");
    btn_8a_c.setAttribute("value", "8a_c");
    const paragraph_8a_c = document.createElement("p");
    const paragraph_8a_c_sta = document.createTextNode("");
    paragraph_8a_c.appendChild(btn_8a_c);
    paragraph_8a_c.appendChild(paragraph_8a_c_sta);
    paragraph_8a_c.innerHTML += String.raw` $x\in (4,\infty)$`;
    form_8a.appendChild(paragraph_8a_c);
    
    //8a_d
    var btn_8a_d = document.createElement("input");
    btn_8a_d.setAttribute("type", "radio");
    btn_8a_d.setAttribute("name", "radio_8a");
    btn_8a_d.setAttribute("value", "8a_d");
    const paragraph_8a_d = document.createElement("p");
    const paragraph_8a_d_sta = document.createTextNode("");
    paragraph_8a_d.appendChild(btn_8a_d);
    paragraph_8a_d.appendChild(paragraph_8a_d_sta);
    paragraph_8a_d.innerHTML += String.raw` $x\in [4,\infty)$`;
    form_8a.appendChild(paragraph_8a_d);

    //submit
    var button_8a = document.createElement("button");
    button_8a.innerHTML = "Submit";
    button_8a.setAttribute("id","btnid_8a");
    form_8a.appendChild(button_8a);
    
    question.appendChild(form_8a);

    //first form for 8b
    var form_8b = document.createElement('form');
    form_8b.setAttribute('id', 'form_8b')

    const paragraph_8b = document.createElement("p");
    const paragraph_statement_8b = document.createTextNode("II. ");
    paragraph_8b.appendChild(paragraph_statement_8b);
    paragraph_8b.innerHTML += String.raw`$\log(|x|)$`;
    form_8b.appendChild(paragraph_8b);

    //8b_a
    var btn_8b_a = document.createElement("input");
    btn_8b_a.setAttribute("type", "radio");
    btn_8b_a.setAttribute("name", "radio_8b");
    btn_8b_a.setAttribute("value", "8b_a");
    const paragraph_8b_a = document.createElement("p");
    const paragraph_8b_a_sta = document.createTextNode("");
    paragraph_8b_a.appendChild(btn_8b_a);
    paragraph_8b_a.appendChild(paragraph_8b_a_sta);
    paragraph_8b_a.innerHTML += String.raw` $\mathbb{R}$`;
    form_8b.appendChild(paragraph_8b_a);

    //8b_b
    var btn_8b_b = document.createElement("input");
    btn_8b_b.setAttribute("type", "radio");
    btn_8b_b.setAttribute("name", "radio_8b");
    btn_8b_b.setAttribute("value", "8b_b");
    const paragraph_8b_b = document.createElement("p");
    const paragraph_8b_b_sta = document.createTextNode("");
    paragraph_8b_b.appendChild(btn_8b_b);
    paragraph_8b_b.appendChild(paragraph_8b_b_sta);
    paragraph_8b_b.innerHTML += String.raw` $\mathbb{R}^+$`;
    form_8b.appendChild(paragraph_8b_b);


    //8b_c
    var btn_8b_c = document.createElement("input");
    btn_8b_c.setAttribute("type", "radio");
    btn_8b_c.setAttribute("name", "radio_8b");
    btn_8b_c.setAttribute("value", "8b_c");
    const paragraph_8b_c = document.createElement("p");
    const paragraph_8b_c_sta = document.createTextNode("");
    paragraph_8b_c.appendChild(btn_8b_c);
    paragraph_8b_c.appendChild(paragraph_8b_c_sta);
    paragraph_8b_c.innerHTML += String.raw` $x\geq 0$`;
    form_8b.appendChild(paragraph_8b_c);
    
    //8b_d
    var btn_8b_d = document.createElement("input");
    btn_8b_d.setAttribute("type", "radio");
    btn_8b_d.setAttribute("name", "radio_8b");
    btn_8b_d.setAttribute("value", "8b_d");
    const paragraph_8b_d = document.createElement("p");
    const paragraph_8b_d_sta = document.createTextNode("");
    paragraph_8b_d.appendChild(btn_8b_d);
    paragraph_8b_d.appendChild(paragraph_8b_d_sta);
    paragraph_8b_d.innerHTML += String.raw` $x\neq 0$`;
    form_8b.appendChild(paragraph_8b_d);

    //submit
    var button_8b = document.createElement("button");
    button_8b.innerHTML = "Submit";
    button_8b.setAttribute("id","btnid_8b");
    form_8b.appendChild(button_8b);

    question.appendChild(form_8b);

    //first form for 8c
    var form_8c = document.createElement('form');
    form_8c.setAttribute('id', 'form_8c')

    const paragraph_8c = document.createElement("p");
    const paragraph_statement_8c = document.createTextNode("III. ");
    paragraph_8c.appendChild(paragraph_statement_8c);
    paragraph_8c.innerHTML += String.raw`$\sin(x-\pi)$`;
    form_8c.appendChild(paragraph_8c);

    //8c_a
    var btn_8c_a = document.createElement("input");
    btn_8c_a.setAttribute("type", "radio");
    btn_8c_a.setAttribute("name", "radio_8c");
    btn_8c_a.setAttribute("value", "8c_a");
    const paragraph_8c_a = document.createElement("p");
    const paragraph_8c_a_sta = document.createTextNode("");
    paragraph_8c_a.appendChild(btn_8c_a);
    paragraph_8c_a.appendChild(paragraph_8c_a_sta);
    paragraph_8c_a.innerHTML += String.raw` $\mathbb{R}$`;
    form_8c.appendChild(paragraph_8c_a);

    //8c_b
    var btn_8c_b = document.createElement("input");
    btn_8c_b.setAttribute("type", "radio");
    btn_8c_b.setAttribute("name", "radio_8c");
    btn_8c_b.setAttribute("value", "8c_b");
    const paragraph_8c_b = document.createElement("p");
    const paragraph_8c_b_sta = document.createTextNode("");
    paragraph_8c_b.appendChild(btn_8c_b);
    paragraph_8c_b.appendChild(paragraph_8c_b_sta);
    paragraph_8c_b.innerHTML += String.raw` $\mathbb{R}^+$`;
    form_8c.appendChild(paragraph_8c_b);


    //8c_c
    var btn_8c_c = document.createElement("input");
    btn_8c_c.setAttribute("type", "radio");
    btn_8c_c.setAttribute("name", "radio_8c");
    btn_8c_c.setAttribute("value", "8c_c");
    const paragraph_8c_c = document.createElement("p");
    const paragraph_8c_c_sta = document.createTextNode("");
    paragraph_8c_c.appendChild(btn_8c_c);
    paragraph_8c_c.appendChild(paragraph_8c_c_sta);
    paragraph_8c_c.innerHTML += String.raw` $x\neq \pi$`;
    form_8c.appendChild(paragraph_8c_c);
    
    //8c_d
    var btn_8c_d = document.createElement("input");
    btn_8c_d.setAttribute("type", "radio");
    btn_8c_d.setAttribute("name", "radio_8c");
    btn_8c_d.setAttribute("value", "8c_d");
    const paragraph_8c_d = document.createElement("p");
    const paragraph_8c_d_sta = document.createTextNode("");
    paragraph_8c_d.appendChild(btn_8c_d);
    paragraph_8c_d.appendChild(paragraph_8c_d_sta);
    paragraph_8c_d.innerHTML += String.raw` $\{x\in \mathbb{R}|x\neq n\pi, n \in \mathbb{Z}\}$`;
    form_8c.appendChild(paragraph_8c_d);

    //submit
    var button_8c = document.createElement("button");
    button_8c.innerHTML = "Submit";
    button_8c.setAttribute("id","btnid_8c");
    form_8c.appendChild(button_8c);
    
    question.appendChild(form_8c);


    //first form for 8d
    var form_8d = document.createElement('form');
    form_8d.setAttribute('id', 'form_8d')

    const paragraph_8d = document.createElement("p");
    const paragraph_statement_8d = document.createTextNode("IV. ");
    paragraph_8d.appendChild(paragraph_statement_8d);
    paragraph_8d.innerHTML += String.raw`$\frac{1}{\sin(x)}$`;
    form_8d.appendChild(paragraph_8d);

    //8d_a
    var btn_8d_a = document.createElement("input");
    btn_8d_a.setAttribute("type", "radio");
    btn_8d_a.setAttribute("name", "radio_8d");
    btn_8d_a.setAttribute("value", "8d_a");
    const paragraph_8d_a = document.createElement("p");
    const paragraph_8d_a_sta = document.createTextNode("");
    paragraph_8d_a.appendChild(btn_8d_a);
    paragraph_8d_a.appendChild(paragraph_8d_a_sta);
    paragraph_8d_a.innerHTML += String.raw` $\mathbb{R}$`;
    form_8d.appendChild(paragraph_8d_a);

    //8d_b
    var btn_8d_b = document.createElement("input");
    btn_8d_b.setAttribute("type", "radio");
    btn_8d_b.setAttribute("name", "radio_8d");
    btn_8d_b.setAttribute("value", "8d_b");
    const paragraph_8d_b = document.createElement("p");
    const paragraph_8d_b_sta = document.createTextNode("");
    paragraph_8d_b.appendChild(btn_8d_b);
    paragraph_8d_b.appendChild(paragraph_8d_b_sta);
    paragraph_8d_b.innerHTML += String.raw` $x\neq 2\pi$`;
    form_8d.appendChild(paragraph_8d_b);


    //8d_c
    var btn_8d_c = document.createElement("input");
    btn_8d_c.setAttribute("type", "radio");
    btn_8d_c.setAttribute("name", "radio_8d");
    btn_8d_c.setAttribute("value", "8d_c");
    const paragraph_8d_c = document.createElement("p");
    const paragraph_8d_c_sta = document.createTextNode("");
    paragraph_8d_c.appendChild(btn_8d_c);
    paragraph_8d_c.appendChild(paragraph_8d_c_sta);
    paragraph_8d_c.innerHTML += String.raw` $\{x\in \mathbb{R}|x\neq n\pi, n \in \mathbb{Z}^+\}$`;
    form_8d.appendChild(paragraph_8d_c);
    
    //8d_d
    var btn_8d_d = document.createElement("input");
    btn_8d_d.setAttribute("type", "radio");
    btn_8d_d.setAttribute("name", "radio_8d");
    btn_8d_d.setAttribute("value", "8d_d");
    const paragraph_8d_d = document.createElement("p");
    const paragraph_8d_d_sta = document.createTextNode("");
    paragraph_8d_d.appendChild(btn_8d_d);
    paragraph_8d_d.appendChild(paragraph_8d_d_sta);
    paragraph_8d_d.innerHTML += String.raw` $\{x\in \mathbb{R}|x\neq n\pi, n \in \mathbb{Z}\}$`;
    form_8d.appendChild(paragraph_8d_d);

    //submit
    var button_8d = document.createElement("button");
    button_8d.innerHTML = "Submit";
    button_8d.setAttribute("id","btnid_8d");
    form_8d.appendChild(button_8d);
    
    question.appendChild(form_8d);

    MathJax.typeset();

    processMultipleChoice8('8a_c', 'a', String.raw`Square roots are not defined for negative values and fractions are not defined when the denominator is 0, so the solutuion is $x\in(4,\infty)$, which are all values for which neither of these conditions take place.`);
    processMultipleChoice8('8b_d', 'b', String.raw`The logarithm is only defined for values stricter bigger than 0. Because only $|0|\leq 0$, the solutions are all $x\neq 0$.`);
    processMultipleChoice8('8c_a', 'c', String.raw`The sine function is defined for all real values, so the domain is the full real set $\mathbb{R}$.`);
    processMultipleChoice8('8d_d', 'd', String.raw`The sine function is zero exactly at the values of $x$ integer multiples of $\pi$, that is $x=n\pi$ for any $n\in\mathbb{Z}$. The above function is then undefined for all $x$ which the denominator is non-zero, meaning its domain is exactly the set $\{x\in \mathbb{R}|x\neq n\pi, n \in \mathbb{Z}\}$.`);
}

function processMultipleChoice8(actualValue, letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid_8" + letter);
    var form = document.getElementById("form_8" + letter)

    button.addEventListener ("click", () => {
        console.log('ok')
        
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(' ');
        var radios = document.getElementsByName('radio_8' + letter);
        console.log(radios);
        var chosenValue= "";
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                chosenValue = radios[i].value; 
                break;
            }
        }
        console.log(chosenValue)

        element_explanation_paragraph.appendChild(element_explanation);
        element_explanation_paragraph.innerHTML = explanation;
        form.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue) {
            func += 1
            element_explanation_paragraph.innerHTML = 'CORRECT '+ element_explanation_paragraph.innerHTML
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textCoinnerHTMLntent = 'INCORRECT '+ element_explanation_paragraph.innerHTML
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
        MathJax.typeset();
    });
}


//question 9
function question9(){
    question.textContent = 'Let the function ';
    question.innerHTML += String.raw`$f$ be of graph as below. What is the new $f$ after the transformations on the graph?`
    MathJax.typeset();

    var target = document.createElement("div");
    target.setAttribute('id','myFunction9',)
    question.appendChild(target);
    var parameters = {
        target: '#myFunction9',
        title: 'f(x)',
        data: [{
          fn: '-(x+1)*(x-2)*x^2', 
          color: 'blue'
       }],
        grid: true,
        yAxis: {domain: [-4, 4]},
        xAxis: {domain: [-4, 4]}
      };
    functionPlot(parameters);


    makePlots9(question, 'a', 'I. ', '-(x)*(x-3)*(x-1)^2');
    makePlots9(question, 'b', 'II. ', '-2*(x+1)*(x-2)*x^2');
    makePlots9(question, 'c', 'III. ', '(-(x+1)*(x-2)*x^2)+ 2');
    makePlots9(question, 'd', 'IV. ', '(x+1)*(x-2)*x^2');
    makePlots9(question, 'e', 'V. ', '-(-x+1)*(-x-2)*(-x)^2');

    processTextInput9('f(x-2)','f(x - 2)', 'a', String.raw`$f(x-2)$`);
    processTextInput9('2f(x)','2*f(x)', 'b', String.raw`$2f(x)$`);
    processTextInput9('f(x)+2','f(x) + 2', 'c', String.raw`$f(x)+2$`);
    processTextInput9('-f(x)','-1*f(x)', 'd', String.raw`$-f(x)$`);
    processTextInput9('f(-x)','-f((-1)*x)', 'e', String.raw`$f(-x)$`);
}

function makePlots9(element, letter, paragraphString, funcString){
    var target = document.createElement("div");
    var paragraph = document.createElement("p");
    var paragraph_sta = document.createTextNode(paragraphString);
    var text_input = document.createElement("input");
    text_input.setAttribute("type", "text");
    text_input.setAttribute("id", "text9_" + letter);
    text_input.setAttribute("value", "");
    text_input.style.margin = '10px';
    paragraph.setAttribute("id", "paragraph9_" + letter)
    paragraph.appendChild(paragraph_sta);
    paragraph.appendChild(text_input);

    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id","btnid9_" + letter);
    paragraph.appendChild(button);

    element.appendChild(paragraph);
    element.appendChild(target);

    target.setAttribute('id','myFunction9_' + letter);

    var parameters = {
        target: '#myFunction9_' + letter,
        data: [{
          fn: funcString, 
          color: 'blue'
       }],
        grid: true,
        yAxis: {domain: [-4, 4]},
        xAxis: {domain: [-4, 4]}
      };
    functionPlot(parameters);
}

function processTextInput9(actualValue1,actualValue2, letter, explanation){
    //process button submit for text question
    var button = document.getElementById("btnid9_" + letter);
    var paragraph = document.getElementById("paragraph9_" + letter);


    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(explanation);
        var input = document.getElementById("text9_" + letter);
        var chosenValue= input.value;
        element_explanation_paragraph.appendChild(element_explanation);
        paragraph.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue1 || chosenValue === actualValue2) {
            graph += 1
            element_explanation_paragraph.textContent = 'CORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textContent = 'INCORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
        MathJax.typeset();
    });
}


//question 10
function question10(){
    question.textContent = 'How many roots do the functions have in the indicated domain?'

    createTextInput10(question, 'a',  String.raw`I. $f(x)=\sin x$ on $[0,2\pi]$`);
    createTextInput10(question, 'b',  String.raw`II. $f(x)=\sin x$ on $[0,2\pi)$`);
    createTextInput10(question, 'c',  String.raw`III. $f(x)=10\sin x$ on $[0,2\pi]$`);
    createTextInput10(question, 'd',  String.raw`IV. $f(x)=x^2$ on $\mathbb{R}$`);
    createTextInput10(question, 'e',  String.raw`V. $f(x)=\log x$ on $\mathbb{R}^+$`);
    createTextInput10(question, 'f',  String.raw`VI. $f(x)=e^x-2$ on $\mathbb{R}$`);
    createTextInput10(question, 'g',  String.raw`VII. $f(x)=|x|-\sqrt{\pi}$ on $\mathbb{R}$`);
    makePlots10(question, 'h',  String.raw`VIII. $f$ on $[-5,5]$ where the graph of $f$ is below`, '(x-2)(x-3)(x+1)');
    makePlots10(question, 'j',  String.raw`IX. $f$ on $\mathbb{R}$ where the graph of $f$ is below`, 'x^2+2');
    makePlots10(question, 'i',  String.raw`X. $f$ on $\mathbb{R}$ where the graph of $f$ is below`, '2');

    processTextInput10('3','3 ', 'a', '3', 'func');
    processTextInput10('2','2 ', 'b', '2', 'func');
    processTextInput10('3','3 ', 'c', '3', 'func');
    processTextInput10('1','1 ', 'd', '1', 'func');
    processTextInput10('1','1 ', 'e', '1', 'func');
    processTextInput10('1','1 ', 'f', '1', 'func');
    processTextInput10('2','2 ', 'g', '2', 'func');
    processTextInput10('3','3 ', 'h', '3 (recall that for graphs, the number of roots equals the number of times the graph crosses the x-axis)', 'graph');
    processTextInput10('0','0 ', 'i', '0', 'graph');
    processTextInput10('0','0 ', 'j', '0', 'graph');
}


function createTextInput10(element, spc_letter, quest_string){
    var paragraph = document.createElement('paragraph');
    paragraph.setAttribute('id', 'paragraph10_' + spc_letter)

    var linebreak = document.createElement("br");
    paragraph.appendChild(linebreak);


    var question_paragraph = document.createElement("p");
    const question_paragraph_sta = document.createTextNode("");
    question_paragraph.appendChild(question_paragraph_sta);
    question_paragraph.innerHTML = quest_string;
    paragraph.appendChild(question_paragraph);

    // text
    var text_input = document.createElement("input");
    text_input.setAttribute("type", "text");
    text_input.setAttribute("id", "text10_" + spc_letter);
    text_input.setAttribute("value", "");
    text_input.style.margin = '10px';
    question_paragraph.appendChild(text_input);


    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id","btnid10_" + spc_letter);
    question_paragraph.appendChild(button);

    element.appendChild(paragraph);
    MathJax.typeset();
}

function makePlots10(element, letter, paragraphString, funcString){
    var target = document.createElement("div");
    var paragraph = document.createElement("p");
    var paragraph_sta = document.createTextNode("");
    var text_input = document.createElement("input");
    text_input.setAttribute("type", "text");
    text_input.setAttribute("id", "text10_" + letter);
    text_input.setAttribute("value", "");
    text_input.style.margin = '10px';
    paragraph.setAttribute("id", "paragraph10_" + letter)
    paragraph.appendChild(paragraph_sta);
    paragraph.innerHTML += paragraphString;
    paragraph.appendChild(text_input);
    

    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id","btnid10_" + letter);
    paragraph.appendChild(button);

    element.appendChild(paragraph);
    element.appendChild(target);

    target.setAttribute('id','myFunction10_' + letter);

    var parameters = {
        target: '#myFunction10_' + letter,
        data: [{
          fn: funcString, 
          color: 'blue'
       }],
        grid: true,
        yAxis: {domain: [-4, 4]},
        xAxis: {domain: [-5, 5]}
      };
    functionPlot(parameters);
    MathJax.typeset();

}

function processTextInput10(actualValue1,actualValue2, letter, explanation, type){
    //process button submit for text question
    var button = document.getElementById("btnid10_" + letter);
    var paragraph = document.getElementById("paragraph10_" + letter);


    button.addEventListener ("click", () => {
        var element_explanation_paragraph = document.createElement("p");
        var element_explanation =  document.createTextNode(explanation);
        var input = document.getElementById("text10_" + letter);
        var chosenValue= input.value;
        element_explanation_paragraph.appendChild(element_explanation);
        paragraph.appendChild(element_explanation_paragraph)
        if (chosenValue === actualValue1 || chosenValue === actualValue2) {
            if (type === 'func') {
                func += 1;
                } else {
                graph += 1;
                }
            element_explanation_paragraph.textContent = 'CORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'green'
            } else {
            element_explanation_paragraph.textContent = 'INCORRECT '+ element_explanation_paragraph.textContent
            element_explanation_paragraph.style.color = 'red'
            }
        button.disabled = true;
        MathJax.typeset();
    });
}


function results(){
    question.textContent = ''
    var title = document.createElement("h2");
    title.textContent = 'RESULTS';
    title.style.fontSize =  '25'
    question.append(title);

    var algebra_title = document.createElement("h3"); 
    algebra_title.textContent = 'Algebra: '+ algebra + '/20';
    algebra_title.style.fontSize =  '18';
    question.appendChild(algebra_title);
    var algebra_paragraph =  document.createElement("p");
    algebra_paragraph.textContent = 'This corresponds to sections 1.1 to 1.4 and chapter 3 in Stewart\'s book';
    question.appendChild(algebra_paragraph);


    var func_title = document.createElement("h3"); 
    func_title.textContent = 'Special functions: '+ func + '/21';
    func_title.style.fontSize =  '18';
    question.appendChild(func_title);
    var func_paragraph =  document.createElement("p");
    func_paragraph.textContent = 'This corresponds to chapters 4 to 7 in Stewart\'s book';
    question.appendChild(func_paragraph);


    var graph_title = document.createElement("h3"); 
    graph_title.textContent = 'Graphical analysis: '+ graph + '/17';
    graph_title.style.fontSize =  '18';
    question.appendChild(graph_title);
    var graph_paragraph =  document.createElement("p");
    graph_paragraph.textContent = 'This corresponds to sections 1.8 to 1.11 and 2.1 to 2.3 in Stewart\'s book';
    question.appendChild(graph_paragraph);

    var a = document.createElement('a');
    a.setAttribute('href', 'https://www.amazon.com/Precalculus-Mathematics-Calculus-Standalone-Book/dp/1305071751');
    a.innerHTML = 'By the way, you can find Stewart\'s pre-calculus book clicking here.';  
    question.appendChild(a);

    let btn = document.createElement("button");
    btn.innerHTML = "Return";
    btn.id ="return";
    document.body.appendChild(btn);
    btn.addEventListener('click', () => {
        location.reload();
      });
}

