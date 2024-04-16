const close = document.getElementById("rulesImage")
const buttons = document.querySelectorAll(".button")
const user = document.querySelector(".bg_user")
const house = document.querySelector(".bg_house")
const choose = ["rock","paper","scissor"];
let score = 0
let player1 = ""
let player2 = ""

let random
choosefunction()

function closeButton(){
    close.style.display = "none"
}

function ruleButton(){
    close.style.display = "flex"
}

function choosefunction(){
    random = Math.floor(Math.random() * choose.length);
    console.log(choose[random]);
}

function playagainButton(){
    document.querySelector(".play").style.display = "flex"
    document.querySelector(".result").style.display = "none"
    choosefunction()
}


function winLose(what){
    if (what == "win"){
        document.querySelector(".winLose p").innerText = "YOU WIN"
        document.querySelector(".playAgain").style.color = "hsl(237, 49%, 15%)"
    }
    else if (what == "lose"){
        document.querySelector(".winLose p").innerText = "YOU LOSE"
        document.querySelector(".playAgain").style.color = "hsl(349, 71%, 52%)"
    }
    else if (what == "tie"){
        document.querySelector(".winLose p").innerText = "IT'S A TIE"
        document.querySelector(".playAgain").style.color = "hsl(349, 71%, 52%)"
    }
}

function record(what){
    document.querySelector('.score').innerText = score.toString()
    winLose(what)
}

function engine(){
    if (player1 == "rock"){
        if (player2 == "paper"){
            if (score != 0){
                score  = score - 1
            }
            record("lose")
        }
        else if (player2 == "scissor"){
            score  = score + 1
            record("win")
        }
        else if (player1 == player2){
            record("tie")
        }
    }
    else if (player1 == "paper"){
        if (player2 == "scissor"){
            if (score != 0){
                score  = score - 1
            }
            record("lose")
        }
        else if (player2 == "rock"){
            score  = score + 1
            record("win")
        }
        else if (player1 == player2){
            record("tie")
        }
    }
    else if (player1 == "scissor"){
        if (player2 == "rock"){
            if (score != 0){
                score  = score - 1
            }
            record("lose")
        }
        else if (player2 == "paper"){
            score  = score + 1
            record("win")
        }
        else if (player1 == player2){
            record("tie")
        }
    }
}

function button(choice,where,which){
    if (choice == "rock"){
        which.style.backgroundColor = "hsl(349, 70%, 56%)"
        which.style.boxShadow = "0px 7px 0px hsl(349, 71%, 50%)"
        where.concat(" button")
        document.querySelector(where.concat(" img")).src = "images/icon-rock.svg"
        document.querySelector(where.concat(" button")).value = "rock"
    }
    else if (choice == "scissor"){
        which.style.backgroundColor = "hsl(40, 84%, 53%)"
        which.style.boxShadow = "0px 7px 0px hsl(39, 89%, 47%)"
        document.querySelector(where.concat(" img")).src = "images/icon-scissors.svg"
        document.querySelector(where.concat(" button")).value = "scissor"
    }
    else if (choice == "paper"){
        which.style.backgroundColor = "hsl(230, 89%, 65%)"
        which.style.boxShadow = "0px 7px 0px hsl(230, 89%, 60%)"
        document.querySelector(where.concat(" img")).src = "images/icon-paper.svg"
        document.querySelector(where.concat(" button")).value = "paper"
    }
}

function houseButtons(choice){
    player2 = choice
    button(choice,".bg_house",house)
    engine()
}

function userButtons(event){
    player1 = this.value
    document.querySelector(".play").style.display = "none"
    document.querySelector(".result").style.display = "flex"
    button(this.value,".bg_user",user)
    houseButtons(choose[random])
}

for (let i=2;i<buttons.length;i++){
    buttons[i].addEventListener("click",userButtons)
}


