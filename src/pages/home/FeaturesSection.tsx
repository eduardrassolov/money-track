import { styled } from "styled-components"
import Feature from "./Feature"

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
        imgPath: "src/img/img1.avif"
    },
    {
        id: "feature2",
        title: "Real-Time Budget Visualization",
        text: "Visualize your budget in real time with intuitive graphs and charts. See where your money is going, identify trends, and make informed decisions to optimize your spending.",
        imgPath: "src/img/chart.avif"
    },
    {
        id: "feature3",
        title: "Access Anytime, Anywhere",
        text: "Access your financial information on the go. E-Budget is available on web, ensuring you're always in control of your money.",
        imgPath: "src/img/img3.avif"
    }
]

export default function FeaturesSection({ id }: IHeader) {
    return (
        <Section id={id}>
            {featuresData.map((feature, index) => <Feature key={feature.id} data={feature} side={index % 2 ? "right" : "left"} />)}
        </Section>
    )
}
