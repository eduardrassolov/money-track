import { useRef } from 'react';
import dayjs from 'dayjs'
import { ConfigProvider } from 'antd';
import useTheme from "../../utils/hooks/useTheme";
import { useBoundStore } from "../../store/store";
import useResize from '../../pages/dashboard/pie/useResize';
import { StyledContainer, StyledList, StyledRangePicker } from "./DateFilter.style";
import { rangePresets } from './rangePresets';

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
