import { FC } from "react";
import { StyledAttribution } from "./Attribution.styled";

export const Attribution: FC = () => {
  return (
    <StyledAttribution>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/bitofarbaz">Arbaz Ajaz</a>.
    </StyledAttribution>
  );
};
