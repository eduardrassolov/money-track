import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { styled } from "styled-components";

const Container = styled.div<{ $bg: string }>`
  background: #fff;
  border-radius: 15px;
  border: 1px solid #fff;

  display: flex;
  margin: 0 0 0.8rem;
  padding: 1.5rem 1.8rem;
  justify-content: space-between;

  transition: all 300ms;

  &:hover {
    background: ${(props) => (props.$bg === "expenses" ? "rgba(36, 143, 233, 0.05)" : "rgba(142, 230, 20, 0.05)")};
    border: 1px solid ${(props) => (props.$bg === "expenses" ? "rgb(36, 143, 233)" : "rgb(142, 230, 20)")};
    cursor: pointer;
    transition: all 300ms;
  }
  @media (max-width: 800px) {
    margin: 0 0 10px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 0;
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

export { Container, InfoSection, OperationSection, StyledIcon, StyledEdit };
