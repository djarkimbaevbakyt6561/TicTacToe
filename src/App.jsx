import { styled } from "@mui/material";
import { useState } from "react";
import TicTacToe from "./components/TicTacToe";
import ResultTicTacToe from "./components/ResultTicTacToe";
import logo from "./assets/icons/logo-tictactoe.png";
import { array } from "./utils/constants";
import { StyledButton } from "./components/UI/StyledButton";

const Header = ({ togglePlayHandler }) => (
  <HeaderContainer>
    <Image alt="tic-tac-toe" src={logo} />
    <p>Крестики-Нолики</p>
    <StyledButton onClick={togglePlayHandler}>Играть</StyledButton>
  </HeaderContainer>
);
function App() {
  const [play, setPlay] = useState(false);
  const [checkWinnerBoolean, setCheckWinnerBoolean] = useState(null);
  const [clickingArray, setClickingArray] = useState(array);

  const togglePlayHandler = () => {
    setPlay(!play);
  };
  const resetGame = () => {
    setCheckWinnerBoolean(null);
    setClickingArray(array);
  };
  const checkWinner = (clickingArray) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        clickingArray[a].state &&
        clickingArray[a].state === clickingArray[b].state &&
        clickingArray[a].state === clickingArray[c].state
      ) {
        return clickingArray[a].state;
      }
    }
    if (clickingArray.every((cell) => cell.state)) {
      return "tie";
    }

    return null;
  };
  return (
    <Container className="App">
      {!play && <Header togglePlayHandler={togglePlayHandler} />}
      {play && checkWinnerBoolean !== null && (
        <ResultTicTacToe result={checkWinnerBoolean} onClick={resetGame} />
      )}
      {play && checkWinnerBoolean === null && (
        <TicTacToe
          checkWinnerHandler={(arr) => setCheckWinnerBoolean(checkWinner(arr))}
          clickingArray={clickingArray}
          setClickingArray={(v) => setClickingArray(v)}
        />
      )}
    </Container>
  );
}

export default App;
const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(90deg, rgb(62, 39, 122), rgb(22, 4, 67));
  font-family: Roboto;
`;

const Image = styled("img")`
  width: 300px;
  height: 300px;
  @media (min-width: 497px) and (max-width: 688px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 419px) and (max-width: 497px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 419px) {
    width: 150px;
    height: 150px;
  }
  box-shadow: 0 0 15px 1px rgb(0, 8, 255);
  border-radius: 10px;
`;
const HeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  p {
    font-size: 60px;
    color: rgb(255, 119, 0);
    text-shadow: 1px 1px 5px rgb(255, 155, 4);
    @media (min-width: 497px) and (max-width: 688px) {
      font-size: 50px;
    }
    @media (min-width: 419px) and (max-width: 497px) {
      font-size: 40px;
    }
    @media (max-width: 419px) {
      font-size: 30px;
    }
  }
`;
