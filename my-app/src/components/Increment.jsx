const Increment = ({setcount}) => {
    return (
        <div>
            <button onClick = {() => setcount((count) => count + 1)}>Increment</button>
        </div>
    )
}

export default Increment