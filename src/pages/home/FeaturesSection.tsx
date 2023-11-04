import { styled } from "styled-components";
import Feature from "./Feature";
import { devices } from "../../styles/breakPoints";

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
        title: "📊 Track Every Penny",
        text: "Keep a close eye on your expenses and incomes, ensuring you know where every dollar goes and where it comes from.",
        imgPath: "/pic1.jpg"
    },
    {
        id: "feature2",
        title: "📈 Visualize Your Financial Health",
        text: "Gain insightful, interactive graphs and charts that give you a real-time snapshot of your financial well-being.",
        imgPath: "/pic2.jpg"
    },
    {
        id: "feature3",
        title: "📱 Access Anywhere, Anytime",
        text: "Our web app is fully responsive, meaning you can access it from your computer, tablet, or mobile device – wherever you are, whenever you need it.",
        imgPath: "/pic3.jpg"
    },
    // {
    //     id: "feature4",
    //     title: "🎯 Stay on Budget: ",
    //     text: "Set up budgets for different categories and receive real-time alerts when you approach or exceed your limits.",
    //     imgPath: "/pic3.jpg"
    // },
    // {
    //     id: "feature5",
    //     title: "🤝 Collaborate with Family or Team: ",
    //     text: "Share your budget and financial goals with your family or team, allowing everyone to be on the same page when it comes to financial decisions..",
    //     imgPath: "/pic3.jpg"
    // }
]

export default function FeaturesSection({ id }: IHeader) {

    return (
        <Section id={id}>
            {featuresData.map((feature, index) => <Feature key={feature.id} data={feature} side={index % 2 ? "right" : "left"} />)}
        </Section>
    )
}
