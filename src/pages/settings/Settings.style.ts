import { styled } from "styled-components";

export const Container = styled.div`
  /* background: ${(props) => props.theme.background}; */
  color: ${(props) => props.theme.text};
  margin: 2rem auto auto 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  height: fit-content;
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
  background: ${(props) => props.theme.background2};
  border: 1px solid ${(props) => props.theme.background2};
  padding: 0.5rem 0;
  width: calc(200px + 2rem);
  font-size: 1rem;
  color: #5f5f5f;
`;

export const SettingsFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem auto;
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
