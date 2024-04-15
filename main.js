const close = document.getElementById("rulesImage")
const buttons = document.querySelectorAll(".button")
const user = document.querySelector(".bg_user")
const house = document.querySelector(".bg_house")
const choose = ["rock","paper","scissor"];

let random = Math.floor(Math.random() * choose.length);
console.log(random, choose[random]);


function closeButton(){
    close.style.display = "none"
}

function ruleButton(){
    close.style.display = "flex"
}
function houseButtons(choice){
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
}



function userButtons(event){
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


