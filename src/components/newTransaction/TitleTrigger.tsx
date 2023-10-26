import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import styled from 'styled-components'

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`

const ToggleBtn = styled.button`
    background: none;
    border: none;
    text-decoration: none;
    text-align: center;
    color: ${props => props.theme.text};
    cursor: pointer;
`

interface ITitleTrigger {
    isOpen: boolean,
    onOpenClose: () => void,
    text: string
}

export default function TitleTrigger({ isOpen, onOpenClose, text }: ITitleTrigger) {
    return (
        <Title>
            <span>{text}</span>
            <ToggleBtn onClick={onOpenClose}>
                {!isOpen ?
                    <HiChevronDown size={"1.5rem"} />
                    :
                    <HiChevronUp size={"1.5rem"} />
                }
            </ToggleBtn>


        </Title>
    )
}
