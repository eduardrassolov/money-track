import styled from 'styled-components';

const tabListData = [
    {
        id: "profileTab",
        title: "Profile"
    },
    {
        id: "applicationTab",
        title: "Application"
    }
]

const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    border: 1px solid ${props => props.theme.border};
    border-radius: 7px;
    width: fit-content;
`

const Li = styled.li<{ $isSelected: boolean }>`
    color: ${props => props.$isSelected ? props.theme.colorLogoMain : ""};
    background: ${props => props.$isSelected ? props.theme.background2 : ""};
    border-radius: 5px;
    padding: 0.5rem 1rem;
    &:hover{
        cursor: pointer;
    }
`

interface ITabsList {
    activeTab: string,
    onChangeTab: (tabName: string) => void
}

export default function TabsList({ activeTab, onChangeTab }: ITabsList) {
    const handleTab = (tabName: string) => onChangeTab(tabName);

    return (
        <Ul>
            {tabListData.map(tab =>
                <Li $isSelected={activeTab === tab.id} key={tab.id} onClick={() => handleTab(tab.id)}>{tab.title}</Li>)
            }

        </Ul>
    )
}
