import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  color: ${(props) => props.theme.textColor};
  background-color: transparent;

  &:hover,
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`;
