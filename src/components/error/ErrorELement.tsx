import { useRouteError } from 'react-router-dom'

export default function ErrorELement() {
    const error = useRouteError();

    return (
        <div>{error.message}</div>
    )
}
