// Можно сделать поиск элементов в массиве через
// добавление классов с номером строки и колонки. 
// Это если делать консольный вариант

/*
	Но поскольку работа в браузере, но не вижу смысла не читать блоки DOMа.
*/


let game = document.querySelector('#game');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td')
const elements = ['&clubs;', '&hearts;', '&diams;', '&spades;'];
let rowsNumberInput = document.querySelector('#rowsNumber');
let columnsNumberInput = document.querySelector('#columnsNumber');
let createButton = document.querySelector('#createButton');

let rowsNum,
	colNum,
	rows = [];
	playZone = [];

createButton.addEventListener('click', () => {
	rowsNum = rowsNumberInput.value;
	columnsNum = columnsNumberInput.value;
	rows = [];

	// for (let i = 0; i < columnsNum; i++) {
	// 	rows[i] = getRandomInt(4);
	// }

	for (let i = 0; i < rowsNum; i++) {
		rows[i] = createColumns(columnsNum); // rows
		playZone[i] = rows;
	}

	// for (let i = 0; i < columnsNum; i++) {
	// 	playZone[i].push(getRandomInt(4));
	// }

	console.log(playZone);
});

function createColumns(num) {
	for (let i = 0; i < num; i++) {
		return rows[i] = getRandomInt(4);
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