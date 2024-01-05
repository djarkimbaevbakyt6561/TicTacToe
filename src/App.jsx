import { Button, styled } from '@mui/material';
import { useState } from 'react';
import TicTacToe from './components/TicTacToe';

function App() {
  const [play, setPlay] = useState(false);
  const togglePlayHandler = () => {
    setPlay(!play);
  };
  return (
    <Container className="App">
      {!play ? (
        <StyledButton onClick={togglePlayHandler}>Играть</StyledButton>
      ) : (
        <TicTacToe />
      )}
    </Container>
  );
}

export default App;
const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(90deg, rgb(62, 39, 122), rgb(22, 4, 67));
`;
const StyledButton = styled(Button)`
  color: white;
  padding: 20px 40px;
  font-size: x-large;
  text-transform: none;
  border-radius: 10px;
  border: 3px solid #006eff;
  background: #0d0d98;
  box-shadow: 0 0 15px 1px rgb(0, 8, 255);
  :hover {
    border: 3px solid #d47407;
    color: #ff8a05;
    box-shadow: 0 0 15px 1px #ff8a05;
  }
`;
