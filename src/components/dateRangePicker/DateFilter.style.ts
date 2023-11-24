import styled from "styled-components";
import { DatePicker } from "antd";
import { devices } from "../../config/breakPoints";

const { RangePicker } = DatePicker;

export const StyledRangePicker = styled(RangePicker)`
    .ant-picker-input > input {
        text-align: center;
        font-size: 0.9rem;
    }

    background: ${(props) => props.theme.background2};
    border: 1px solid ${(props) => props.theme.border};

    @media only screen and (min-width: ${devices.sm}px) {
    }
`;

export const StyledContainer = styled.div<{ $isSmallScreen: boolean }>`
    .ant-picker-panels > *:nth-child(2) {
        display: none;
        justify-content: center;
        text-align: center;
        align-items: center;
        /* width: 100%; */
        @media only screen and (min-width: ${devices.sm}px) {
            display: flex;
            flex-direction: row;
            /* width: fit-content; */
        }
    }
    .ant-picker-header > button {
        visibility: visible !important;
    }
`;

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    line-height: normal;
    flex-wrap: wrap;
    gap: 0.3rem;
    padding: 0;
    justify-content: center;
    align-items: center;
    overflow: scroll;

    li {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 7px;
        padding: 0.5rem;
        cursor: pointer;
        transition: 300ms all;

        &:hover {
            background: ${(props) => props.theme.background2};
            border: 1px solid ${(props) => props.theme.colorLogoMain};
        }
    }
`;
