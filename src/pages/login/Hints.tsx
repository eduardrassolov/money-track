import { styled } from 'styled-components'

const Hint = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 2rem auto 0;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h5{
        margin: 0 0 0.5rem;
    }
    p{
        margin: 0;
        font-size: 0.8rem;
        color: gray;
    }
`
export default function Hints() {
    return (
        <>
            <Hint>
                <h5>Account 1</h5>
                <p>email: test@test.com </p>
                <p>pass: test </p>
            </Hint>
            <Hint>
                <h5>Account 2</h5>
                <p>email: test1@test.com </p>
                <p>pass: test1 </p>
            </Hint>
        </>
    )
}
