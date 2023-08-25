import { styled } from "styled-components"
import { devices } from "../../styles/breakPoints"

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 90vh;
    place-items: center;
    background: #F9F5F6;
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid #E5E5E5;

    @media only screen and ${devices.md} {
        display: flex;
        flex-direction: column;
        div{
            text-align: center;
        }

        img{
            width: 100%;
            margin: 1.5rem 0;
        }
    }

    p{
        font-size: 2.8rem;
        font-weight: 500;
        text-align: start;
        line-height: 1.5;
        letter-spacing: 0.1rem;
        margin: 0;

        span{
            font-family: 'Monsterrat', sans-serif;
            font-weight: 900;
            color: #7286D3;
            letter-spacing: 0.2rem;
            white-space: nowrap;
        }
    }
    img{
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0px 6px 16px 1px rgba(0,0,0, 0.4);  
    }
`

interface IHeader {
    id: string
}

export default function HeaderSection({ id }: IHeader) {
    return (
        <Section id={id}>
            <div>
                <p>Welcome to <span><strong>E-Budget</strong></span></p>
                <p>Your Personal</p>
                <p><strong>Finance Manager</strong></p>
            </div>
            <div>
                <img src='public/bg.avif' />
            </div>
        </Section>
    )
}
