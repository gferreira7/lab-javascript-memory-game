class MemoryGame {
  constructor(cards) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }
    let i = this.cards.length

    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1))
      ;[this.cards[randIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randIndex],
      ]
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if(card1 === card2){
      
      this.pairsGuessed++
    } 
    return card1 === card2
  }

  checkIfFinished() {
    // ... write your code here

    return this.pairsGuessed === this.cards.length /2 
    
  }
}
