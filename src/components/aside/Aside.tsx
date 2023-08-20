import { styled } from "styled-components";
import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";


const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f0f0;
    font-size: 1.2rem;

    ul {
        margin: 0;
        padding: 0;
        gap: 5rem;
    }
`

export default function Aside() {
    return (
        <StyledAside>
            <ul>
                {asideItemsName.map((item) => <AsideItem key={item} name={item} />)}
            </ul>
        </StyledAside>
    )
}
