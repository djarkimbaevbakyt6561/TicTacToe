import { keyframes, styled } from "@mui/material";
import React from "react";
import circleSound from "../assets/sounds/circle-sound.mp3";
import crossSound from "../assets/sounds/cross-sound.mp3";

const TicTacToeItem = ({ onClick, clicking, checkWinnerHandler }) => {
  const circleLength = Math.PI * 168;

  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };
  return (
    <Container onClick={onClick}>
      {clicking === "cross" && (
        <TicTacFigures>
          <line
            x1="25"
            y1="25"
            x2="170"
            y2="170"
            onAnimationStart={() => playSound(crossSound)}
          ></line>
          <line
            className="second"
            x1="170"
            y1="25"
            x2="25"
            y2="170"
            onAnimationEnd={checkWinnerHandler}
          ></line>
        </TicTacFigures>
      )}
      {clicking === "circle" && (
        <TicTacFigures className="circle">
          <circle
            r="84"
            cx="98"
            cy="98"
            stroke="rgb(255, 119, 0)"
            strokeWidth="18"
            filter="drop-shadow(0 0 10px rgb(255, 155, 4))"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circleLength,
              strokeDashoffset: circleLength,
              animation: "animateCircle 1.3s forwards",
            }}
            onAnimationStart={() => playSound(circleSound)}
            onAnimationEnd={checkWinnerHandler}
          />
        </TicTacFigures>
      )}
    </Container>
  );
};

export default TicTacToeItem;

const draw = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;
const Container = styled("div")`
  width: 200px;
  height: 200px;
  box-shadow: 0 0 15px 1px rgb(157, 0, 255);
  font-family: Roboto;
`;

const TicTacFigures = styled("svg")`
  width: 100%;
  height: 100%;
  line {
    stroke-dasharray: 235;
    stroke-dashoffset: 235;
    animation-name: ${draw};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    filter: drop-shadow(0 0 10px rgb(0, 8, 255));
    stroke: rgb(0, 8, 255);
    stroke-width: 20;
    stroke-linecap: round;
  }
  .second {
    animation-delay: 0.6s;
  }
  @keyframes animateCircle {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
