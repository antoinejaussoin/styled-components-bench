import React, { useMemo, useState, useCallback } from 'react';
import styles from './CSSModules.module.scss';
import { generateMatrix } from './utils';

const SCAndStyles: React.SFC = () => {
  const [size, setSize] = useState(20);
  const matrix = useMemo(() => generateMatrix(size), [size]);
  const increaseSize = useCallback(() => setSize(size => size + 10), []);
  return (
    <>
      <button onClick={increaseSize}>Increase</button>
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
