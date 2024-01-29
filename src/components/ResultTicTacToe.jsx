import { styled } from "@mui/material";
import { StyledButton } from "./UI/StyledButton";

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
