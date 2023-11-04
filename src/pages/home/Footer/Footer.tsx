import { styled } from "styled-components";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const StyledFooter = styled.footer`
        background: ${props => props.theme.colorLogoMain};
        color: #F1F0E8;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    p{
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
    }
`
const ContactList = styled.div`
    display: flex;
    gap: 3rem;
`
const A = styled.a`
    text-decoration: none;
    color: #fff;
    transition: 300ms all;

    &:visited{
        color: #fff;
    }

    &:hover{
        transform: translateY(-4px) scale(1.05);
    }
`

const contacts = [
    {
        id: "contactId1",
        icon: <AiFillLinkedin size={"2rem"} />,
        reference: "https://www.linkedin.com/in/eduard-rassolov-273553249",
    },
    {
        id: "contactId2",
        icon: <AiOutlineGithub size={"2rem"} />,
        reference: "https://github.com/eduardrassolov",
    },
    {
        id: "contactId3",
        icon: <AiOutlineMail size={"2rem"} />,
        reference: "mailto:eduard.rassolov0@gmail.com",
    }
]

export default function Footer() {
    return (
        <StyledFooter>
            <p>Created by Eduard Rassolov.</p>
            <ContactList>
                {contacts.map(contact => <A href={contact.reference} key={contact.id}>{contact.icon}</A>)}
            </ContactList>

            <p>&#169; Budget Control 2023 </p>
        </StyledFooter>
    )
}
