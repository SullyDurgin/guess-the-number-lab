const game = {
	title: 'Guess the Number!',
	biggestNum: 100,
	smallestNum: 1,
	secretNum: null,
	prevGuesses: [],
	play: function () {
		this.secretNum =
			Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
			this.smallestNum
	
//What is the guess?
//What happens when a guess is entered?

let guess = parseInt(this.getGuess())
let result = this.render(this.secretNum, guess)
//Keep going until the entered guess = true
		while (!result) {
			let guess = parseInt(this.getGuess())
			this.render(this.secretNum, guess)
		}
	},
	getGuess: function () {
		let guess = window.prompt(
			'Enter a guess between ' + this.smallestNum + ' and ' + this.biggestNum
		)
		return guess
	},
	render: function (secret, guess) {
		let guesses = ''
		for (let i = 0; i < this.prevGuesses.length; i++) {
			guesses += this.prevGuesses[i] + ', '
		}
		guesses += guess
		if (guess == secret) {
			window.alert(
				'Congrats! You guessed the number in ' +
					this.prevGuesses.length +
					' Guesses'
			)
			return true
		}
//too high if it is greater than the secret number
		else if (guess > secret) {
			this.prevGuesses.push(guess)
			window.alert('Your guess is too high ' + this.prevGuesses)
		}
//if the input doesn't equal the secret number or is not too high then it is too low
		else {
			this.prevGuesses.push(guess)
			window.alert('Your guess is too low ' + this.prevGuesses)
		}
		return false
	},
}
game.play()
