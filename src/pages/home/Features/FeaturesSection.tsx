import { IFeatureData } from "./IFeatureData.ts";
import FetItem from "./item/FetItem.tsx";



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

interface IHeader {
    id: string;
}

export function FeaturesSection({ id }: IHeader) {

    return (
        <section id={id}>
            {featuresData.map((feature, index) => <FetItem key={feature.id} data={feature} side={index % 2 ? "right" : "left"} />)}
        </section>
    )
}
