import React from 'react';
import styled from '@emotion/styled';
import { BenchProps } from '../utils';

const EmotionWithStyles: React.SFC<BenchProps> = ({ matrix }) => {
  return (
    <>
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

export default EmotionWithStyles;
