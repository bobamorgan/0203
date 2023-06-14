import React from 'react';
import PropTypes from 'prop-types';
import styles from './reset-game.module.css';

// Кнопка новой игры
export const ResetGame = ({ setBoard, setFilledCells, setXIsNext }) => {
    return (
        <div
            className={styles.reset}
            onClick={() => {
                setBoard(Array(9).fill(null));
                setFilledCells(0);
                setXIsNext(true);
            }}
        >
            Начать заново
        </div>
    );
};

ResetGame.propTypes = {
    setBoard: PropTypes.func,
    setFilledCells: PropTypes.func,
    setXIsNext: PropTypes.func,
};
