
import styled from 'styled-components';
import { STATS_CARD_DATA } from '../../../config/statsCardView'
import StatCard from './StatCard'

const RowContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    margin: 0;
    gap: 0.3rem;
`;

interface IStatsCardList {
    statsData: number[];
}

export default function StatsCardList({ statsData }: IStatsCardList) {
    console.log("Stat rend", statsData);
    return (
        <RowContainerCards>
            {STATS_CARD_DATA.map((item, index) => <StatCard key={item.name} item={item} value={statsData[index]} index={index} />)}
        </RowContainerCards>
    )
}
