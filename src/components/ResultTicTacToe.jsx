import { Button, styled } from "@mui/material";

const ResultTicTacToe = ({ result, onClick }) => {
  return (
    <Container>
      {result === "cross" && <Paragraph>Победили крестики!</Paragraph>}
      {result === "circle" && <Paragraph>Победили нолики!</Paragraph>}
      {result === "tie" && <Paragraph>Ничья!</Paragraph>}
      <StyledButton onClick={onClick}>Играть снова</StyledButton>
    </Container>
  );
};
export default ResultTicTacToe;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-family: Roboto;
`;
const Paragraph = styled("p")`
  font-size: 30px;
  color: rgb(255, 119, 0);
  text-shadow: 1px 1px 5px rgb(255, 155, 4);
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
