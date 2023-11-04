import { ConfigProvider, DatePicker, TimeRangePickerProps, theme } from 'antd';
import styled from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import { devices } from "../../styles/breakPoints";
import dayjs from 'dayjs'
import { useBoundStore } from "../../store/store";
import { RangeDate } from '../../store/storeConfig';
import { useRef } from 'react';
import useResize from '../../pages/dashboard/pie/useResize';
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
    z-index: 0;


    @media only screen and (min-width: ${devices.sm}px){
        width: fit-content;
    }
`
const StyledContainer = styled.div<{ $isSmallScreen: boolean }>`
    .ant-picker-panels > *:nth-child(2) {
        display: none;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 100%;
        @media only screen and (min-width: ${devices.sm}px){
            display: flex;
            flex-direction:row;
            width: fit-content;
        }  
    }  
    .ant-picker-header > button{
            visibility: visible !important;
        }
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    line-height: normal;   
    flex-wrap:wrap ;
    gap: 0.3rem;
    padding: 0;
    justify-content: center;
    align-items: center;
    overflow: scroll;

    li{
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid ${props => props.theme.border};
        border-radius: 7px;
        padding: 0.5rem;
        cursor: pointer;
        transition: 300ms all;

        &:hover{
            background: ${props => props.theme.background2};
            border: 1px solid ${props => props.theme.colorLogoMain};
        }
    }
`

const rangePresets: TimeRangePickerProps["presets"] = [
    { label: 'Today', value: [dayjs(), dayjs()] },
    { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
    { label: 'This Week', value: [dayjs().startOf("week"), dayjs()] },
    { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
    { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
    { label: 'This month', value: [dayjs().startOf("month"), dayjs()] },
    { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
    { label: 'This year', value: [dayjs().startOf("year"), dayjs()] },
]

export default function DateFilter() {
    const { theme } = useTheme();
    const inputRef = useRef<HTMLInputElement>();
    const { isSmallScreen } = useResize();

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
        if (!value) {
            return;
        }

        const [startValue, endValue] = value;
        const fromTo: RangeDate = {
            from: dayjs(startValue.$d).format("YYYY-MM-DD"),
            to: dayjs(endValue.$d).format("YYYY-MM-DD")
        }
        setFilterRange({ ...fromTo });
    }

    const handleClickPreset = (value) => {
        handleChange(value);
        inputRef.current?.blur();
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
                        colorTextDisabled: "gray",
                    }
                }
            }}>
                <StyledRangePicker
                    ref={inputRef}
                    value={rangeDates}
                    onChange={handleChange}
                    size={"large"}
                    picker={"date"}
                    style={{ alignItems: "center", textAlign: "center" }}
                    panelRender={(node) => (
                        <StyledContainer $isSmallScreen={isSmallScreen}>{node}</StyledContainer>
                    )}
                    renderExtraFooter={() =>
                        <StyledList>
                            {rangePresets?.map(rangeItem =>
                                <li onClick={() => handleClickPreset(rangeItem.value)}>{rangeItem.label}</li>
                            )}
                        </StyledList>
                    }
                />
            </ConfigProvider>
        </>
    )
}
