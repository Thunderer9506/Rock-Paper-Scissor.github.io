const close = document.getElementById("rulesImage")
const buttons = document.querySelectorAll(".button")
const user = document.querySelector(".bg_user")
// document.querySelector(".bg_house button").style.display = "none"
// document.querySelector(".houseButton .bg_house").classList.remove("bg_house")


function closeButton(){
    close.style.display = "none"
}

function ruleButton(){
    close.style.display = "flex"
}

function playButtons(event){
    console.log(this.value)
    document.querySelector(".play").style.display = "none"
    document.querySelector(".result").style.display = "flex"
    document.querySelector(".emptyBackground button").style.display = "none"
    if (this.value == "rock"){
        user.style.backgroundColor = "hsl(349, 70%, 56%)"
        user.style.boxShadow = "0px 7px 0px hsl(349, 71%, 50%)"
        document.querySelector(".bg_user img").src = "images/icon-rock.svg"
    }
    else if (this.value == "scissor"){
        user.style.backgroundColor = "hsl(40, 84%, 53%)"
        user.style.boxShadow = "0px 7px 0px hsl(39, 89%, 47%)"
        document.querySelector(".bg_user img").src = "images/icon-scissors.svg"
    }
    else if (this.value == "paper"){
        user.style.backgroundColor = "hsl(230, 89%, 65%)"
        user.style.boxShadow = "0px 7px 0px hsl(230, 89%, 60%)"
        document.querySelector(".bg_user img").src = "images/icon-paper.svg"
    }
    
}

for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",playButtons)
}


