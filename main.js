let game = document.querySelector('#game'),
	table = document.createElement('table'),
	rowsNumberInput = document.querySelector('#rowsNumber'),
	columnsNumberInput = document.querySelector('#columnsNumber'),
	createButton = document.querySelector('#createButton'),
	rowsNum,
	colNum,
	playZone = [],
	row = [];

const elements = ['♣', '♥', '♦', '♠'];

createButton.addEventListener('click', () => {
	rowsNum = rowsNumberInput.value;
	columnsNum = columnsNumberInput.value;
	playZone = [];

	for (let i = 0; i < rowsNum; i++) {
		row = [];

		for (let j = 0; j < columnsNum; j++) {
			row[j] = getRandomElem(elements.length);
		}
		playZone[i] = row;
	}

	createGame();
});

function createGame() {
	table.innerHTML = '';

	for (let i in playZone) {
		let tr = document.createElement('tr');

		for (let j in playZone[i]) {
			let td = document.createElement('td');
			td.innerHTML = playZone[i][j];
			td.classList.add(`row-${i}`);
			td.classList.add(`col-${j}`);
			td.addEventListener('click', (e) => {handleClick(e, i, j)})
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	table.classList.add('bordered');
}

function handleClick(e) {
	let target = e.target,
		trNum = target.parentNode.rowIndex,
		tdNum = target.cellIndex,
		val = target.textContent;

	removeElem(val, trNum, tdNum);
}

function removeElem(val, i, j) {
	if (playZone[i] && playZone[i][j] && playZone[i][j] === val) {
		playZone[i][j] = '';

		removeElem(val, i+1, j);
		removeElem(val, i-1, j);
		removeElem(val, i, j+1);
		removeElem(val, i, j-1);

		for (let i in playZone) {
			for (let j in playZone[i]) {
				if (playZone[i][j] === '') {
					document.querySelector(`.row-${i}.col-${j}`).innerHTML = '';

					setTimeout(() => {
						let rand = getRandomElem(elements.length)
						document.querySelector(`.row-${i}.col-${j}`).innerHTML = rand;
						playZone[i][j] = rand;
					}, 1000)
				}
			}
		}
	}
}

function getRandomElem(max) {
	return elements[Math.floor(Math.random() * Math.floor(max))];
}

game.appendChild(table);