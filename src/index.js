const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
]

const memoryGame = new MemoryGame(cards)

window.addEventListener('load', (event) => {
  let html = ''
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" id="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>`
  })

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      let isPair = false
      let isTurned = false

      if (isTurned) {
        card.classList.remove('turned')
        isTurned=false
        console.log(card)
      } else{
        card.classList.add('turned')
        isTurned=true
        console.log(card)

      }
        
      memoryGame.pickedCards.push(card.id)
      let currentSuperIndex = memoryGame.pickedCards.length - 1
      let previousSuperIndex = memoryGame.pickedCards.length - 2
      if (memoryGame.pickedCards.length % 2 === 0) {
        isPair = memoryGame.checkIfPair(
          memoryGame.pickedCards[currentSuperIndex],
          memoryGame.pickedCards[previousSuperIndex]
        )
        if (isPair) {
          memoryGame.pairsClicked++
          if (memoryGame.checkIfFinished()) {
            alert('you won')
          }
        }
      }
    })
  })
})
