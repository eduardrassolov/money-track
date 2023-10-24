import { ConfigProvider, DatePicker } from 'antd';
import styled from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import { devices } from "../../styles/breakPoints";
import dayjs from 'dayjs'
import { RangeDate, useCurrStore } from "../../store/store";
const { RangePicker } = DatePicker;

const StyledRangePicker = styled(RangePicker)`
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    width: 100%;

    @media only screen and (min-width: ${devices.sm}px){
        width: fit-content;
    }
`
const StyledContainer = styled.div`
    .ant-picker-panels {
        display: flex;
        flex-direction: column;

        @media only screen and (min-width: ${devices.sm}px){
            flex-direction:row;
        }
    }
`

export default function DateFilter() {
    const { theme } = useTheme();

    const { filterRange: { from, to }, setFilterRange } = useCurrStore((state) => (
        {
            setFilterRange: state.setFilterRange,
            filterRange: state.filterRange
        }));

    //TODO refactor ANY
    const rangeDates: any = [dayjs(from), dayjs(to)];

    //TODO refactor ANY
    function handleChange(value: any) {
        if (!value)
            return;

        const [startValue, endValue] = value;
        const fromTo: RangeDate = {
            from: dayjs(startValue.$d).format("YYYY-MM-DD"),
            to: dayjs(endValue.$d).format("YYYY-MM-DD")
        }
        setFilterRange({ ...fromTo });
    }

    return (
        <>
            <ConfigProvider theme={{
                components: {
                    DatePicker: {
                        cellWidth: 38,
                        cellHeight: 20,
                        colorText: theme.text,
                        colorTextHeading: theme.text,
                        colorIcon: theme.text,
                        colorBgElevated: theme.background,
                        colorIconHover: "gray",
                        colorTextPlaceholder: theme.text,
                        cellActiveWithRangeBg: theme.border,
                        cellHoverWithRangeBg: theme.border,
                    }
                }
            }}>

                <StyledRangePicker
                    value={rangeDates}
                    onChange={handleChange}
                    size={"large"}
                    picker={"date"}
                    panelRender={(node) => (
                        <StyledContainer>{node}</StyledContainer>
                    )}
                />
            </ConfigProvider>
        </>
    )
}
