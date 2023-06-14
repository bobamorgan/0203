import React from 'react';
import PropTypes from 'prop-types';
import styles from './board.module.css';
import { Cell } from './cell';

export const Board = ({ cells, click }) => {
    return (
        <div className={styles.board}>
            {cells.map((cell, i) => (
                <Cell key={i} value={cell} onClick={() => click(i)} />
            ))}
        </div>
    );
};

Board.propTypes = {
    cells: PropTypes.array,
    click: PropTypes.func,
};
