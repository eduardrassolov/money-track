import { styled } from "styled-components";
import { devices } from "../../styles/breakPoints";

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  padding: 4rem 0;

  @media only screen and (min-width: ${devices.md}) {
  }
`;
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: end;
  gap: 10rem;
  justify-content: space-between;
  margin: 0 0 1.3rem;
  align-items: center;

  input,
  select {
  }
  select {
    width: 235px;
  }
`;
export const Input = styled.input`
  width: 200px;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.background2};
  border: 1px solid gray;
  color: ${(props) => props.theme.text};
  border-radius: 7px;

  &:focus {
    background-color: ${(props) => props.theme.background};
    transition: all 300ms ease -in -out;
    outline: none;
    border: 1px solid #3b82f6;
  }
`;

export const ReadOnly = styled(Input)`
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.background};
  padding: 0.5rem 0;
  width: calc(200px + 2rem);
  font-size: 1rem;
  color: #5f5f5f;
`;

export const SettingsFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin: 2rem 0 1rem;
`;
export const Select = styled.select`
  width: 200px;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.background2};
  border: 1px solid gray;
  color: ${(props) => props.theme.text};
  border-radius: 7px;

  &:focus {
    background-color: ${(props) => props.theme.background};
    transition: all 300ms ease -in -out;
    outline: none;
    border: 1px solid #3b82f6;
  }
`;
