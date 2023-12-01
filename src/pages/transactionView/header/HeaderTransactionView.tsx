import { Header, Text } from './HeaderTransactionView.style'
import DateFilter from '../../../components/dateRangePicker/DateFilter'

export default function HeaderTransactionView() {
    return (
        <Header>
            <Text>Date range: </Text>
            <DateFilter />
        </Header>
    )
}
