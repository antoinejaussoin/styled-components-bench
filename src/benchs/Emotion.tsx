import React from 'react';
import styled from '@emotion/styled';
import { BenchProps } from '../utils';

const Emotion: React.SFC<BenchProps> = ({ matrix }) => {
  return (
    <>
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

export default Emotion;
