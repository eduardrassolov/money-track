import { styled } from "styled-components"
import { devices } from "../../styles/breakPoints"

const Section = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        height: 90vh;
        background: #F9F5F6;
        border-bottom: 2px solid #E5E5E5;
        padding: 3rem 0 0;
        gap: 1rem;
        padding: 1rem;
    
        img {
            max-width: 300px;
            border-radius: 10px;
            margin: 1rem auto ;
            box-shadow: 0px 6px 16px 1px rgba(0,0,0, 0.4);  
        }
        p{
            font-size: 2rem;
            font-weight: 500;
            text-align: start;
            line-height: 1.5;
            letter-spacing: 0.1rem;
            margin: 0;
            text-align: center;

        span{
                font-family: 'Monsterrat', sans-serif;
                font-weight: 900;
                color: #7286D3;
                letter-spacing: 0.2rem;
                white-space: nowrap;
            }
        }

    @media only screen and ${devices.sm}{
        img{
            max-width: 450px;
        }
    }

    @media only screen and ${devices.md} {   
        flex-direction: row;
        letter-spacing: 0.1rem;
        place-items: center;

        img{
           max-width: 500px;
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

        @media only screen and ${devices.md}{
            grid-template-columns: minmax(auto, 600px) minmax(auto, 600px);
        }
    }
`

interface IHeader {
    id: string
}

export default function HeaderSection({ id }: IHeader) {
    return (
        <Section id={id}>
            <div>
                <p>Welcome to <span><strong>E-Budget</strong></span>,</p>
                <p>Your Personal</p>
                <p><strong>Finance Manager</strong></p>
            </div>
            <div>
                <img src='public/bg.avif' />
            </div>
        </Section>
    )
}
