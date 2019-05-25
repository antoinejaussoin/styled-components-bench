import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { generateMatrix } from './utils';

const SCAndStyles: React.SFC = () => {
  const [size, setSize] = useState(20);
  const matrix = useMemo(() => generateMatrix(size), [size]);
  const increaseSize = useCallback(() => setSize(size => size + 10), []);
  return (
    <>
      <button onClick={increaseSize}>Increase</button>
      {matrix.map((row, i) => (
        <Row key={i}>
          {row.map((color, j) => (
            <Block key={j} style={{ backgroundColor: color }} />
          ))}
        </Row>
      ))}
    </>
  );
};

const Row = styled.div`
  display: flex;
`;

const Block = styled.div`
  width: 10px;
  height: 10px;
`;

export default SCAndStyles;
