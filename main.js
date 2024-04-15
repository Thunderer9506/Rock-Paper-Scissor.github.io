const close = document.getElementById("rulesImage")
const buttons = document.querySelectorAll(".button")
const user = document.querySelector(".bg_user")
const house = document.querySelector(".bg_house")
const choose = ["rock","paper","scissor"];
let score = 0
let player1 = ""
let player2 = ""

let random = Math.floor(Math.random() * choose.length);
console.log(choose[random]);


function closeButton(){
    close.style.display = "none"
}

function ruleButton(){
    close.style.display = "flex"
}

function winLose(what){
    if (what == "win"){
        document.querySelector(".winLose p").innerText = "YOU WIN"
        document.querySelector(".playAgain").style.color = "hsl(237, 49%, 15%)"
    }
    else if (what == "tie"){
        document.querySelector(".winLose p").innerText = "IT'S A TIE"
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
                record("lose")
            }
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
                record("lose")
            }
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
                record("lose")
            }
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

function houseButtons(choice){
    player2 = choice
    if (choice == "rock"){
        house.style.backgroundColor = "hsl(349, 70%, 56%)"
        house.style.boxShadow = "0px 7px 0px hsl(349, 71%, 50%)"
        document.querySelector(".bg_house img").src = "images/icon-rock.svg"
        document.querySelector(".bg_house button").value = "rock"
    }
    else if (choice == "scissor"){
        house.style.backgroundColor = "hsl(40, 84%, 53%)"
        house.style.boxShadow = "0px 7px 0px hsl(39, 89%, 47%)"
        document.querySelector(".bg_house img").src = "images/icon-scissors.svg"
        document.querySelector(".bg_house button").value = "scissor"
    }
    else if (choice == "paper"){
        house.style.backgroundColor = "hsl(230, 89%, 65%)"
        house.style.boxShadow = "0px 7px 0px hsl(230, 89%, 60%)"
        document.querySelector(".bg_house img").src = "images/icon-paper.svg"
        document.querySelector(".bg_house button").value = "paper"
    }
    engine()
}

function userButtons(event){
    player1 = this.value
    document.querySelector(".play").style.display = "none"
    document.querySelector(".result").style.display = "flex"
    if (this.value == "rock"){
        user.style.backgroundColor = "hsl(349, 70%, 56%)"
        user.style.boxShadow = "0px 7px 0px hsl(349, 71%, 50%)"
        document.querySelector(".bg_user img").src = "images/icon-rock.svg"
        document.querySelector(".bg_user button").value = "rock"
    }
    else if (this.value == "scissor"){
        user.style.backgroundColor = "hsl(40, 84%, 53%)"
        user.style.boxShadow = "0px 7px 0px hsl(39, 89%, 47%)"
        document.querySelector(".bg_user img").src = "images/icon-scissors.svg"
        document.querySelector(".bg_user button").value = "scissor"
    }
    else if (this.value == "paper"){
        user.style.backgroundColor = "hsl(230, 89%, 65%)"
        user.style.boxShadow = "0px 7px 0px hsl(230, 89%, 60%)"
        document.querySelector(".bg_user img").src = "images/icon-paper.svg"
        document.querySelector(".bg_user button").value = "paper"
    }
    houseButtons(choose[random])
}

for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",userButtons)
}


