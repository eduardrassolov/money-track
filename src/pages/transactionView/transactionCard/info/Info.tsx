import { InfoSection, Time, Title } from './Info.style'
import dayjs from 'dayjs';

interface IInfo {
    description: string,
    time: Date
}

export default function Info({ description, time }: IInfo) {
    const formattedTime = dayjs(time).format("DD MMMM YYYY HH:mm");

    return (
        <InfoSection>
            <Title>{description}</Title>
            <Time>{formattedTime}</Time>
        </InfoSection>
    )
}
