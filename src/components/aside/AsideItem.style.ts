import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 0.8rem 1rem;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  transition: all 300ms;
  border-bottom: 1px solid ${(props) => props.theme.border};
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.background};
  margin: 0;

  &:hover {
    background-color: ${(props) => props.theme.hoverAside};
    border-bottom: 3px solid ${(props) => props.theme.hoverAside};
    /* box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    /* scale: 1.05; */
    /* transform: translateY(0.3rem); */
    transition: all 300ms;
  }
  &.active {
    background-color: ${(props) => props.theme.hoverAside};
    border-bottom: 3px solid ${(props) => props.theme.colorLogoMain};
    color: ${(props) => props.theme.colorLogoMain};

    transition: all 300ms;
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};
`;
