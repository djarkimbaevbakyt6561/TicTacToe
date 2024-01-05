import { styled } from '@mui/material';
import React from 'react';

const TicTacToeItem = ({ borderStyle }) => {
  return <Container borderStyle={borderStyle}>TicTacToeItem</Container>;
};

export default TicTacToeItem;
const Container = styled('div')`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-top: ${({ borderStyle }) =>
    borderStyle.includes('top') && '3px solid #006eff;'};
  border-bottom: ${({ borderStyle }) =>
    borderStyle.includes('bottom') && '3px solid #006eff;'};
  border-left: ${({ borderStyle }) =>
    borderStyle.includes('left') && '3px solid #006eff;'};
  border-right: ${({ borderStyle }) =>
    borderStyle.includes('right') && '3px solid #006eff;'};
`;
