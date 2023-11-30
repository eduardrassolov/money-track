import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colorLogoMain};
  color: #f1f0e8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
`;

export const ContactList = styled.div`
  display: flex;
  gap: 3rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 300ms all;

  &:visited {
    color: #fff;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
  }
`;
