import { FC } from "react"
import { StyledBurger } from "./Burger.style";

interface IBurger {
    isOpen: boolean,
    onCLose: () => void
}

const Burger: FC<IBurger> = ({ isOpen, onCLose }) => {
    return (
        <StyledBurger $isOpen={isOpen} onClick={onCLose} >
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}
export default Burger;