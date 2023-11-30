import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { A, ContactList, StyledFooter } from "./FooterContainer.style";

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

export default function FooterContainer() {
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
