import PropTypes from 'prop-types';
import styles from './show-info.module.css';

// Вывод информации
export const ShowInfo = ({ winner, filledCells, xIsNext }) => {
    let output = '';

    if (winner) output = `Победил: ${winner}`;
    else if (filledCells === 9) output = 'Ничья';
    else output = `Ходит: ${xIsNext ? 'X' : 'O'}`;

    return <div className={styles.info}>{output}</div>;
};

ShowInfo.propTypes = {
    winner: PropTypes.string,
    filledCells: PropTypes.number,
    xIsNext: PropTypes.bool,
};