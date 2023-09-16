import styled from "styled-components";
import { ITransaction } from "../../interface/ITransactions";
import usePagination from "../../utils/hooks/usePagination";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { ITEMS_PER_PAGE } from "../../config/paginationItems";


const onePageItems = 5;

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

export default function Pagination({ transactions }: ITransaction[]) {
    const { currPage, moveToPage } = usePagination();

    const lastPage = transactions?.length <= ITEMS_PER_PAGE ? 1 : Math.floor(transactions?.length / onePageItems);
    const handlePrev = () => { 

        if (currPage > 1)
            moveToPage(currPage - 1);
    }
    const handleNext = () => {
        if (currPage < lastPage) {
            moveToPage(currPage + 1);
        }
    }

    console.log(currPage, lastPage, transactions?.length);


    return (
        <PaginationContainer>
            <PaginationButton onClick={handlePrev} disabled={currPage === 1}><HiOutlineArrowSmallLeft /></PaginationButton>
            <p>{currPage} of {lastPage}</p>
            <PaginationButton onClick={handleNext} disabled={currPage === lastPage} ><HiOutlineArrowSmallRight /></PaginationButton>
        </PaginationContainer>
    )
}
