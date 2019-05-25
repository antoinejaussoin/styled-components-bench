import React from 'react';
import styles from './CSSModules.module.scss';
import { BenchProps } from '../utils';

const SCAndStyles: React.SFC<BenchProps> = ({ matrix }) => {
  return (
    <>
      {matrix.map((row, i) => (
        <div className={styles.row} key={i}>
          {row.map((color, j) => (
            <div
              className={styles.block}
              key={j}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default SCAndStyles;
