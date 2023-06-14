import React, { useState } from 'react';
import { Board, ResetGame, ShowInfo } from './components';
import { calculateWinner } from './logics.js';

export const Task = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [filledCells, setFilledCells] = useState(0);
    const winner = calculateWinner(board);

    // Обработка клика по ячейке
    const handleClick = (index) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return false;
        boardCopy[index] = xIsNext ? 'X' : 'O';

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        setFilledCells(filledCells + 1);
    };

    return (
        <>
            <ShowInfo winner={winner} filledCells={filledCells} xIsNext={xIsNext} />
            <Board cells={board} click={handleClick} />
            <ResetGame setBoard={setBoard} setFilledCells={setFilledCells} setXIsNext={setXIsNext} />
        </>
    );
};
