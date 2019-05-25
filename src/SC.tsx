import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { generateMatrix } from './utils';

const SC: React.SFC = () => {
  const [size, setSize] = useState(20);
  const matrix = useMemo(() => generateMatrix(size), [size]);
  const increaseSize = useCallback(() => setSize(size => size + 10), []);
  return (
    <>
      <button onClick={increaseSize}>Increase</button>
      {matrix.map((row, i) => (
        <Row key={i}>
          {row.map((color, j) => (
            <Block key={j} color={color} />
          ))}
        </Row>
      ))}
    </>
  );
};

interface BlockProps {
  color: string;
}

const Row = styled.div`
  display: flex;
`;

const Block = styled.div<BlockProps>`
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
`;

export default SC;
