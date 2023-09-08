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
  border-right: 3px solid ${(props) => props.theme.background};

  &:hover {
    background-color: ${(props) => props.theme.hoverAside};
    border-right: 3px solid ${(props) => props.theme.colorLogoMain};
    transition: all 300ms;
  }
  &.active {
    background-color: ${(props) => props.theme.hoverAside};
    border-right: 3px solid ${(props) => props.theme.colorLogoMain};
    color: ${(props) => props.theme.colorLogoMain};

    transition: all 300ms;
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};
`;
