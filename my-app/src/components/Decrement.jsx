const Decrement = ({count, setCount}) => {
    return (
        <div>
            <button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
        </div>
    )
}

export default Decrement