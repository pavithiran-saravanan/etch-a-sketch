const container = document.querySelector('#container');
const containerWidth = container.clientWidth;
let len = 16;
const getUserValue = document.querySelector('.prompt');
const clearBtn = document.querySelector('.clear');
let rgb = 0;

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
            cell.style.border = '1px solid #eee'
            // cell.style.borderRadius = '5px';
            cell.style.backgroundColor = '#ddd';
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

function resetColor(){
    console.log('reset');
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {cell.style.backgroundColor = '#ddd'});
}

// Add eventlisterner to each of the cells present in the container such that they change color on hover
function addHoverListener(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        cell.addEventListener('mouseover', (e)=>{
            if(rgb) e.target.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()}`;
            else{
                const color = getComputedStyle(e.target).backgroundColor;
                const r = color.split(',')[0].split('(')[1] * 0.7;
                const g = color.split(',')[1] * 0.7;
                const b = color.split(',')[2].split(')')[0] * 0.7;
                const targetColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.backgroundColor = targetColor;
            }
        });
    });
}

generateCells();
addHoverListener();

// Write a func to get cells count from user through a promt on the click of button
getUserValue.addEventListener('click',  (e)=>{
    const userInput = prompt("Enter No Of Rows Or Columns (1 to 100)");
    if(userInput == null) return;
    if(isNaN(userInput) || (userInput < 1 || userInput > 100)){
        alert("Incorrect Input. Please Select Between 1 to 100")
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


// Generate a random number between 0 and 150
function rand(){
    return Math.floor(Math.random() * 250);
}      

const rgbButton = document.querySelector('.rgb');
function toggleRGB(){
    resetColor();
    const title  = document.querySelector('.title');
    title.classList.toggle('title-rgb');
    const github = document.querySelector('.github-link');
    github.classList.toggle('github-link-rgb');
    rgbButton.classList.toggle('rgb-on');
    rgb = !rgb;
}
rgbButton.addEventListener('click', toggleRGB);