const quizData = [
    {
        question: "What is the name of the imaginary line that divides the world into Western and Eastern hemispheres?",
        a: "The equator",
        b: "The Tropic of Cancer",
        c: "The North Pole",
        d: "The prime meridian",
        correct: "d",
    },
    {
        question: "Which of these words is not a palindrome?",
        a: "Kayak",
        b: "Race car",
        c: "Mom",
        d: "Moo",
        correct: "d",
    },
    {
        question: "Which is the fastest bird in the world?",
        a: "Bald Eagle",
        b: "Peregrine Falcon",
        c: "Hummingbird",
        d: "Raven",
        correct: "b",
    },
    {
        question: "What is the tallest waterfall in the world?",
        a: "Angel Falls, Venezuela",
        b: "Niagara Falls, New York",
        c: "Wailua Falls, Hawaii",
        d: "Sutherland Falls, New Zealand",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('quest');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');

const showScroe = document.querySelector('#showScore')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answers.forEach(currAnsEl => currAnsEl.checked = false)
}

function getSelected() {
    let answer
    answers.forEach((currAnsEl) => {
        if(currAnsEl.checked) 
        {
            answer = currAnsEl.id
        }
    })
    return answer
}

console.log(submitBtn)

submitBtn.addEventListener('click', () => 
{
    const ans = getSelected()
    console.log(currentQuiz)
    console.log(ans)
    if(ans) 
    {
       if(ans === quizData[currentQuiz].correct)
       {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length)
       {

            console.log(currentQuiz)
            console.log(quizData.length)
            loadQuiz()
       }
       else 
       {
           showScroe.innerHtml = `
                    <h2> You answered ${score}/${quizData.length} questions correctly </h2>
                    <button class = "button1" onclick="location.reload()"> </button>
                `
       }
    }
})