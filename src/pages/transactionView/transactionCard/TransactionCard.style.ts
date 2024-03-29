import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { styled } from "styled-components";

export const Card = styled.div`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.border};
    display: grid;
    grid-template-columns: auto 1fr 1fr 0.5fr;
    padding: 1rem 0;
    justify-content: space-between;
    transition: all 300ms;
    font-size: 1rem;
    gap: 1rem;
    row-gap: 0;
`;

const OperationSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
`;

const StyledIcon = styled(HiOutlineTrash)`
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: all 0.4s ease-in-out;
    }
`;

const StyledEdit = styled(HiOutlinePencilSquare)`
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: all 0.4s ease-in-out;
    }
`;

export { OperationSection, StyledIcon, StyledEdit };
