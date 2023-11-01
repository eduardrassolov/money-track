import React from 'react'
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
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
`


export default function TabsList({ activeTab, onChangeTab }) {
    const handleTab = (tabName: string) => onChangeTab(tabName);
    return (
        <Ul>
            {tabListData.map(tab => <li key={tab.id} onClick={() => handleTab(tab.id)}>{tab.title}</li>)}
        </Ul>
    )
}
