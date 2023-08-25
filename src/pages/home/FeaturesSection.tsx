import { styled } from "styled-components"
import { devices } from "../../styles/breakPoints"

const Section = styled.section`
    display: flex;
    flex-direction: column ;
    background-color: #F9F5F6;
    padding: 3rem 0;
    border-bottom: 2px solid #E5E5E5;
    
    img{
        width: 250px;
        border-radius: 15px;
        box-shadow: 0px 6px 16px 1px rgba(0,0,0, 0.4);  
     }
`

const ContainerLeft = styled.div`
    display: flex;
    width: 900px;
    margin: 2rem auto;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
        

    div{
        margin: 2rem;
    }
    h2{
        margin: 0;
        letter-spacing: 0.1rem;
    }
    p{
        line-height: 1.8;
        color: gray;
    }

    @media only screen and ${devices.md} {
        flex-direction: column;
        max-width: 310px;
        flex-direction: column-reverse;
    }
`

const ContainerRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 900px;
    margin: 2rem auto;  
    justify-content: space-between;


    border: 1px solid #E5E5E5;
    border-radius: 10px;

    div{
       margin: 2rem;
    } 
    h2{
       margin: 0;
       letter-spacing: 0.1rem;
    }
     p{
        line-height: 1.8;
        color: gray;
    }

    @media only screen and ${devices.md} {
        flex-direction: column;
        max-width: 310px;
        flex-direction: column-reverse;
    }
`

interface IHeader {
    id: string
}

const H1 = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
`


export default function FeaturesSection({ id }: IHeader) {
    return (
        <Section id={id}>

            <H1>Features</H1>

            <ContainerLeft>
                <div>
                    <h2>Effortless Expense Tracking</h2>
                    <p>Say goodbye to the hassle of manual expense tracking. We simplifies the process by allowing you to effortlessly record and categorize your expenses in seconds.</p>
                </div>
                <div>
                    <img src='public/img1.avif' />
                </div>
            </ContainerLeft>

            <ContainerRight>
                <div>
                    <h2>Real-Time Budget Visualization</h2>
                    <p>Visualize your budget in real time with intuitive graphs and charts. See where your money is going, identify trends, and make informed decisions to optimize your spending.</p>
                </div>
                <div> <img src="public/chart.avif" alt="" /></div>
            </ContainerRight>

            <ContainerLeft>
                <div>
                    <h2>Customized Savings Goals</h2>
                    <p>Plan for the future with personalized savings goals. Whether you're saving for a vacation, a new car, or an emergency fund, EBudget helps you stay on track.</p>
                </div>
                <div> <img src="public/goals.avif" alt="" /></div>
            </ContainerLeft>

            <ContainerRight>
                <div>
                    <h2>Access Anytime, Anywhere</h2>
                    <p>Access your financial information on the go. E-Budget is available on web, ensuring you're always in control of your money.</p>
                </div>
                <div> <img src="public/img3.avif" alt="" /></div>
            </ContainerRight>
        </Section>
    )
}
