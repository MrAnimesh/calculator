
const screen = document.getElementById("display-box")
const buttons = document.querySelectorAll(".work-button")
let buffer = ""
let final = 0
let value1 = 0
let flag = true

function operation(e){
    if (e == "+" || e == "×" || e == "÷"|| e == "−" || e=="%"){
        operator = e
        fetchFirstValue()
        buffer =""
    }else if(e == "="){
        equals(operator)
    }else if(e == "AC"){
        screen.innerText="0"
        buffer = ""
        final = value1  = 0
        flag = true
    }else if(e=="←"){
        buffer = buffer.slice(0,-1)
        screen.innerText = buffer
        flag = true
    }else{
        buffer += e
        screen.innerText = buffer
    }
}

function fetchFirstValue(){
    if (flag){
        value1 = parseFloat(buffer)
        buffer = ""
        flag = false
    }else{
        value1 = final
        buffer = ""
    }
}

function equals(e){
    let value2 = parseFloat(screen.innerText)
    switch(e){
        case "×":final = value1 * value2
                break
        case "+":final = value1 + value2
                break
        case "−":final = value1 - value2
                break
        case "÷":final = value1 / value2
                break
        case "%":final = value1 % value2
                break
    }
    if((String(final)).length<8)
        screen.innerText = final
    else 
        screen.innerText = final.toFixed(10)+"e"
}

function buttonClick(){
    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            console.log(e.target)
            operation(e.target.innerText)
        })
    })
}
buttonClick()




















// function equals(e){
//     let value2 = 0
//     value2 = parseFloat(screen.innerText)
//     switch(e){
//         case "×":
//             // value2 = parseInt(screen.innerText)
//             final = value1 * value2
//             // screen.innerText = final
//             break
//         case "+":
//             // value2 = parseInt(screen.innerText)
//             final = value1 + value2
//             // screen.innerText = final
//             break
//         case "−":
//             // value2 = parseInt(screen.innerText)
//             final = value1 - value2
//             // screen.innerText = final
//             break
//         case "÷":
//             // value2 = parseInt(screen.innerText)
//             final = value1 / value2
//             // screen.innerText = final.toFixed(4)
//             break
//     }
//     screen.innerText = final.toFixed(10) 
// }
