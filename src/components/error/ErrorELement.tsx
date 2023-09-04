import { useRouteError } from 'react-router-dom'

export default function ErrorELement() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>err</div>
    )
}
