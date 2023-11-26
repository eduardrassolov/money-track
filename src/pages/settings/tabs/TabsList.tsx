import { Li, Ul } from "./TabsList.style";
import { tabListData } from "./tabsListData";

interface ITabsList {
    activeTab: string;
    onChangeActiveTab: (tabName: string) => void;
}

export default function TabsList({ activeTab, onChangeActiveTab }: ITabsList) {
    const handleTab = (tabName: string) => onChangeActiveTab(tabName);
    return (
        <Ul>
            {tabListData.map((tab) => (
                <Li $isSelected={activeTab === tab.id} key={tab.id} onClick={() => handleTab(tab.id)}>
                    {tab.title}
                </Li>
            ))}
        </Ul>
    );
}
