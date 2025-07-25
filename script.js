let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#reset')
let newGameBtn = document.querySelector('#new-game')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turnO = true

const winPatterns = [
  [0,1,2],
  [1,3,6],
  [0,4,8],
  [1,4,7],
  [1,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

const resetGame = () => {
  turn0 = true
  enableBoxes()
  msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if(turnO){
      box.innerHTML = 'O'
      turnO = false
    } else {
      box.innerHTML = 'X'
      turnO = true
    }
    box.disabled = true

    checkWinner();
  })
})

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true
  }
}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false
    box.innerHTML = ""
  }
}

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ${winner}`
  msgContainer.classList.remove("hide")
  disableBoxes()
}

const checkWinner = () => {
  for(let pattern of winPatterns){
    let pos1Val  = boxes[pattern[0]].innerHTML
    let pos2Val  = boxes[pattern[1]].innerHTML
    let pos3Val  = boxes[pattern[2]].innerHTML

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log('won', pos1Val)
        showWinner(pos1Val)
      }
    }
  }
}

newGameBtn.addEventListener('click', resetGame)
reset.addEventListener('click', resetGame)