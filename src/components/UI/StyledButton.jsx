import { styled, Button } from "@mui/material";

export const StyledButton = ({ children, onClick }) => {
  return <StyledButtonMUI onClick={onClick}>{children}</StyledButtonMUI>;
};
const StyledButtonMUI = styled(Button)`
  color: white;
  padding: 20px 40px;
  font-size: x-large;
  text-transform: none;
  border-radius: 10px;
  border: 3px solid #006eff;
  background: #0d0d98;
  box-shadow: 0 0 15px 1px rgb(0, 8, 255);

  @media (min-width: 497px) and (max-width: 688px) {
    padding: 18px 36px;
    font-size: large;
    border-radius: 7px;
  }

  @media (min-width: 419px) and (max-width: 497px) {
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 5px;
  }

  @media (max-width: 419px) {
    padding: 13px 26px;
    font-size: 16px;
    border-radius: 4px;
  }

  :hover {
    border: 3px solid #d47407;
    color: #ff8a05;
    box-shadow: 0 0 15px 1px #ff8a05;
  }
`;
