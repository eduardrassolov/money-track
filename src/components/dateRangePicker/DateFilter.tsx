import { useEffect, useState } from "react"
import { ConfigProvider, DatePicker } from 'antd';
import styled from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import { devices } from "../../styles/breakPoints";
import dayjs from "dayjs";
import useRangePicker from "./useRangePicker";
import { useSearchParams } from "react-router-dom";
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

    const { rangeDates, changeRange } = useRangePicker();
    function handleChange(e) {
        changeRange(e);
    }

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!rangeDates) {
            setSearchParams(params => {
                params.delete("from");
                params.delete("to");
                return params;
            })
        }
        setSearchParams(params => {
            const [start, end] = rangeDates
            params.set("from", dayjs(start.$d).format("DD-MMM-YYYY"));
            params.set("to", dayjs(start.$d).format("DD-MMM-YYYY"));
            return params;

        })
    }, [rangeDates])


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