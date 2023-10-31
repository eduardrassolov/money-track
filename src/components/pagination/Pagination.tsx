import styled from "styled-components";
import usePagination from "../../utils/hooks/usePagination";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useBoundStore } from "../../store/store";

const onePageItems = 10;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    gap: 2rem;
    color: ${props => props.theme.text};

    p{
        font-size: 1rem;
    }
`

const PaginationButton = styled.button`
        display: flex;
        justify-content: center;
        padding: 0.2rem;
        border: none;
        background: transparent;
        color: ${props => props.theme.text};
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.2s;

        &:hover{
            background: ${props => props.theme.colorLogoMain};
            color: #fff;
            scale: 1.20;
        }

        &:disabled{
            opacity: 0.5;
            pointer-events: none;
            cursor: not-allowed;
        
        }
`
interface IPagination {
    maxLength: number | undefined;
}

export default function Pagination({ maxLength }: IPagination) {
    const { currPage, moveToPage } = usePagination();
    console.log("Total elements", maxLength);

    if (!maxLength)
        return null;

    // const lastPage = maxLength <= ITEMS_PER_PAGE ? 1 : Math.round(maxLength / onePageItems);
    const lastPage = Math.ceil(maxLength / onePageItems);
    console.log("Last page", lastPage);

    const handlePrev = () => {
        //TODO fix this
        document.querySelector("section")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (currPage > 1) {
            moveToPage(currPage - 1);
        }

    }
    const handleNext = () => {
        //TODO fix this
        document.querySelector("section")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (currPage < lastPage) {
            moveToPage(currPage + 1);
        }
    }

    return (
        <PaginationContainer>
            <PaginationButton onClick={handlePrev} disabled={currPage === 1}><HiOutlineArrowSmallLeft /></PaginationButton>
            <p>{currPage} of {lastPage}</p>
            <PaginationButton onClick={handleNext} disabled={currPage === lastPage} ><HiOutlineArrowSmallRight /></PaginationButton>
        </PaginationContainer>
    )
}
