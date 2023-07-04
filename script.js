const questions = [
    {
        "que" : "which is the following is a markup languge ? " , 
        'a' : "HTML",
        'b' : "CSS",
        'c' : "JS",
        'd' : "NODE JS",
        'correct' : 'a'
    },  
    {
        "que" : "which is the following is a style sheet languge ? " , 
        'a' : "HTML",
        'd' : "C++",
        'b' : "CSS",
        'c' : "java",
        'correct' : 'b'
    },
      {
        "que" : "which is the following is a sript  languge ? " , 
        'a' : "HTML",
        'b' : "CSS",
        'c' : "JS",
        'd' : "NODE JS",
        'correct' : 'c'
    },
]

let index = 1

let total = questions.length;
let right = 0 ;
 wrong = 0;

let questionsbox = document.getElementById("questionBox")
let optionInput = document.querySelectorAll(".options")


let loadQuestion = () => {


    if(index === total){
        return endQuiz()
    } 
    
    reset()

    let data = questions[index] 
    // console.log(data)
    questionsbox.innerHTML = ` ${index + 1  }) ${data.que} `

    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

let submitQuiz =  () => {
    let data = questions[index]
    const ans = getAnswer()
    console.log(ans , data.correct)
    if(ans == data.correct ){
        right++
    }
    else{
        wrong++
    }
    index++
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value
                // console.log(input.value)
            }
        }
        // return answer;
        )
    return answer;
}

function reset () {
    optionInput.forEach(
    (input) => {
        input.checked = false
    }
    )
}

function endQuiz(){
    document.getElementById("box").innerHTML = 
    `
    <h2>thank you for playing the Quiz!      </h2>
   <h1> ${right} / ${total} are correct ! </h1>
    `
}

console.log(index)

let pre = document.getElementById("pre").addEventListener("click" , function(){
    index = index -1 
   loadQuestion()
 })
let next = document.getElementById("next").addEventListener("click" , function(){
    index = index + 1 
   loadQuestion()
 })







loadQuestion()