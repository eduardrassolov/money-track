import { styled } from "styled-components";
import { devices } from "../../../styles/breakPoints";

const IconContainer = styled.div<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.theme.text};
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 300ms;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  gap: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    color: gray;
  }
`;

const StatsContainer = styled.div<{ $borderColor?: string }>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid ${(props) => props.theme.background};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 15px;
  padding: 1rem 1.5rem;
  gap: 1rem;
  transition: all 300ms;
  margin: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.01) translateY(-5px);
    border: 1px solid ${(props) => props.$borderColor};
    box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.2);
    transition: all 300ms;

    ${IconContainer} {
      border: 1px solid ${(props) => props.$borderColor};
      box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.1);
      transform: translateX(1px);
      transition: all 300ms;
    }
  }
  @media only screen and (min-width: ${devices.sm}px) {
    min-width: fit-content;
  }
`;

export { IconContainer, Description, StatsContainer };
