import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  gap: 1rem;
  background: ${(props) => props.theme.background};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.color};
  border-bottom: 2px solid ${(props) => props.theme.border};
  padding: 1rem;
  transition: all 300ms;

  @media only screen and (min-width: 1100px) {
    flex-direction: row;
    letter-spacing: 0.1rem;
  }
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  max-width: 450px;
  flex-wrap: wrap;

  @media only screen and (min-width: 1100px) {
    margin: auto;
  }
`;

export const TitleText = styled.p`
  font-size: 1.1rem;
  line-height: 26px;
  color: gray;
  font-style: normal;
  font-weight: 400;
`;

export const CTAButton = styled.button`
  padding: 14px 20px;
  background: ${(props) => props.theme.colorLogoMain};
  border: 1px solid ${(props) => props.theme.colorLogoMain};
  border-radius: 7px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: 300ms all;

  &:hover {
    border: 1px solid ${(props) => props.theme.border};
  }
`;

export const H2 = styled.h1`
  line-height: 72px;
  letter-spacing: -2.4px;
  font-size: 3rem;
  margin: 0;
`;

export const ImageContainer = styled.div`
  width: 100vw;
  max-width: 500px;

  @media only screen and (min-width: 1100px) {
    margin: auto 0 0 auto;
    max-width: 700px;
  }
`;

export const Image = styled.img`
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 7px;
  width: 100%;
`;

export const SmallImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 50%;
  width: 150px;
`;
