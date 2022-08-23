window.addEventListener('DOMContentLoaded', () => {
	const tiles = Array.from(document.querySelectorAll('.col'))
	const playerDisplay = document.querySelector('.display-player')
	const resetButton = document.querySelector('#reset')
	const announcer = document.querySelector('#announcer')

	let board = ['', '', '', '', '', '', '', '', '']
	let currentPlayer = 'X'
	let isGameActive = true

	const PLAYERX_WON = 'PLAYERX_WON'
	const PLAYERO_WON = 'PLAYERO_WON'
	const TIE = 'TIE'

	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	function handleResultValidatio() {
		let roundWon = false
	}

	const announce = (type) => {
		switch (type) {
			case PLAYERO_WON:
				announcer.innerHTML = 'Player <span class="playerO">O</span> Won'
				break
			case PLAYERX_WON:
				announcer.innerHTML = 'Player <span class="playerX">X</span> Won'
				break
			case TIE:
				announcer.innerText = 'Tie'
		}
		announcer.classList.remove('hidden')
	}

	const changePlayer = () => {
		playerDisplay.classList.remove('player${currentPlayer}')
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
		playerDisplay.innerText = currentPlayer
		playerDisplay.classList.add('player${currentPlayer}')
	}

	const userAction = (tile, index) => {
		if (isValidAction(tile) && isGameActive) {
			tile.innerText = currentPlayer
			tile.classList.add('player${currentPlayer}')
			updateBoard(index)
			handleResultValidation()
			changePlayer()
		}
	}

	tiles.forEach((tile, index) => {
		tile.addEventListener('click', () => userAction(tile, index))
	})

	resetButton.addEventListener('click', resetBoard)
})

// Gameboard Object - module

// Player Object - factory

// Game Logic - module

// Display Logic - module

// AI Logic - factory?
