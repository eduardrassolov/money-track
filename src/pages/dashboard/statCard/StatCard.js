import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Description, IconContainer, StatContainer } from "./StatCard.style";
const StatCard = ({ item: { iconBg, borderColor, name, icon }, value }) => {
    return (_jsx(_Fragment, { children: _jsxs(StatContainer, { "$borderColor": borderColor, children: [_jsx(IconContainer, { "$bgColor": iconBg, children: icon }), _jsxs(Description, { children: [_jsx("h3", { children: name }), _jsx("p", { children: value })] })] }) }));
};
export default StatCard;
