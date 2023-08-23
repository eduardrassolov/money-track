
import { styled } from 'styled-components'
import { ROUTES } from '../../router'
import { NavLink } from 'react-router-dom'

const Conatiner = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
`

const Nav = styled.nav`
    background: #F9F5F6;
    border-bottom: 2px solid #E5E5E5;
    display: flex ;
    justify-content: space-between;
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
`

const NavListLinks = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;

    li{
        margin: auto 0 auto 3rem;
    }
`
const NavLogo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

const HeadSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 85vh;
    place-items: center;
    background: #F9F5F6;
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid #E5E5E5;

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
        width: 100%;
        border-radius: 10px;
       
        box-shadow: 0px 6px 16px 1px rgba(0,0,0, 0.4);  
    }
`
const FeatureSection = styled.section`
    display: flex;
    flex-direction: column ;
    background-color: #F9F5F6;
    padding: 3rem 0;
    border-bottom: 2px solid #E5E5E5;
    
    img{
        width: 300px;
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
`

const ContainerRight = styled.div`
    display: flex;
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
`


const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    color: black;


    &:hover{
        color: #8c8a8a;
        border-bottom: 1px solid #8c8a8a;
        transition: all 0.3s ease-in-out;
    }
`

export default function HomePage() {
    return (
        <Conatiner>
            <Nav>
                <NavLogo>
                    Logo
                </NavLogo>

                <NavListLinks>
                    <li><StyledNavLink to={""}>Home</StyledNavLink></li>
                    <li><StyledNavLink to={""}>Features</StyledNavLink></li>
                    <li><StyledNavLink to={""}>Demo</StyledNavLink></li>
                    <li>
                        <StyledNavLink to={ROUTES.ROOT}>Start</StyledNavLink>
                    </li>
                </NavListLinks>
            </Nav>

            <HeadSection>
                <div>
                    <p>Welcome to <span><strong>E-Budget</strong></span></p>
                    <p>Your Personal</p>
                    <p><strong>Finance Manager</strong></p>
                </div>
                <div>
                    <img src='public/bg.avif' />
                </div>
            </HeadSection>

            <FeatureSection>
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
                    <div> <img src="public/chart.avif" alt="" /></div>
                    <div>
                        <h2>Real-Time Budget Visualization</h2>
                        <p>Visualize your budget in real time with intuitive graphs and charts. See where your money is going, identify trends, and make informed decisions to optimize your spending.</p>
                    </div>
                </ContainerRight>

                <ContainerLeft>
                    <div>
                        <h2>Customized Savings Goals</h2>
                        <p>Plan for the future with personalized savings goals. Whether you're saving for a vacation, a new car, or an emergency fund, EBudget helps you stay on track.</p>
                    </div>
                    <div> <img src="public/goals.avif" alt="" /></div>
                </ContainerLeft>

                <ContainerRight>
                    <div> <img src="public/img3.avif" alt="" /></div>
                    <div>
                        <h2>Access Anytime, Anywhere</h2>
                        <p>Access your financial information on the go. E-Budget is available on web, ensuring you're always in control of your money.</p>
                    </div>
                </ContainerRight>
            </FeatureSection>
        </Conatiner>
    )
}
