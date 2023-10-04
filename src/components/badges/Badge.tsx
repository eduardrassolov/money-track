import styled from 'styled-components'

interface IBadge {
    id: string;
    label: string;
    isSelected?: boolean;
    onClick?: (id: string) => void;

}

const StyledBadge = styled.div<{ $isSelected: boolean }>`
    border: 1px solid ${props => props.theme.border};
    background: ${props => props.$isSelected ? props.theme.colorLogoMain : props.theme.background};
    color: ${props => props.$isSelected ? "white" : props.theme.text};
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
    border-radius: 7px;
    display: flex;
    white-space: nowrap;
    cursor: pointer;
`

export default function Badge({ id, label, isSelected = true, onClick }: IBadge) {
    const handleClick = (id: string) => onClick(id);
    return (
        <StyledBadge $isSelected={isSelected} onClick={() => handleClick(id)}><p>{label}</p></StyledBadge>
    )
}
