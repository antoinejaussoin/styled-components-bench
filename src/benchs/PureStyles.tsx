import React from 'react';
import { BenchProps } from '../utils';

const SCAndStyles: React.SFC<BenchProps> = ({ matrix }) => {
  return (
    <>
      {matrix.map((row, i) => (
        <div style={{ display: 'flex' }} key={i}>
          {row.map((color, j) => (
            <div
              key={j}
              style={{ backgroundColor: color, height: 10, width: 10 }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default SCAndStyles;
