import { styled } from "styled-components";
import { devices } from "../../../styles/breakPoints";

const IconContainer = styled.div<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: ${(props) => props.$bgColor};
  color: #102c57;
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 300ms ease-in-out;
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

const StatContainer = styled.div<{ $borderColor?: string; $bgColor?: string }>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #fff;
  background: #fff;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  width: 100%;
  gap: 1rem;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01) translateY(-5px);
    border: 1px solid ${(props) => props.$borderColor};
    box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.2);

    ${IconContainer} {
      border: 1px solid ${(props) => props.$borderColor};
      box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.1);
      transform: translateX(1px);
    }
  }
  @media only screen and ${devices.sm} {
    width: fit-content;
  }
`;

export { IconContainer, Description, StatContainer };
