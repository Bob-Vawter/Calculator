// clear should always reset calc display and functions to 0
// backspace should removed a number from screen and remove any pressed math fucctions
// equals function should process math function and output value to screen
// number buttons should concat to number in screen

// store display field
let display = document.getElementById('display')
// keep track of if decimal has been used in display
let decimalUse = 0
// buttons should store all buttons
let buttons = document.getElementsByClassName('btn')

// button listener asign a listener to all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',calculator)
  function calculator () {
    let mathFunc = ["*","/","-","+"]
    let numbers = ["0","1","2","3","4","5","6","7","8","9"]
    let buttonPressed = buttons[i].getAttribute("id")
    let equalEval = ""

    console.log(buttonPressed)
    //deal with math buttons, append if last one not a math func, replace otherwise
    if(mathFunc.includes(buttonPressed)){
      decimalUse = 0
      if(mathFunc.includes(display.value.slice(-1))){
        display.value = display.value.slice(0,-1) + buttonPressed
      } else {
        display.value = display.value + buttonPressed
      }
    }
    // add number to display, if display 0 remove 0 and add new number
    else if (numbers.includes(buttonPressed)){
      if(display.value === "0"){
        display.value = buttonPressed
      } else {
        display.value = display.value + buttonPressed
      }
    }
    // add decimal if decimal has not been used, will set decimal use to 0 on clear and after math functions
    else if (buttonPressed === "."){
      if(decimalUse === 0){
        display.value = display.value + "."
        decimalUse = 1
      }
    }
    // add remove negative sign in front of number, allows for add, divide and multiple negative numbers
    else if (buttonPressed === "negative"){
      if(display.value.slice(-1) === "-"){
        display.value = display.value.slice(0,-1)
      } else if(display.value === "0"){
        display.value = "-"
      } else {
        display.value = display.value + "-"
      }
      if (display.value === ""){
        display.value = 0
      }
    }
    // when equal is press evaluate all math in display
    else if (buttonPressed === "equal"){
      equalEval = display.value
      display.value = eval(equalEval)
    }
    // clear display reset to 0
    else if (buttonPressed === "clear") {
      display.value = 0
      decimalUse = 0
    }
    //  backspace, if decimal is deleted remove decimal use counter
    else if (buttonPressed === "delete") {
      let sliced = display.value.slice(-1)
      if(sliced==="."){
        decimalUse = 0
      }
      display.value = display.value.slice(0,-1)
      if (display.value === ""){
        display.value = 0
      }
    }
  }
}
