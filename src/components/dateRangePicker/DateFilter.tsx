import { ConfigProvider, DatePicker } from 'antd';
import styled from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import { devices } from "../../styles/breakPoints";
import dayjs from 'dayjs'
import { useBoundStore } from "../../store/store";
import { RangeDate } from '../../store/storeConfig';
const { RangePicker } = DatePicker;

const StyledRangePicker = styled(RangePicker)`
    .ant-picker-input > input{
        text-align: center;
        font-size: 0.9rem;
        padding: 0.1rem;
    }
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    width: 100%;
    text-align: center;

    @media only screen and (min-width: ${devices.sm}px){
        width: fit-content;
    }
`
const StyledContainer = styled.div`
    .ant-picker-panels {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;

        @media only screen and (min-width: ${devices.sm}px){
            flex-direction:row;
        }
    }
`

export default function DateFilter() {
    const { theme } = useTheme();

    const { filterRange: { from, to }, setFilterRange } = useBoundStore((state) => (
        {
            setFilterRange: state.setFilterRange,
            filterRange: state.filterRange
        }));
    console.log(from, to);

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
                        colorTextDisabled: "gray"
                    }
                }
            }}>

                <StyledRangePicker
                    value={rangeDates}
                    onChange={handleChange}
                    size={"large"}
                    picker={"date"}
                    style={{ alignItems: "center", textAlign: "center" }}
                    panelRender={(node) => (
                        <StyledContainer>{node}</StyledContainer>
                    )}
                />
            </ConfigProvider>
        </>
    )
}
