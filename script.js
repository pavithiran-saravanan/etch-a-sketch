const container = document.querySelector('#container');
const containerWidth = container.clientWidth;
let len = 16;
const getUserValue = document.querySelector('.prompt');
const clearBtn = document.querySelector('.clear');

function generateCells(){
    for(let i = 0; i < len; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id', `row-${i}`);
        let l = containerWidth/len;
        for(let j = 0; j < len; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `cell-${i}-${j}`);
            cell.style.width = l + 'px';
            cell.style.height = l + 'px';
            cell.style.border = '0.2px solid rgb(0, 153, 0)'
            cell.style.backgroundColor = 'lightgreen';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function clearCells(){
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        container.removeChild(row);
    })
}

// Add eventlisterner to each of the cells present in the container such that they change color on hover
function addHoverListener(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        cell.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'green';
        });
    });
}

generateCells();
addHoverListener();

// Write a func to get cells count from user through a promt on the click of button
getUserValue.addEventListener('click',  (e)=>{
    const userInput = prompt("Please Enter A Value Between 1 & 100");
    if(isNaN(userInput) || (userInput < 1 || userInput > 100)){
        alert("You Entered An Incorrect Value")
    }
    else len = userInput;
    clearCells();
    generateCells();
    addHoverListener();
});



// clear btn on click clears canvas
clearBtn.addEventListener('click', (e)=>{
    clearCells();
    generateCells();
    addHoverListener();
});