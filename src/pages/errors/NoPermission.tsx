import { NavLink } from 'react-router-dom'

export default function NoPermission() {
    return (
        <div>
            <NavLink to="/">Go home</NavLink>
            <p>NoPermission</p>
        </div>
    )
}
