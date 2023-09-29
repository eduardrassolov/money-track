import styled from "styled-components"
import * as Select from '@radix-ui/react-select';

export const SelectTrigger = styled(Select.Trigger)`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 7px;
    padding: 1rem;
    font-size: 1rem;
    line-height: 1;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    text-decoration: none;
    cursor: pointer;
    border: 1px solid ${props => props.theme.border};
    outline: none;

    &:focus{
        border: 1px solid blue;
    }
`
export const SelectMenu = styled(Select.Content)`
    background: ${props => props.theme.background2};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.border};
    gap: 0.5rem;
    padding: 0.7rem 0;
    border-radius: 7px;
    display: flex;
    overflow: hidden;
    max-height: 450px;
    min-height: auto;
    min-width: 300px;
`
export const Group = styled(Select.Group)`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

`

export const Option = styled(Select.Item)`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    padding: 0.2rem;
    width: 100%;
    
    &:hover{
        background: ${props => props.theme.colorLogoMain};
        outline: none;
        transition: 300ms all;
    }
`
export const Separator = styled(Select.Separator)`
    height: 2px;
    background: ${props => props.theme.border};
    margin: 1.5rem 0;
`   
export const Label = styled(Select.Label)`
    margin: auto auto 1rem;
    font-size: 1rem;
    color: gray;
    font-weight: 500;

`
export const ViewPort = styled(Select.Viewport)`
    padding: 0.5rem 1rem;
`
export const ScrollDown = styled(Select.ScrollDownButton)`
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.5rem;
`
export const ScrollUp = styled(Select.ScrollUpButton)`
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
`

export const CreateContainer = styled.div`
    display: flex;
    color: ${props => props.theme.text};
    align-items: center;
    gap: 0.3rem;
`

export const ButtonIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    background: none;
    cursor: pointer;
    color: ${props => props.theme.text};
    transition: 300ms all;
    margin: 0;
    padding: 0;
    font-size: 1rem;

    &:hover{
        transform: scale(1.5);
        transition: 300ms all;
        color: ${props => props.theme.colorLogoMain};
    }
`
export const CustomOption = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: space-between;
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`