import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HiMiniArrowRightOnRectangle, HiOutlineHome, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import styled from 'styled-components';
import useTheme from '../../../../utils/hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import { ROUTES } from '../../../../config/routes';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { apiLogout } from '../../../../services/api/apiUser';
import AnimatedContainer from '../../../animation/AnimatedContainer';
import Profile from '../../../user/Profile';



const Trigger = styled(DropdownMenu.Trigger)`
    background: transparent;
    border: none;
    color: ${props => props.theme.text};
    display: flex;

    &:hover{
        cursor: pointer;

    }
    
`
const Separator = styled(DropdownMenu.Separator)`
    height: 1px;
    background: ${props => props.theme.border};
`
const Item = styled(DropdownMenu.Item)`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.2rem 0.5rem;
    background: ${props => props.theme.backgound};

    &:hover{
        outline: none;
        background:  ${props => props.theme.colorLogoMain};
        color: #ffff;
        border-radius: 3px;
    }
`
const Content = styled(DropdownMenu.Content)`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.border};
    min-width: 150px;
    padding: 0.5rem 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 7px;
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export default function MenuDropDown() {

    const { changeTheme } = useTheme();
    const navigate = useNavigate();

    function handleClick(path: string) {
        navigate(path);
    }

    const { mutate: logout } = useMutation({
        mutationFn: apiLogout,
        onSuccess: () => navigate(ROUTES.LOGIN, { replace: true })
    })


    return (
        <DropdownMenu.Root>
            <Trigger>
                {/* <IconItem><HiOutlineCog6Tooth /></IconItem> */}
                <Profile />
            </Trigger>

            <DropdownMenu.Portal>
                <AnimatedContainer duration={0.2}>
                    <Content sideOffset={5}>
                        <Item onClick={changeTheme}>
                            <ThemeToggle />
                        </Item>

                        <Item onClick={() => handleClick(ROUTES.SETTINGS)}>
                            <HiOutlineWrenchScrewdriver /> Settings
                        </Item>

                        <Separator />

                        <Item onClick={() => handleClick(ROUTES.HOME)}>
                            <HiOutlineHome /> Home
                        </Item>

                        <Item onClick={() => logout()}>
                            <HiMiniArrowRightOnRectangle />Log out
                        </Item>
                    </Content>
                </AnimatedContainer>
            </DropdownMenu.Portal>
        </DropdownMenu.Root >
    )
}
