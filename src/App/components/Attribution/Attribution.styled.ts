import styled from "styled-components";

export const StyledAttribution = styled.div`
  font-family: sans-serif;
  color: ${(props) => props.theme.colors.dark.text};
  a {
    color: ${(props) => props.theme.colors.dark.primary};
  }

  left: 50%;
  bottom: 1rem;
  position: fixed;
  text-align: center;
  transform: translateX(-50%);

  @media (max-width: 461px) {
    font-size: 0.75rem;
  }
`;
