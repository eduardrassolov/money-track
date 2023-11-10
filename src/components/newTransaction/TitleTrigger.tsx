
import styled from 'styled-components'

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    cursor: pointer;
`

const ToggleBtn = styled.button`
    background: none;
    border: none;
    text-decoration: none;
    text-align: center;
    color: ${props => props.theme.text};
    cursor: pointer;

    span{
        font-size: 2rem;
    }
`

const TriggerText = styled.span`
    font-size: 1.3rem;
`

interface ITitleTrigger {
    isOpen: boolean,
    onOpenClose: () => void,
    text: string
}

export default function TitleTrigger({ isOpen, onOpenClose, text }: ITitleTrigger) {
    return (
        <Title onClick={onOpenClose}>
            <TriggerText>{text}</TriggerText>
            <ToggleBtn>
                {!isOpen ?
                    <span>+</span>
                    :
                    <span>-</span>
                }
            </ToggleBtn>


        </Title>
    )
}
