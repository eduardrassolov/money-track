
import styled from "styled-components";
import { useRef } from 'react';
import dayjs from 'dayjs'
import { ConfigProvider, DatePicker, TimeRangePickerProps } from 'antd';
import useTheme from "../../utils/hooks/useTheme";
import { devices } from "../../config/breakPoints";
import { useBoundStore } from "../../store/store";
import useResize from '../../pages/dashboard/pie/useResize';
const { RangePicker } = DatePicker;

const StyledRangePicker = styled(RangePicker)`
    .ant-picker-input > input{
        text-align: center;
        font-size: 0.9rem;

    }

    background: ${props => props.theme.background2};
    border: 1px solid ${props => props.theme.border};

    
    @media only screen and (min-width: ${devices.sm}px){

    }
`

const StyledContainer = styled.div<{ $isSmallScreen: boolean }>`
    .ant-picker-panels > *:nth-child(2) {
        display: none;
        justify-content: center;
        text-align: center;
        align-items: center;
        /* width: 100%; */
        @media only screen and (min-width: ${devices.sm}px){
            display: flex;
            flex-direction:row;
            /* width: fit-content; */
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

    const { range, changeRange } = useBoundStore((state) => (
        {
            range: state.range,
            changeRange: state.changeRange
        }));

    const [dateFrom, dateTo] = range;
    //TODO refactor ANY
    function handleChange(value: any) {
        if (!value) {
            return;
        }

        changeRange(value);
    }

    const handleClickPreset = (value: any) => {
        handleChange(value);
        inputRef.current?.blur();
    }

    return (
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
            {/* TODO: fix error with ref */}
            <StyledRangePicker
                //@ts-ignore
                ref={inputRef}
                allowClear={false}
                format={"DD-MMM-YYYY"}
                value={[dayjs(new Date(dateFrom)), dayjs(new Date(dateTo))]}
                onChange={handleChange}
                size={"small"}
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

    )
}
