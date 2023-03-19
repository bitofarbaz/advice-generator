import { FC, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import {
  Dice,
  CSSReset,
  StyledCard,
  RotatingDice,
  StyledCardText,
  StyledCardTitle,
  StyledCardButton,
  StyledCardDivider,
} from "./App.styled";

import { THEME } from "../theme";
import { Attribution } from "./components/Attribution/Attribution";

interface IAdvice {
  id: number;
  advice: string;
}

export const App: FC = () => {
  const [advice, setAdvice] = useState<IAdvice | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchAdvice = () => {
    setIsLoading(true);
    fetch(`https://api.adviceslip.com/advice?__=${Math.random()}`)
      .then((res) => res.json())
      .then((res) => {
        const { slip: advice } = res;
        setAdvice(advice);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <CSSReset />
      {isLoading || !advice ? (
        <RotatingDice />
      ) : (
        <StyledCard>
          <StyledCardTitle>Advice #{advice.id}</StyledCardTitle>
          <StyledCardText>
            {advice.advice ||
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A unde voluptatem consectetur sed eius."}
          </StyledCardText>
          <StyledCardDivider />
          <StyledCardButton onClick={fetchAdvice}>
            <Dice />
          </StyledCardButton>
        </StyledCard>
      )}
      <Attribution />
    </ThemeProvider>
  );
};
