import { SmallText } from './CategoryCard.style'

export default function CategoryCard({ text }: { text: string }) {
    return (
        <SmallText>{text}</SmallText>
    )
}
