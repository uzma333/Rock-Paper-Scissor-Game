let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.getElementById("msg")
const userScorePara=document.getElementById("user-score")
const compScorePara=document.getElementById("comp-score")


const drawGame=()=>{
    msg.innerText="Game was draw.Play again"
    msg.style.backgroundColor="#081b31"
}
const shoWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red"
    }
    msg.classList.remove("bounce", "drop");
     void msg.offsetWidth;
     msg.style.opacity = "1";

    if (userWin) {
    msg.classList.add("bounce");
  } else {
    msg.classList.add("drop");
  }
    setTimeout(() => {
    msg.classList.remove("bounce", "drop");
  }, 900); // match with animation duration
}



const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    const ranIdx=Math.floor(Math.random()*3)
    return options[ranIdx]
}

const playGame=(userChoice)=>{
    //console.log("userChoice=",userChoice)
    const compChoice=genCompChoice()
       // console.log("compchoice=",compChoice)

        if(userChoice===compChoice){
           drawGame() 
        }else{
            let userWin=true;
            if(userChoice==="rock"){
                //paper,scissor
               userWin= compChoice==="paper"?false:true
            }else if(userChoice==="paper"){
                //rock,scissor
                userWin=compChoice==="scissor"?false:true;
            }else{
                userWin=compChoice==="rock"?false:true
            }
            shoWinner(userWin,userChoice,compChoice)
        }
    

}

choices.forEach((choice)=>{
  //console.log(choice)
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
   // console.log("choice was clicked",userChoice)
    playGame(userChoice)
  })
})

