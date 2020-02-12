// Можно сделать поиск элементов в массиве через
// добавление классов с номером строки и колонки. 
// Это если делать консольный вариант

/*
	Но поскольку работа в браузере, но не вижу смысла не читать блоки DOMа.
*/


let game = document.querySelector('#game');
let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td = document.createElement('td');
const elements = ['♣', '♥', '♦', '♠'];
let rowsNumberInput = document.querySelector('#rowsNumber');
let columnsNumberInput = document.querySelector('#columnsNumber');
let createButton = document.querySelector('#createButton');

let rowsNum,
	colNum,
	// rows = [];
	playZone = [];

let row = []

createButton.addEventListener('click', () => {
	rowsNum = rowsNumberInput.value;
	columnsNum = columnsNumberInput.value;
	// rows = [];

	// for (let i = 0; i < columnsNum; i++) {
	// 	rows[i] = getRandomInt(4);
	// }
	// for (let i in columnsNum) {
	// 	let symbolsInRow = [];

	// 	for (let j = 0; j < rowsNum; j++) {
	// 		symbolsInRow[j] = createColumns(columnsNum); // rows
	// 		playZone[i] = symbolsInRow[j];
	// 	}
	// }


	for (let i = 0; i < rowsNum; i++) {
		row = []; // for each row we create a new array

		for (let j = 0; j < columnsNum; j++) {
			// row = [];
			row[j] = getRandomInt(4); // for each td in row we create a random value
		}
		playZone[i] = row;
		// row = []
	}

	console.log(playZone)
	
	// for (let i = 0; i < columnsNum; i++) {
	// 	playZone[i].push(getRandomInt(4));
	// }

	// console.log(rows);
	createGame();
});

function createGame() {

	console.log(playZone)
	for (let i in playZone) {
		let tr = document.createElement('tr');

		for (let j in playZone[i]) {
			let td = document.createElement('td')
			td.innerHTML = playZone[i][j];
			td.classList.add(`row-${i}`);
			td.classList.add(`col-${j}`);
			td.addEventListener('click', (e) => {handleClick(e, i, j)})
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

}

function handleClick(event, row, column) {
	let value = event.target.innerHTML;
	let target = event.target;
	// target.innerHTML = '';

	// setTimeout(() => {
	// 	const randomElem = getRandomInt(4);
	// 	target.innerHTML = randomElem;
	// 	playZone[row][column] = randomElem;
	// 	console.log(playZone)
	// }, 1000);

	checkSameElements(value, row, column)
	
	
	// console.log(event.target.innerHTML);
	// console.log(elements.indexOf(event.target.innerHTML));
	// console.log(row, column);
}

function checkSameElements(value, row, column) {
	let sameElemsArray = [];
	let matrix6 = Number(column) + 1;

	// console.log(typeof(column))

	// console.log(playZone[row][matrix6])

	if (playZone[row][matrix6] && playZone[row][matrix6] === value) { // right to entry
		console.log(true)
	} else if (playZone[row][Number(column)-1] && playZone[row][Number(column)-1] === value) { // left to entry
		console.log(true)
	} else if (playZone[Number(row-1)][column] && playZone[Number(row-1)][column] === value) { // down to entry
		console.log(true)
	} else if (playZone[Number(row+1)][column] !== undefined && playZone[Number(row+1)][column] === value) {
		console.log(true)
	} else {
		console.log(false)
	}
}

function createColumns(num) {
	for (let i = 0; i < num; i++) {
		return getRandomInt(4);
	}
}

function getRandomInt(max) {
	return elements[Math.floor(Math.random() * Math.floor(max))];
}

game.appendChild(table);
/*

<table>
	<tr>
		<td>...</td>
	</tr>
</table>

*/

// let div = document.createElement('div');
// div.innerHTML = elements[0];

// game.appendChild(div);