import styled, { createGlobalStyle, css } from "styled-components";

// @ts-ignore
import { ReactComponent as DiceSvg } from "../assets/icon-dice.svg";
// @ts-ignore
import { ReactComponent as DividerSvg } from "../assets/pattern-divider-mobile.svg";

export const CSSReset = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html, body {
		margin: unset;
	}

	body {
		width: 100vw;
		height: 100vh;
		display: flex;

		align-items: center;
		justify-content: center;

		background-color: ${(props) => props.theme.colors.dark.background};
	}

	:root {
		font-family: 'Manrope', sans-serif;
	}
`;

export const StyledCard = styled.div`
  margin: 1rem;
  padding: 2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.dark.cardBackground};

  gap: 2rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const StyledCardTitle = styled.h1`
  all: unset;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.dark.primary};
`;

export const StyledCardText = styled.q`
  all: unset;

  color: ${(props) => props.theme.colors.dark.text};
  max-width: 500px;

  font-size: 23px;
`;

export const StyledCardDivider = styled(DividerSvg)`
  margin-bottom: 2rem;
`;

export const Dice = styled(DiceSvg)`
  path {
    fill: black;
  }
`;

export const StyledCardButton = styled.button`
  all: unset;
  width: 66px;
  height: 66px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.dark.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0px;
  transform: translateY(50%);

  transition: all 0.3s linear;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.dark.primary};
  }
`;

export const RotatingDice = styled(Dice)`
  position: absolute;
  top: 50%;
  left: 50%;

  path {
    fill: ${(props) => props.theme.colors.dark.primary};
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(359deg);
    }
  }

  transform-origin: center;
  animation: rotate 1s linear infinite;
`;
