import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2'
import styled from 'styled-components'
import useResize from '../../pages/dashboard/pie/useResize'

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
    color: ${props => props.theme.text};
    cursor: pointer;
`

interface ITitleTrigger {
    isOpen: boolean,
    onOpenClose: () => void,
    text: string
}

export default function TitleTrigger({ isOpen, onOpenClose, text }: ITitleTrigger) {
    const { isSmallScreen } = useResize();
    return (
        <Title>
            <span>{text}</span>
            {isSmallScreen ?
                <ToggleBtn onClick={onOpenClose}>
                    {!isOpen ?
                        <HiOutlinePlus size={"1.5rem"} />
                        :
                        <HiOutlineMinus size={"1.5rem"} />
                    }
                </ToggleBtn>
                : ""
            }

        </Title>
    )
}
