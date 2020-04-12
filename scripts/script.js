const board = document.querySelector("#board");
const clear = document.querySelector("#clear");
const resize = document.querySelector("#resize");

clear.addEventListener("click", clearBoard);
resize.addEventListener("click", resizeBoard);

function fillInSquare(e)
{
    e.target.classList.add("colored");
}

function clearBoard()
{
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.classList.remove("colored"));
}

function resizeBoard()
{
    let response;
    while (true)
    {
        response = window.prompt("How many squares per side? (Maximum of 64)");
        if (response === null)
            return;
        response = Number(response);
        if (!Number.isInteger(response))
            continue;
        if (response < 1 || response > 64)
            continue;
        break;
    }

    while (board.firstChild)
    {
        board.removeChild(board.firstChild);
    }

    board.style.gridTemplateColumns = `repeat(${response}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${response}, 1fr)`;

    for (let i = 0; i < response; ++i)
    {
        for (let j = 0; j < response; ++j)
        {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", fillInSquare);
            board.appendChild(square);
        }
    }
}

for (let i = 0; i < 16; ++i)
{
    for (let j = 0; j < 16; ++j)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", fillInSquare);
        board.appendChild(square);
    }
}