import React, { useState } from "react";
import TicTacToeItem from "./TicTacToeItem";
import { styled } from "@mui/material";

const TicTacToe = ({ checkWinnerHandler, setClickingArray, clickingArray }) => {
  const [queue, setQueue] = useState("cross");
  const [canUserClickTheButton, setCanUserClickTheButton] = useState(true);
  const toggleQueue = (id) => {
    if(canUserClickTheButton){
      setQueue((prev) => (prev === "cross" ? "circle" : "cross"));
      setClickingArray(
        clickingArray.map((el) =>
          el.id === id && el.state == null ? { ...el, state: queue } : el
        )
      );
      setCanUserClickTheButton(false);
    }
      
  };
  return (
    <Container>
      {clickingArray.map((click) => (
        <TicTacToeItem
          key={click.id}
          onClick={() => toggleQueue(click.id)}
          clicking={click.state}
          checkWinnerHandler={() => {
            setCanUserClickTheButton(true)
            checkWinnerHandler(clickingArray)
          }}
        />
      ))}
    </Container>
  );
};

export default TicTacToe;
const Container = styled("div")`
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 4px solid rgb(255, 0, 212);
  box-shadow: 0 0 15px 1px rgb(157, 0, 255);
`;
