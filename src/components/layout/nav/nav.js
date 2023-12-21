import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/routs";
import { StyledButton } from "./styled";
import { useLocation } from "react-router-dom";

const navButtons = [
  {
    to: AppRoute.MAIN,
    button: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>,
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} link={AppRoute.BUY}>
        Купить билет
      </Button>
    ),
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {navButtons &&
        navButtons.length &&
        navButtons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
