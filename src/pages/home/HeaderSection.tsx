import { styled } from "styled-components"
import { devices } from "../../styles/breakPoints"

const Section = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        height: 90vh;
        /* background: #F9F5F6; */
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};
        border-bottom: 2px solid ${props => props.theme.border};
        padding: 3rem 0 0;
        gap: 1rem;
        padding: 1rem;
        transition: all 300ms;
    
        img {
            max-width: 300px;
            border-radius: 10px;
            margin: 1rem auto ;
            /* box-shadow: 0px 6px 16px 1px ${props => props.theme.shadow};   */
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
                color: ${props => props.theme.colorLogoMain};
                letter-spacing: 0.2rem;
                white-space: nowrap;
            }
        }

        @media only screen and (min-width: ${devices.sm}px){
        img{
            max-width: 450px;
        }
    }

    @media only screen and (min-width: ${devices.md}px){
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
        }

        @media only screen and (min-width: ${devices.md}px){
            grid-template-columns: minmax(auto, 600px) minmax(auto, 600px);
        }
    }
`
const Highlight = styled.p`
    color: ${props => props.theme.colorLogoSecondary};
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
                <Highlight><strong>Finance Manager</strong></Highlight>
            </div>
            <div>
                <img src='/bg.avif' />
            </div>
        </Section>
    )
}
