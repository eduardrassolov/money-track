import { FC } from 'react'
import { StyledBurger } from '../../pages/home/NavBar/Burger'

interface IBurgerMenu {
    isOpen: boolean,
    handleBurger: () => void
}

const BurgerMenu: FC<IBurgerMenu> = ({ isOpen, handleBurger }) => {
    return (
        <StyledBurger $isOpen={isOpen} onClick={handleBurger}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}
export default BurgerMenu