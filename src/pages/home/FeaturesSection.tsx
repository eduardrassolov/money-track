import { styled } from "styled-components"
import Feature from "./Feature"
import { devices } from "../../styles/breakPoints"

const Section = styled.section`
    display: flex;
    flex-direction: column ;
    background: ${(props) => props.theme.background};
    color: ${props => props.theme.text};
    border-bottom: 2px solid ${props => props.theme.border};
    transition: all 300ms;
    padding: 5rem 0;
    gap: 5rem;

    img{
        width: 250px;
        border-radius: 15px;
        box-shadow: 0px 6px 16px 1px rgba(0,0,0, 0.4);  
    }

    @media only screen and (min-width: ${devices.md}px){
            img{
            width: 350px;
        }
    }
`

interface IHeader {
    id: string
}

export interface IFeatureData {
    id: string,
    title: string,
    text: string,
    imgPath: string
}

const featuresData: Array<IFeatureData> = [
    {
        id: "feature1",
        title: "Effortless Expense Tracking",
        text: "Say goodbye to the hassle of manual expense tracking. We simplifies the process by allowing you to effortlessly record and categorize your expenses in seconds.",
        imgPath: "/pic1.jpg"
    },
    {
        id: "feature2",
        title: "Real-Time Budget Visualization",
        text: "Visualize your budget in real time with intuitive graphs and charts. See where your money is going, identify trends, and make informed decisions to optimize your spending.",
        imgPath: "/pic2.jpg"
    },
    {
        id: "feature3",
        title: "Access Anytime, Anywhere",
        text: "Access your financial information on the go. Application is available on web, ensuring you're always in control of your money.",
        imgPath: "/pic3.jpg"
    }
]

export default function FeaturesSection({ id }: IHeader) {
 
    return (
        <Section id={id}>
                {featuresData.map((feature, index) => <Feature key={feature.id} data={feature} side={index % 2 ? "right" : "left"} />)}
        </Section>
    )
}
