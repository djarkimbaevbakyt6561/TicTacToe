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
          {clicking === "cross" && (
            <TicTacFigures>
              <line
                x1="15%"
                y1="15%"
                x2="85%"
                y2="85%"
                onAnimationStart={() => playSound(crossSound)}
              ></line>
              <line
                className="second"
                x1="85%"
                y1="15%"
                x2="15%"
                y2="85%"
                onAnimationEnd={checkWinnerHandler}
              ></line>
            </TicTacFigures>
          )}
        </TicTacFigures>
      )}
      {clicking === "circle" && (
        <TicTacFigures className="circle" circleLength={circleLength}>
          <circle
            r="40%"
            cx="50%"
            cy="50%"
            stroke="rgb(255, 119, 0)"
            filter="drop-shadow(0 0 10px rgb(255, 155, 4))"
            fill="none"
            strokeLinecap="round"
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
  @media (min-width: 497px) and (max-width: 688px) {
    width: 150px; /* измените стили для мобильных устройств */
    height: 150px;
  }
  @media (min-width: 419px) and (max-width: 497px) {
    width: 125px; /* измените стили для мобильных устройств */
    height: 125px;
  }
  @media (max-width: 419px) {
    width: 100px; /* измените стили для мобильных устройств */
    height: 100px;
  }
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
    @media (min-width: 497px) and (max-width: 688px) {
      stroke-width: 16;
      animation-duration: 0.9s;
    }
    @media (min-width: 419px) and (max-width: 497px) {
      stroke-width: 13;
      animation-duration: 1.1s;
    }
    @media (max-width: 419px) {
      stroke-width: 12;
      animation-duration: 1.3s;
    }
  }
  circle {
    stroke-dasharray: ${(props) => props.circleLength};
    stroke-dashoffset: ${(props) => props.circleLength};
    animation: animateCircle 1.3s forwards;
    stroke-width: 18;
    @media (min-width: 497px) and (max-width: 688px) {
      stroke-width: 15;
      animation: animateCircle 1.6s forwards;
    }
    @media (min-width: 419px) and (max-width: 497px) {
      stroke-width: 12;
      animation: animateCircle 1.8s forwards;
    }
    @media (max-width: 419px) {
      stroke-width: 11;
      animation: animateCircle 2s forwards;
    }
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
