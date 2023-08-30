import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 0.8rem 1rem;
  color: #000;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #ccc;
  align-items: center;
  border-right: 3px solid #fff;

  &:hover {
    background-color: #e5e5e5;
    border-right: 3px solid #e5e5e5;
  }
  &.active {
    background-color: #e5e5e5;
    border-right: 3px solid #7e22ce;
    transition: 300ms ease-in-out;
    color: #7e22ce;
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: #383636;

  @media (max-width: 800px) {
    display: none;
  }
`;
